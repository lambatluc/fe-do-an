import { ICategory } from '@/types/lives';
import { api } from '../lib/api';
export const getCategory = async (): Promise<ICategory[]> => {
    return await api.get('/categoryData');
};