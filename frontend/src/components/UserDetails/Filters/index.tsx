import { useState } from 'react';
import { UserProps } from '../../../types/UsersType';
import swal from 'sweetalert';
import * as H from '../../../helpers'
import * as C from './styles';
import { Icon } from '@iconify/react';

const UserDetailsFilter = ({ user }: UserProps): JSX.Element => {
  const initialValue = +user.value / user.parcel;

  const [value, setValue] = useState(initialValue);
  const [textPeriod, setTextPeriod] = useState('mês');
  const [customDate, setCustomDate] = useState<string>('');

  const [option1] = useState(3);
  const [option2] = useState(6);
  const [option3] = useState(1);

  const totalValueOfMonth = H.formatCurrencyToBRL(value);

  const [periodValue, setPeriodValue] = useState(totalValueOfMonth);

  const calculate = (option: number) => {
    if (option === option3) option = 12;

    const sum = option * initialValue;

    if (+user.value >= sum) {
      if (option === option1) setValue(sum);
      if (option === option2) setValue(sum);
      if (option === 12) setValue(sum);

      setTextPeriod('período');
    } else {
      swal(
        `${user.name} possui apenas ${user.parcel} parcelas`
      )
    }
  };

  const customCalculate = () => {
    const currentDate = H.currentDate();

    const customDateWithFixedDay = H.dateWithFixedDay(customDate, +user.payday);
    const currentDateWithFixedDay = H.dateWithFixedDay(currentDate, +user.payday);

    const newPeriodValue = H.calculatesTheValueOfTheChosenPeriod(
      customDateWithFixedDay,
      user.parcel,
      initialValue,
      currentDateWithFixedDay
    );

    if (newPeriodValue) {
      const formattedPeriodValue = H.formatCurrencyToBRL(newPeriodValue);

      setPeriodValue(formattedPeriodValue);
    }
  };

  return (
    <C.Container>

      <C.Message>
        {`Neste ${textPeriod} você receberá ${periodValue}`}
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

        <C.P>Ou escolha um período personalizado
  
          <C.IconQuestion>

            <Icon
              icon='ant-design:question-circle-filled'
              onClick={() => swal(
                'Período personalizado',
                `
                  Define você mesmo uma data e clique no circulo de "check" para calcularmos o período definido

                  Obs: O dia será ajustado para o mesmo da data de vencimento da parcela.
                `
              )}
            />

          </C.IconQuestion>

        </C.P>

        <C.CustomFilter>

          <C.Calendar
            name='start-date'
            type='date'
            onChange={({ target: { value }}) => setCustomDate(value)}
            value={customDate}
          />

          <C.IconCheck>

            <Icon
              icon="ci:circle-check-outline"
              onClick={() => customCalculate()}
            />

          </C.IconCheck>

        </C.CustomFilter>

      </C.FilterContainer>

    </C.Container>
  )
};

export default UserDetailsFilter;
