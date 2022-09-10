import * as H from '.';

const sumOfValues = (values: number[]): number => {
  const sum = values.reduce((a: number, b: number) => a + b, 0);

  return sum;
};

const sumOfValuesFormatted = (values: number[]): string => {
  const sum = values.reduce((a: number, b: number) => a + b, 0);

  return H.formatToBRL(sum);
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

export {
  divideOfValues,
  sumOfValues,
  sumOfValuesFormatted
};
