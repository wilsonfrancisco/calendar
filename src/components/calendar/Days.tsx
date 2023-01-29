import { X } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { CalendarProps } from './interfaces';
import { getDaysInMonth } from './utils/getDaysInMonth';
import { saveAs } from 'file-saver';

const daysOfWeek = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
];

function Days({ month, year }: CalendarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [day, setDay] = useState<number>();
  const [fullDate, setFullDate] = useState('');

  let { monthDays } = getDaysInMonth({ month, year });

  const handleEvent = (e: FormEvent) => {
    e.preventDefault();

    setFullDate(new Date(year, month, day).toLocaleDateString('pt-Br'));

    const eventData = { eventName, eventDescription, fullDate };
    const data = JSON.stringify(eventData);

    let file = new File([data], 'eventData.txt', {
      type: 'text/plain;charset=utf-8',
    });
    saveAs(file);

    setEventName('');
    setEventDescription('');
    setIsOpen(false);
  };

  return (
    <>
      {/* Event modal */}
      <div
        className={`absolute top-0 left-0 w-screen h-screen bg-slate-200 bg-opacity-80 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex justify-center items-center h-full">
          <div className="bg-slate-300 w-[50rem] h-[35rem]">
            <div className="p-8 flex w-full justify-between bg-slate-100">
              <span className="text-xl font-bold">Evento</span>
              <X
                size={24}
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <div className="p-8">
              <form className="flex flex-col gap-y-14">
                <div className="flex align-center gap-3">
                  <label htmlFor="event">Nome: </label>
                  <input
                    id="event"
                    type="text"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                  />
                </div>
                <div className="flex align-center gap-3">
                  <label htmlFor="description">Descrição: </label>
                  <input
                    id="description"
                    value={eventDescription}
                    type="text"
                    onChange={(e) => setEventDescription(e.target.value)}
                  />
                </div>
                <div className="flex align-center gap-3">
                  <p>Data: </p>
                  <p>
                    {new Date(year, month, day).toLocaleDateString('pt-Br')}
                  </p>
                </div>
                <button
                  onClick={(e) => handleEvent(e)}
                  className="p-3 bg-slate-400"
                  type="submit"
                >
                  Guardar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <table className="mt-4 w-full">
        <thead>
          <tr className="grid grid-cols-7">
            {daysOfWeek.map((day) => (
              <th key={day} className="w-min">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            <tr className="mt-4 grid grid-cols-7 gap-y-12">
              {monthDays.map((day) => {
                return day === '_' ? (
                  <td></td>
                ) : (
                  <td
                    onClick={() => {
                      setIsOpen(true);
                      setDay(Number(day));
                    }}
                    key={day}
                    className="cursor-pointer hover:bg-slate-400 p-2"
                  >
                    {day}
                  </td>
                );
              })}
            </tr>
          }
        </tbody>
      </table>
    </>
  );
}

export default Days;
