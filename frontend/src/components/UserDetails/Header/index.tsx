import { UserProps } from '../../../types/UsersType';
import { Icon } from '@iconify/react';
import * as C from './styles';

const UserDetailsHeader = ({ user: { name } }: UserProps): JSX.Element => {
  return (
    <C.Header>

      <Icon
        icon='healthicons:ui-user-profile-outline'
        width='45'
        height='45'
      />

      <C.Name>{name}</C.Name>
      <></>
    </C.Header>
  )
};

export default UserDetailsHeader;
