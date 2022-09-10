import * as C from './styles';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { Icon } from '@iconify/react';
import * as H from '../../helpers';
import { useNavigate } from 'react-router-dom';

const Users = (): JSX.Element => {
  const { users } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <C.Container>
      {
        users.map((user) => (
          <C.Users key={user.id} onClick={() => navigate(`../user/${user.id}`)}>

            <C.User>
              <Icon
                icon='healthicons:ui-user-profile-outline'
                width='45'
                height='45'
              />
              {user.name}
            </C.User>

            <C.User>
              {H.formatCurrencyToBRL(+user.value)}
            </C.User>

          </C.Users>
        ))
      }
    </C.Container>
  )
};

export default Users;
