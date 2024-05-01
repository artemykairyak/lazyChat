import dayjs from 'dayjs';

export const getMessageDate = (dateString: string) => {
  const date = dayjs(dateString);
  const today = dayjs();

  if (date.isSame(today, 'day')) {
    return date.format('HH:mm'); // Format as HH:mm if the date is today
  } else {
    return date.format('DD/MM'); // Format as DD/MM if the date is not today
  }
};
