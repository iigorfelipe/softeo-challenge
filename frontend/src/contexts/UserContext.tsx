import { createContext } from 'react';
import { UsersType } from '../types/UsersType';

type UserContextType = {
  users: UsersType[]
  setUsers: (newState: []) => void,
};

const initialValue = {
  users: [],
  setUsers: () => {},
};

const UserContext = createContext<UserContextType>(initialValue);

export default UserContext
