import { useQuery } from '@tanstack/react-query';
import { getLiveStream } from "@/api";
import { ILiveStream } from "@/types/lives";

const useFetchData = () => {
  const { data, error, isLoading } = useQuery<ILiveStream[]>({
    queryKey: ['liveStreams'],
    queryFn: getLiveStream,
  });

  return { data, error, isLoading };
};

export default useFetchData;
