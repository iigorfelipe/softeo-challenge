import { ReactNode, useState } from 'react';
import { UsersType } from '../types/UsersType';
import UserContext from './UserContext';
import getAllUser from '../api/getAllUsers';

type UserContextProps = {
  children: ReactNode;
};

const UserContextProvider = ({children}: UserContextProps) => {
  const [users, setUsers] = useState<UsersType[]>([]);

  getAllUser().then((response) => setUsers(response.data));

  return (
    <UserContext.Provider value={{
        users,
        setUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  )
};

export default UserContextProvider;
