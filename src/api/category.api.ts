import { ICategory } from '@/types/lives';
import { api } from '../lib/api';
export const getCategory = (): Promise<ICategory[]> => api.get('/categoryData');