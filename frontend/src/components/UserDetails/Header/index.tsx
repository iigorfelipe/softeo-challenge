import { UserProps } from '../../../types/UsersType';
import { Icon } from '@iconify/react';
import * as C from './styles';
import { useNavigate } from 'react-router-dom';

const UserDetailsHeader = ({ user: { name } }: UserProps): JSX.Element => {
  const navigate = useNavigate();  

  return (
    <C.Header>

      <Icon
        icon='healthicons:ui-user-profile-outline'
        width='45'
        height='45'
      />

      <C.Name>{name}</C.Name>

      <Icon
        icon='ion:arrow-back-circle-outline'
        width='35'
        height='35'
        color='blueviolet'
        onClick={() => navigate('../')}
      />

    </C.Header>
  )
};

export default UserDetailsHeader;
