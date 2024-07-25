import { useQuery } from '@tanstack/react-query';
import { ICategory } from "@/types/lives";
import { getCategory } from '@/api';

const useFetchCategory = () => {
  const { data, error, isLoading } = useQuery<ICategory[]>({
    queryKey: ['category'],
    queryFn: getCategory,
  });

  return { data, error, isLoading };
};

export default useFetchCategory;
