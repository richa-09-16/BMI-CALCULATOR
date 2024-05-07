import { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBmi = () => {
    const bmiValue = weight / (height / 100) ** 2;
    setBmi(bmiValue.toFixed(2));
  };

  return (
    <>
      <div className="mb-4">
        <div className="mb-2">
          <label htmlFor="weight" className="block text-gray-700 font-bold mb-2">
            Weight (kg):
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            
            id="weight"
            type="number"
            placeholder="Enter your weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <br />
        <div className="mb-2">
          <label htmlFor="height" className="block text-gray-700 font-bold mb-2">
            Height (cm):
          </label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="height"
            type="number"
            placeholder="Enter your height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      </div>
<br />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
        onClick={calculateBmi}
      >
        <h4>CALCULATE BMI</h4>
      </button>
      {bmi && (
        <div className="mt-4">
          <h2>
          <p> Your BMI is: {bmi}</p>
          </h2>
    <p> 
            <h1>
            BMI Categories:
            </h1>
            <br />
            Underweight: less than 18.5
            <br />
            Normal weight: 18.5 to 24.9
            <br />
            Overweight: 25 to 29.9
            <br />
            Obesity: 30 or greater
          </p>
        </div>
      )}
    </>
  );
};

export default BMICalculator;