import { ILiveStream } from '@/types/lives';
import { api } from '../lib/api';
export const getLiveStream = async (): Promise<ILiveStream[]> => {
    return await api.get('/liveStream');
};