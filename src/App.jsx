
import { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  // Function to calculate BMI
  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100; // Convert height to meters
      const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);

      setBmi(calculatedBMI);

      // Determine BMI status
      if (calculatedBMI < 18.5) {
        setStatus('Underweight');
      } else if (calculatedBMI >= 18.5 && calculatedBMI <= 24.9) {
        setStatus('Normal weight');
      } else if (calculatedBMI >= 25 && calculatedBMI <= 29.9) {
        setStatus('Overweight');
      } else {
        setStatus('Obese');
      }
    } else {
      alert('Please enter both height and weight');
    }
  };

  return (
    <>
      <div className="bmi-calculator">
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
          <div className="input-container">
            <label htmlFor="height">Height (cm):</label>
            <input
              type="text"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="text"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <button onClick={calculateBMI}>Calculate BMI</button>
          <div className="result">
            {bmi && (
              <>
                <p>Your BMI is: {bmi}</p>
                <p>Status: {status}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
