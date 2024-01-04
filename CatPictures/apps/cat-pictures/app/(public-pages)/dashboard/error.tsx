'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <div>Smth went wrong...</div>
      <button onClick={() => reset()}>Try again</button>
    </>
  );
}
