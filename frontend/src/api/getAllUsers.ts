import axios, { AxiosResponse } from 'axios';
import api from '.';

const getAllUser = (): Promise<AxiosResponse> => {
  return api.get(`/users`);
};

export default getAllUser;