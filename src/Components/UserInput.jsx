export default function UserInput({userInput,onChange}) {
  // const [userInput,setUserInput] = useState({
  //   InitialInvestment : 10000,
  //   AnnualInvestment :  1200,
  //   ExpectedReturn   :  6,
  //   Duration         :  10,
  // });

  // function handleChange(inputIdentifier, newValue) {
  // setUserInput(prevUserInput => {
  //   return {
  //     ...prevUserInput,
  //     [inputIdentifier]: newValue
  //   };
  // });

  return (
    <section id="user-input">
      <div className="Input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" required value={userInput.InitialInvestment} onChange={(event) => onChange('initialInvestment',event.target.value)}/>
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" required value={userInput.AnnualInvestment} onChange={(event) => onChange('AnnualInvestment',event.target.value)}/>
        </p>
      </div>
      <div className="Input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required value={userInput.ExpectedReturn} onChange={(event) => onChange('ExpectedReturn',event.target.value)}/>
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required value={userInput.Duration} onChange={(event) => onChange('Duration',event.target.value)}/>
        </p>
      </div>
    </section>
  )
  }