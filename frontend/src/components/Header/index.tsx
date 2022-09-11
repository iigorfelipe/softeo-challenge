import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { Icon } from '@iconify/react';
import * as C from './styles';
import swal from 'sweetalert';
import * as H from '../../helpers/calculateValues';

const Header = (): JSX.Element => {
  const { users } = useContext(UserContext);

  const values = users.map((user) => +user.value);
  const installments = users.map((user) => user.installments);

  const totalValue = H.sumOfValuesFormatted(values);
  const totalInstallments = H.sumOfValues(installments);
  const totalValueOfMonth = H.sumOfValuesFormatted(H.divideOfValues(values, installments));

  return (
    <C.Container>

      <C.Details>
        <C.Detail>Usuários: {users.length}</C.Detail>
        <C.Detail>Parcelas: {totalInstallments}</C.Detail>

        <C.NextPage>

          <C.Link href='/users/details'>Cálculo detalhado</C.Link>

        </C.NextPage>
      </C.Details>

      <C.Values>
        <C.Detail>{totalValue}</C.Detail>

        <C.IconQuestion>

          <Icon
            icon='ant-design:question-circle-filled'
            onClick={() => swal(
              'Valores a receber',
              `Total:
              ${totalValue}
    
              Neste mês:
              ${totalValueOfMonth}`
            )}
          />

        </C.IconQuestion>

        <C.Detail>{totalValueOfMonth}</C.Detail>
      </C.Values>

    </C.Container>
  )
};

export default Header;
