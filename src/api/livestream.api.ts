import { ILiveStream } from '@/types/lives';
import { api } from '../lib/api';
export const getLiveStream = (): Promise<ILiveStream[]> => api.get('/liveStream');