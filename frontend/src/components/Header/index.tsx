import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { formatToBRL } from '../../utils/formatToCurrencies';
import * as C from './styles';

const Header = (): JSX.Element => {
  const { users } = useContext(UserContext);

  const values = users.map((user) => +user.value);
  const parcels = users.map((user) => user.parcel);
  const array: number[] = [];

  values.forEach((value, i) => {
    parcels.forEach((parcel, y) => {
      if (i === y) {
        array.push(value / parcel);
      }
    });
  });

  const sumOfValues = values.reduce((a, b) => a + b, 0);
  const sumOfParcels = parcels.reduce((a, b) => a + b, 0);
  const sumOfMouth = array.reduce((a, b) => a + b, 0);

  return (
    <C.Container>

      <C.Details>
        <C.Detail>Usuários: {users.length}</C.Detail>
        <C.Detail>Parcelas: {sumOfParcels}</C.Detail>

        <C.NextPage>
          <C.Link href='/users/details'>Cálculo detalhado</C.Link>
        </C.NextPage>      
      </C.Details>
  

      <C.Values>
        <C.Detail>{formatToBRL(sumOfValues)}</C.Detail>
        <C.Detail>{formatToBRL(sumOfMouth)}</C.Detail>
      </C.Values>

    </C.Container>
  )
};

export default Header;
