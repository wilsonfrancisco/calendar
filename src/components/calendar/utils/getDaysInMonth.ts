import { CalendarProps } from '../interfaces';

/**
 * @param {int} month The month number, zero (0) based
 * @param {int} year The year, not zero (0) based
 * @return {Date[]} List with date objects for each day of the month
 */
function getDaysInMonth({ month, year }: CalendarProps) {
  let date = new Date(year, month);
  let weekDays = [];
  let monthDays: string[] = [];

  for (let counter = 0; counter <= 3; counter++) {
    while (date.getMonth() === month) {
      if (date.getMonth() === month) {
        let _date = new Date(date);

        weekDays.push(_date);
        monthDays.push(_date.getDate().toString());

        date.setDate(date.getDate() + 1);
      }
    }
  }

  for (let index = 0; index < weekDays[0].getDay(); index++) {
    monthDays.unshift('_');
  }

  return { firstDayOfMonth: weekDays[0].getMonth(), monthDays };
}

export { getDaysInMonth };
