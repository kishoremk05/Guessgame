import React, { useState } from "react";
import Result from "./Result";
import bgImage from "../assets/game-bg.jpg"; // ✅ Import Local Image

function Game() {
  const [ScreatNum] = useState(Math.floor(Math.random() * 10) + 1);
  console.log(ScreatNum);

  const [Input, setInput] = useState("");

  const handleCheck = () => {
    const userInput = document.getElementById("name").value;
    setInput(userInput);
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat px-4"
      style={{
        backgroundImage: `url(${bgImage})`, // ✅ Use Local Image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", // ✅ Fixed typo from '100v' to '100vh'
        width: "100vw",
      }}
    >
      <div className="bg-white/20 backdrop-blur-md shadow-xl p-6 rounded-lg w-full max-w-md text-center border border-white/30">
        <h1 className="font-bold text-xl sm:text-2xl text-white drop-shadow-lg animate-bounce">
          🎯 Guess the Number (1-10)
        </h1>

        <div className="flex flex-col sm:flex-row justify-center items-center bg-white/30 p-3 mt-5 rounded-md shadow-md gap-3">
          <input
            id="name"
            type="number"
            className="border-2 border-white/50 p-2 rounded-md w-full sm:w-44 text-center text-lg outline-none bg-transparent text-white placeholder-gray-200"
            placeholder="Enter a number"
          />
          <button
            className="px-4 py-2 text-white bg-black border-2 border-white hover:border-black hover:bg-white hover:text-black transition-all rounded-md shadow-lg hover:shadow-white/50"
            onClick={handleCheck}
          >
            Guess
          </button>
        </div>

        <Result ScreatNum={ScreatNum} Input={Input} />
      </div>
    </div>
  );
}

export default Game;
