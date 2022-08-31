import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { Icon } from '@iconify/react';
import * as C from './styles';
import swal from 'sweetalert';
import * as H from '../../helpers/calculateValues';

const Header = (): JSX.Element => {
  const { users } = useContext(UserContext);

  const values = users.map((user) => +user.value);
  const parcels = users.map((user) => user.parcel);
  const monthTotal = H.divideOfValues(values, parcels);

  return (
    <C.Container>

      <C.Details>
        <C.Detail>Usuários: {users.length}</C.Detail>
        <C.Detail>Parcelas: {H.sumOfValues(parcels)}</C.Detail>

        <C.NextPage>

          <C.Link href='/users/details'>Cálculo detalhado</C.Link>

        </C.NextPage>
      </C.Details>

      <C.Values>
        <C.Detail>{H.sumOfValuesFormatted(values)}</C.Detail>

        <C.IconQuestion>

          <Icon
            icon='ant-design:question-circle-filled'
            onClick={() => swal(
              'Valores a receber',
              `Total:
              ${H.sumOfValuesFormatted(values)}
    
              Neste mês:
              ${H.sumOfValuesFormatted(monthTotal)}`
            )}
          />

        </C.IconQuestion>

        <C.Detail>{H.sumOfValuesFormatted(monthTotal)}</C.Detail>
      </C.Values>

    </C.Container>
  )
};

export default Header;
