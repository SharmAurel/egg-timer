import { useState, useEffect } from "react";

function Timer({ time: initialTime, onBack }) {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-200">
      <button
        className="absolute top-4 left-4 px-3 py-1 bg-gray-200 text-gray-800 rounded-lg"
        onClick={onBack}
      >
        ⬅ Back
      </button>
      <h2 className="text-6xl font-bold">{formatTime(time)}</h2>
      <div className="flex gap-4 mt-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
          onClick={() => setIsRunning(true)}
        >
          Start
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
          onClick={() => setIsRunning(false)}
        >
          Pause
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={() => {
            setIsRunning(false);
            setTime(initialTime);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
