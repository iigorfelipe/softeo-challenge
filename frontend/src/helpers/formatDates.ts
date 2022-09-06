export const formatDateToBRL = (value: string | number | Date, style: 'long' | 'short') => {
  const date = new Date(value);

  const format = new Intl.DateTimeFormat('pt-br', {
    dateStyle: style,
  });

  return format.format(date);
}
