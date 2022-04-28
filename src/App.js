/** @format */

// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import bg from './video/production ID_4761426.mp4'

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [bmiResult, setBmiResult] = useState(null);
  const [status, setStatus] = useState("");

  function calculateBMI() {
    let bmi = Number((weight / height) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus);

    setHeight("");
    setWeight("");
  }
  function getStatus(bmi) {
    if (bmi < 18.15) return "Underweight";
    else if (bmi >= 18.3 && bmi < 30) return "Normal 😊";
    else if (bmi >= 50 && bmi < 60) return "Overweight 😡";
    else return "Obese 😞";
  }
  return (
    <div className='App'>
      <video autoPlay loop muted>
        <source src={bg} type='video/mp4' />
      </video>
      <div className='w-full '>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <h1
            className='block text-gray-700 text-sm font-bold mb-2'
            for='Width'>
            BODY MASS INDEX
          </h1>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              for='Width'>
              Weight
            </label>
            <input
              className='shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='Weight'
              type='Weight in kg'
              placeholder='Weight'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              for='Height'>
              Height
            </label>
            <input
              className='shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='Height in cm'
              type='text'
              placeholder='Height'
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div className='flex items-center justify-center'>
            <button
              className='bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='button'
              onClick={calculateBMI}>
              Calculate BMI
            </button>
          </div>
          {bmiResult && (
            <div className='mt-4'>
              <p>YOUR BMI IS: {bmiResult}</p>
              <p>YOUR ARE CURRENTLY: {status}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
