import { useState } from "react";

function Home({ onStart }) {
  const [eggType, setEggType] = useState(null);

  const eggTimes = {
    "A la coque🥚": 180, // 3 min
    "Mollet 🍳": 360, // 6 min
    "Dur-Dur 🏐": 600, // 10 min
  };

  return (
    <div className="chick-container">
  <div className="chick">
    <div className="eye left"></div>
    <div className="eye right"></div>
    <div className="beak"></div>
    <div className="wing left"></div>
    <div className="wing right"></div>
    <div className="feet"></div>
  </div>
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-50">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Hello Juliette! 🍳
      </h1>
      <p className="text-xl text-gray-600 mb-6">
        Wanna eat some eggs my love ? 🥚
      </p>

      <div className="flex flex-col gap-4">
        {Object.keys(eggTimes).map((type) => (
          <button
            key={type}
            className={`px-6 py-3 rounded-lg shadow-md text-xl font-semibold ${
              eggType === type
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-yellow-300"
            }`}
            onClick={() => setEggType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <button
        onClick={() => eggType && onStart(eggTimes[eggType])}
        className={`mt-6 px-6 py-3 text-xl font-semibold rounded-lg ${
          eggType ? "bg-yellow-400 text-white hover:bg-yellow-500" : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        disabled={!eggType}
      >
        Tic tac!
      </button>
    </div>
    </div>
  );
}

export default Home;
