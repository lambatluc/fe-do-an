import {
    type AxiosError,
    type AxiosResponse,
    type InternalAxiosRequestConfig
  } from 'axios';
  
  export const requestInterceptor = (
    config: InternalAxiosRequestConfig
  ): InternalAxiosRequestConfig => {
    return config;
  };
  export const successInterceptor = (response: AxiosResponse): AxiosResponse => {
    return response.data;
  };
  export const errorInterceptor = async (error: AxiosError): Promise<void> => {
    return await Promise.reject(error.response?.data);
  };
  