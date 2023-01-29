import { CalendarProps } from '../interfaces';

/**
 * @param {int} month The month number, zero (0) based
 * @param {int} year The year, not zero (0) based
 * @return {string} The long of the month. eg: 0 -> January.
 */
function getLongMonthName({ year, month }: CalendarProps) {
  const date = new Date(year, month);
  const _month = date.toLocaleString('pt-Br', {
    month: 'long',
  });

  return _month;
}

export { getLongMonthName };
