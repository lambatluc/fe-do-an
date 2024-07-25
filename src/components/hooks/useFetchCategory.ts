import { useQuery } from '@tanstack/react-query';
import { ICategory } from "@/types/lives";
import { getCategory } from '@/api';

const fetchCategory = async (): Promise<ICategory[]> => {
  const response = await getCategory();
  return response;
};

const useFetchCategory = () => {
  const { data, error, isLoading } = useQuery<ICategory[]>({
    queryKey: ['liveStreams'],
    queryFn: fetchCategory,
  });

  return { data, error, isLoading };
};

export default useFetchCategory;
