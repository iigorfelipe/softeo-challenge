export const formatToBRL = (value: number): string => {
  const price = new Intl.NumberFormat('pt-br', {
    currency: 'BRL',
    style: 'currency',
    minimumFractionDigits: 2,
  });

  return price.format(+value);
}
