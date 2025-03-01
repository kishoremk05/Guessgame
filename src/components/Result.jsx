import React from "react";

function Result({ ScreatNum, Input }) {
  let display = "";
  let colorClass = "text-white"; 

  const userGuess = Number(Input);

  if (Input) {
    if (isNaN(userGuess)) {
      display = "⚠️ Invalid Input!";
      colorClass = "text-yellow-400";
    } else if (userGuess === ScreatNum) {
      display = "🎉 Correct!";
      colorClass = "text-green-400 animate-pulse";
    } else {
      display = "❌ Not Correct!";
      colorClass = "text-red-400";
    }
  }

  return <h1 className={`font-bold text-xl mt-4 ${colorClass} drop-shadow-lg`}>{display}</h1>;
}

export default Result;
