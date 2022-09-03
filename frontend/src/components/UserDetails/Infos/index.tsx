import { UserProps } from '../../../types/UsersType';
import { Icon } from '@iconify/react';
import * as C from './styles';
import { formatToBRL } from '../../../helpers/formatToCurrencies';

const UserDetailsInfos = ({ user }: UserProps): JSX.Element => {

  const temporaryFakeContact = {
    whatsapp: '(00) 0 0000-0000',
    email: 'email@email.com',
  };
  
  return (
    <C.Container>

      <C.Infos>

        <C.Contanct>{`${user.name}'s Contacts`}</C.Contanct>

        <C.Contanct>

          <C.Icon>
            <Icon
              icon='akar-icons:whatsapp-fill'
              width='15'
            />
          </C.Icon>

          {temporaryFakeContact.whatsapp}
        </C.Contanct>

        <C.Contanct>

          <C.Icon>
            <Icon
              icon='carbon:email'
              width='17'
            />
          </C.Icon>

          {temporaryFakeContact.email}
        </C.Contanct>

      </C.Infos>

      <C.Details>

        <C.Values>{formatToBRL(+user.value)}</C.Values>
        <C.Values>{`Parcels: ${user.parcel}`}</C.Values>
        <C.Values>{`Payday: ${user.payday}`}</C.Values>
  
      </C.Details>
  
    </C.Container>
  )
};

export default UserDetailsInfos;
