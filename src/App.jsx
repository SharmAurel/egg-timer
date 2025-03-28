import { useState } from "react";
import Home from "./Home";
import Timer from "./Timer";

function App() {
  const [showTimer, setShowTimer] = useState(false);
  const [time, setTime] = useState(180); // Valeur par défaut

  const handleStart = (selectedTime) => {
    setTime(selectedTime);
    setShowTimer(true);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-yellow-100">
      {showTimer ? <Timer time={time} onBack={() => setShowTimer(false)} /> : <Home onStart={handleStart} />}
    </div>
  );
}

export default App;
