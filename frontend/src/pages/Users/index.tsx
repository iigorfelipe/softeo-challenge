import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserDetailsFilter from '../../components/UserDetails/Filters';
import UserDetailsHeader from '../../components/UserDetails/Header';
import UserDetailsInfos from '../../components/UserDetails/Infos';
import UserContext from '../../contexts/UserContext';
import { UsersType } from '../../types/UsersType';

const UserDetails = (): JSX.Element => {
  const { id = 0 } = useParams();
  const { users } = useContext(UserContext);
  const [user, setUser] = useState<UsersType>();

  useEffect(() => { 
    users.forEach((user) => user.id === +id && setUser(user));
  });

  return (
    <>
      {
        user &&
        <>
          <UserDetailsHeader user={user} />
          <UserDetailsInfos user={user} />
          <UserDetailsFilter user={user} />
        </>
      }
    </>
  );
};

export default UserDetails;
