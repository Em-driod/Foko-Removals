import { useState } from "react";

function Ade() {
  // Step 1: Initialize state
  const [count, setCount] = useState(0);
console.log(count)
  // Step 2: Define functions to manipulate state
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-800 to-indigo-600 text-white">
      <h1 className="text-4xl font-bold mb-8">React Counter App</h1>

      {/* Counter Display */}
      <div className="bg-white text-blue-800 font-semibold px-12 py-8 rounded-xl shadow-lg text-6xl mb-8">
        {count}
      </div>

 
      {/* Buttons */}
      <div className="flex space-x-6">
        <button
          onClick={handleDecrement}
          disabled={count <= 0}
          className={`px-6 py-3 rounded-md text-lg font-semibold transition-all ${
            count <= 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          Decrement
        </button>

        <button
          onClick={handleReset}
          className="px-6 py-3 rounded-md text-lg font-semibold bg-yellow-400 text-blue-900 hover:bg-yellow-500 transition-all"
        >
          Reset
        </button>

        <button
          onClick={handleIncrement}
          className="px-6 py-3 rounded-md text-lg font-semibold bg-green-500 hover:bg-green-600 transition-all"
        >
          Increment
        </button>
      </div>

      <p className="mt-10 text-lg opacity-80">
        {count > 10
          ? "Whoa! That’s a lot of counting "
          : "Try increasing the number!"}
      </p>
    </div>
  );
}

export default Ade;
