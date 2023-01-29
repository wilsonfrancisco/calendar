import { useState } from 'react';

import Days from './Days';
import { CaretLeft, CaretRight } from 'phosphor-react';
import { getLongMonthName } from './utils/getLongMonthName';

export const Calendar = () => {
  const [month, setMonth] = useState(new Date().getMonth());
  const year = 2023;

  const handleMonthChange = (next: boolean) => {
    if (next) {
      if (month === 11) {
        setMonth(0);
        return;
      }

      setMonth(month + 1);
    } else {
      if (month === 0) {
        setMonth(11);
        return;
      }

      setMonth(month - 1);
    }
  };

  return (
    <>
      <div className="flex gap-4">
        <div className="flex gap-4">
          <button onClick={() => handleMonthChange(false)}>
            <CaretLeft size={24} />
          </button>
          <button onClick={() => handleMonthChange(true)}>
            <CaretRight size={24} />
          </button>
        </div>
        <h2 className="text-xl font-bold leading-none">
          <span className="capitalize">
            {getLongMonthName({ year, month })}
          </span>
          , {year}
        </h2>
      </div>
      <Days month={month} year={year} />
    </>
  );
};
