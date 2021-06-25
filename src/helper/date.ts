import { subMinutes, subDays, subWeeks, format } from 'date-fns';

// TYPE
import { PeriodResolutionValue } from 'model/app';

export const getStartDateTillNow = (value: PeriodResolutionValue): string => {
  const currentDate = new Date();
  let startDate = new Date().toISOString();

  if (value === '30MIN') {
    startDate = subMinutes(currentDate, 30).toISOString();
  }

  if (value === '60MIN') {
    startDate = subMinutes(currentDate, 60).toISOString();
  }

  if (value === '3D') {
    startDate = subDays(currentDate, 3).toISOString();
  }

  if (value === '1W') {
    startDate = subWeeks(currentDate, 1).toISOString();
  }

  return startDate;
};

export const formatDateTime = (time: string): string => {
  const dateTimeObject = new Date(time);

  const newFormat = format(dateTimeObject, 'yyyy-MM-dd');

  return `${newFormat}T00:00:00`;
};
