import AddTimer from "./Components/AddTimer.tsx";
import Header from "./Components/Header.tsx";
import Timers from "./Components/Timers.tsx";
import TimersContextProvider from "./Store/timers-context.tsx";

function App() {
  return (
    <TimersContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersContextProvider>
  );
}

export default App;
