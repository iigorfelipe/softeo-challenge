import * as H from '.';

const sumOfValues = (values: number[]): number => {
  const sum = values.reduce((a: number, b: number) => a + b, 0);

  return sum;
};

const sumOfValuesFormatted = (values: number[]): string => {
  const sum = values.reduce((a: number, b: number) => a + b, 0);

  return H.formatCurrencyToBRL(sum);
};

const divideOfValues = (values: number[], parcels: number[]): number[] => {
  const array: number[] = [];

  values.forEach((value, a) => {
    parcels.forEach((parcel, b) => {
      if (a === b) {
        array.push(value / parcel);
      }
    });
  });

  return array;
}

const calculatesTheValueOfTheChosenPeriod = (
  customDate: Date,
  installments: number,
  installmentValue: number,
  newDate: Date,
) => {

let repeat = 0;
let price = 0;

for (let i = 0; i < installments; i += 1) {
  repeat += 1;
  price += installmentValue;

  if (i === 0) newDate.setMonth(newDate.getMonth());
  else newDate.setMonth(newDate.getMonth() + 1);

  const today = H.formatDateToBRL(newDate, 'short');
  const chosenDate = H.formatDateToBRL(customDate, 'short');

  if (today === chosenDate) return price;
}
};

export {
  divideOfValues,
  sumOfValues,
  sumOfValuesFormatted,
  calculatesTheValueOfTheChosenPeriod
};
