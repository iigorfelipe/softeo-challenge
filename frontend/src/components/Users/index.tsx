import * as C from './styles';
import { UsersType } from '../../types/UsersType';
import { useState } from 'react';
import getAllUser from '../../api/getAllUsers';

const Users = () => {
  const [users, setUsers] = useState<UsersType[]>();
  
  getAllUser().then((response) => setUsers(response.data));

  return (
    <C.Container>
      {
        users &&
        users.map((item) => (
          <C.Users key={item.id}>
            <C.User>{item.name}</C.User>
            <C.User>{item.value}</C.User>
          </C.Users>
        ))
      }
    </C.Container>
  )
};

export default Users;
