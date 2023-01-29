import { Calendar } from './components/calendar';

function App() {
  return (
    <>
      <section className="w-full h-screen">
        <h1 className="p-4 text-4xl font-semibold">Calendário de Eventos</h1>
        <div className="w-full h-[1px] bg-slate-900"></div>

        <section className="px-5 flex gap-4 justify-center">
          <main className="w-full mt-4 ml-6">
            <Calendar />
          </main>
        </section>
      </section>
    </>
  );
}

export default App;
