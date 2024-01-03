import { useCallback, useEffect, useRef, useState, FC } from 'react';
import { LoadMoreContainer } from './loadMore.styled';

export type LoadMoreResult<T extends object> = {
  page: number;
  data: T | null;
  loading: boolean;
  error: boolean;
  LoadMoreCallerComponent: FC;
};

export const useLoadMore = <T extends object>(
  query: (page: number) => () => Promise<T>
) => {
  const [data, setData] = useState<T | null>(null);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const observerRef = useRef<IntersectionObserver>();
  const observerTarget = useRef(null);

  const observe = useCallback(() => {
    if (observerTarget.current) {
      observerRef.current?.observe(observerTarget.current);
    }
  }, []);

  const unobserve = useCallback(() => {
    if (observerTarget.current) {
      observerRef.current?.unobserve(observerTarget.current);
    }
  }, []);

  const makeRequest = useCallback(
    () =>
      query(page)()
        .then((res) => {
          setPage((page) => page + 1);
          setData(res);
          console.log('Load more', page);
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false)),
    [page, query]
  );

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoading(true);
          makeRequest();
        }
      },
      { threshold: 1 }
    );

    observe();

    return unobserve;
  }, [makeRequest, observe, observerTarget, page, query, unobserve]);

  const LoadMoreCallerComponent = useCallback(
    () => <LoadMoreContainer ref={observerTarget} />,
    []
  );

  useEffect(() => {
    if (loading || error) {
      unobserve();
    } else {
      observe();
    }
  }, [error, loading, observe, unobserve]);

  const result: LoadMoreResult<T> = {
    page,
    data,
    loading,
    error,
    LoadMoreCallerComponent,
  };

  return result;
};
