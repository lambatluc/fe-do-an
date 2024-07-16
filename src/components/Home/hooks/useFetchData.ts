import { getLiveStream } from "@/api";
import { ILiveStream } from "@/types/lives";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useFetchData = (): { data: ILiveStream[], setData: Dispatch<SetStateAction<ILiveStream[]>>, isLoading: boolean } => {
    const [data, setData] = useState<ILiveStream[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
      const fetchData = async (): Promise<void> => {
        setIsLoading(true);
        try {
          const response = await getLiveStream();
          setData(response);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData().catch(error => console.error(error));
    }, []);
    return {
      data,
      setData,
      isLoading
    };
  };