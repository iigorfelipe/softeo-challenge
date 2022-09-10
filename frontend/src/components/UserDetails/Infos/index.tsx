import { UserProps } from '../../../types/UsersType';
import { Icon } from '@iconify/react';
import * as C from './styles';
import * as H from '../../../helpers';

const UserDetailsInfos = ({ user }: UserProps): JSX.Element => {

  const temporaryFakeContact = {
    whatsapp: '(00) 0 0000-0000',
    email: 'email@email.com',
  };
  
  return (
    <C.Container>

      <C.Infos>

        <C.Contanct>Contatos de {user.name}</C.Contanct>

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

        <C.Values>{H.formatCurrencyToBRL(+user.value)}</C.Values>
        <C.Values>Parcelas: {user.parcel}</C.Values>
        <C.Values>Vencimento: {user.payday}</C.Values>
  
      </C.Details>
  
    </C.Container>
  )
};

export default UserDetailsInfos;
