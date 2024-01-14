import { fetchCatDetails } from 'app/(public-pages)/dashboard/actions';
import { CatDetails } from '../cat-details/catDetails';

type CatDetailsContainerProps = {
  id: string;
};

export async function CatDetailsContainer({ id }: CatDetailsContainerProps) {
  const data = await fetchCatDetails(id);

  /* const [data, setData] = useState<CatModel | null>(null);

  useEffect(() => {
    fetchCatDetails(id)
     // .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
        // setLoading(false);
      });
  }, [id]);*/

  return <CatDetails data={data} />;
}
