import * as C from './styles';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { Icon } from '@iconify/react';
import { formatToBRL } from '../../helpers/formatToCurrencies';

const Users = (): JSX.Element => {
  const { users } = useContext(UserContext);

  return (
    <C.Container>
      {
        users.map((user) => (
          <C.Users key={user.id}>

            <C.User>
              <Icon
                icon='healthicons:ui-user-profile-outline'
                width='45'
                height='45'
              />
              {user.name}
            </C.User>

            <C.User>
              {formatToBRL(+user.value)}
            </C.User>

          </C.Users>
        ))
      }
    </C.Container>
  )
};

export default Users;
