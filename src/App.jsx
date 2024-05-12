import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import UserInput from './Components/UserInput.jsx';
import Results from './Components/Results.jsx';


function App() {
  const [userInput,setUserInput] = useState({
      InitialInvestment : 10000,
      AnnualInvestment :  1200,
      ExpectedReturn   :  6,
      Duration         :  10,
    });
  
  function handleChange (inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      };
    });
  }

  const inputIsValid = userInput.Duration >=1;
  return (
    <>
    <Header />,
    <UserInput userInput={userInput} onChange={handleChange}/>,
    {!inputIsValid && <p className='center'>Please enter a duration greater than zero.</p>}
    {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
