import { useQuery } from '@tanstack/react-query';
import { getLiveStream } from "@/api";
import { ILiveStream } from "@/types/lives";

const fetchLiveStreams = async (): Promise<ILiveStream[]> => {
  const response = await getLiveStream();
  return response;
};

const useFetchData = () => {
  const { data, error, isLoading } = useQuery<ILiveStream[]>({
    queryKey: ['liveStreams'],
    queryFn: fetchLiveStreams,
  });

  return { data, error, isLoading };
};

export default useFetchData;
