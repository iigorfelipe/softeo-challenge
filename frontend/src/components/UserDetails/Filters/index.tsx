import { useEffect, useState } from 'react';
import { UserProps } from '../../../types/UsersType';
import { Icon } from '@iconify/react';
import * as H from '../../../helpers'
import * as C from './styles';
import swal from 'sweetalert';

const UserDetailsFilter = ({ user }: UserProps): JSX.Element => {
  const [option1] = useState(3);
  const [option2] = useState(6);
  const [option3] = useState(1);

  const [dataPeriod, setDataPeriod] = useState('');
  const [customDate, setCustomDate] = useState('');
  const [periodValue, setPeriodValue] = useState('');

  useEffect(() => {
    const date = H.dateWithFixedDay(new Date(), user.payday);
    const initialDataPeriod = H.formatDateToBRL(date, 'long');
    const initialPeriodValue = H.formatCurrencyToBRL(+user.value / user.parcel);
    
    setDataPeriod(initialDataPeriod);
    setPeriodValue(initialPeriodValue);
  }, []);

  const calculate = (option: number) => {
    if (option === option3) option = 12;

    const sum = (option * +user.value / user.parcel);

    if (+user.value >= sum) {
      const date = H.dateWithFixedDay(new Date(), user.payday);

      date.setMonth(date.getMonth() + option);

      const newDataPeriod = H.formatDateToBRL(date, 'long');
      const newPeriodValue = H.formatCurrencyToBRL(sum);
      
      setDataPeriod(newDataPeriod);
      setPeriodValue(newPeriodValue);
    } else {
      swal(
        `${user.name} possui apenas ${user.parcel} parcelas`
      )
    }
  };

  const customCalculate = () => {
    const chosenDate = H.dateWithFixedDay(customDate, +user.payday);
    const currentDate = H.dateWithFixedDay(new Date(), +user.payday);

    const newPeriodValue = H.calculatesTheValueOfTheChosenPeriod(
      chosenDate,
      user.parcel,
      +user.value / user.parcel,
      currentDate
    );

    if (newPeriodValue) {
      const formattedPeriodValue = H.formatCurrencyToBRL(newPeriodValue);

      setPeriodValue(formattedPeriodValue);
      const date = H.formatDateToBRL(chosenDate, 'long');

      setDataPeriod(`${date}`);
    }
  };

  return (
    <C.Container>

      <C.Message>

        <C.Paragraph>{dataPeriod}</C.Paragraph>

        O valor total recebido será de:

        <C.Paragraph>{periodValue}</C.Paragraph>

      </C.Message>

      <C.Paragraph>
        Verifique outros períodos:

        <C.IconQuestion>

          <Icon
            icon='ant-design:question-circle-filled'
            onClick={() => swal(
              'Períodos fixos',
              `
                Escolha um dos períodos já definidos para o cálculo ser realizado.

                Obs: O dia será ajustado para o mesmo da data de vencimento da parcela.
              `
            )}
          />

        </C.IconQuestion>

      </C.Paragraph>

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

        <C.Paragraph>Ou escolha um período personalizado:
  
          <C.IconQuestion>

            <Icon
              icon='ant-design:question-circle-filled'
              onClick={() => swal(
                'Período personalizado',
                `
                  Define você mesmo uma data e clique no circulo de "check" para calcularmos o período definido.

                  Obs: O dia será ajustado para o mesmo da data de vencimento da parcela.
                `
              )}
            />

          </C.IconQuestion>

        </C.Paragraph>

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