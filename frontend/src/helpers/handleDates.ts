const formatDateToBRL = (value: Date | string, style: 'long' | 'short') => {
  const format = new Intl.DateTimeFormat('pt-br', {
    dateStyle: style,
  });

  if (typeof value === 'string') {
    return format.format(new Date(value));
  } else {
    return format.format(value);
  };
};

const dateWithFixedDay = (value: Date | string, fixedDay: number) => {
  if (typeof value === 'string') { 
    const dateArray = value.split('-');
    const [year, month] = dateArray.map(Number);

    return new Date(year, month - 1, fixedDay);
  } else {
    const year = value.getFullYear();
    const month = value.getMonth() + 1;

    return new Date(year, month - 1, fixedDay);
  }
};

const currentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return `${year}-${month + 1}-${day}`;
};

export {
  formatDateToBRL,
  dateWithFixedDay,
  currentDate
};
