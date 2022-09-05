import { useState } from 'react';
import { formatToBRL } from '../../../helpers/formatToCurrencies';
import { UserProps } from '../../../types/UsersType';
import swal from 'sweetalert';
import * as C from './styles';

const UserDetailsFilter = ({ user }: UserProps) => {
  const initialValue = +user.value / user.parcel;
  
  const [value, setValue] = useState(initialValue);
  const [period, setPeriod] = useState('mês');
  const [option1] = useState(3);
  const [option2] = useState(6);
  const [option3] = useState(1);

  const totalValueOfMonth = formatToBRL(value);

  const calculate = (option: number) => {
    if (option === option3) option = 12;

    const sum = option * initialValue;

    if (+user.value >= sum) {
      if (option === option1) setValue(sum);
      if (option === option2) setValue(sum);
      if (option === 12) setValue(sum);

      setPeriod('período');
    } else {    
      swal(
        `${user.name} possui apenas ${user.parcel} parcelas`
      )
    }
  };

  const customCalculate = () => {
    console.log('CLICOU');
  };

  return (
    <C.Container>

      <C.Message>
        {`Neste ${period} você receberá ${totalValueOfMonth}`}
      </C.Message>

      <C.P>Verifique outros períodos:</C.P>

      <C.FilterContainer>

        <C.Filters>

          <C.Filter>

            <C.Border onClick={() => calculate(option1)}>
              <C.Number>
                {option1}
              </C.Number>    
            </C.Border>

            <C.Data>meses</C.Data>

          </C.Filter>

          <C.Filter>

            <C.Border onClick={() => calculate(option2)}>
              <C.Number>
                {option2}
              </C.Number>            
            </C.Border>

            <C.Data>meses</C.Data>

          </C.Filter>

          <C.Filter>

            <C.Border onClick={() => calculate(option3)}>
              <C.Number>
                {option3}
              </C.Number>            
            </C.Border>

            <C.Data>ano</C.Data>

          </C.Filter>

        </C.Filters>

        <C.CustomFilter onClick={() => customCalculate()}>
          Escolha um outro período
        </C.CustomFilter>

      </C.FilterContainer>

    </C.Container>
  )
};

export default UserDetailsFilter;
