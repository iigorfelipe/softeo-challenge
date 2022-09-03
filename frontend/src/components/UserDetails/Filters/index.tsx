import { divideOfValues } from '../../../helpers/calculateValues';
import { formatToBRL } from '../../../helpers/formatToCurrencies';
import { UserProps } from '../../../types/UsersType';
import * as C from './styles';

const UserDetailsFilter = ({ user }: UserProps) => {
  const value = formatToBRL(+user.value / user.parcel);

  return (
    <C.Container>

      <C.Message>
        {`Neste mês você receberá ${value} de ${user.name}`}
      </C.Message>

      <C.P>Verifique outros períodos:</C.P>

      <C.FilterContainer>

        <C.Filters>

          <C.Filter>

            <C.Border>
              <C.Number>3</C.Number>
            </C.Border>

            <C.Data>meses</C.Data>

          </C.Filter>
          
          <C.Filter>

            <C.Border>
              <C.Number>6</C.Number>
            </C.Border>

            <C.Data>meses</C.Data>

          </C.Filter>
          
          <C.Filter>

            <C.Border>
              <C.Number>1</C.Number>
            </C.Border>

            <C.Data>ano</C.Data>

          </C.Filter>

        </C.Filters>

        <C.CustomFilter>
          Escolha um outro período
        </C.CustomFilter>
      
      </C.FilterContainer>

    </C.Container>
  )
};

export default UserDetailsFilter;