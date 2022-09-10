const formatDateToBRL = (value: Date | string, style: 'long' | 'short') => {
  const format = new Intl.DateTimeFormat('pt-br', {
    dateStyle: style,
  });

  return format.format(date);
}
