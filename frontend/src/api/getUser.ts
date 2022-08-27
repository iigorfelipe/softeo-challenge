import { AxiosResponse } from 'axios';
import api from '.';

const getUser = (id: number): Promise<AxiosResponse> => {
  return api.get(`/user/${id}`);
};

export default getUser;