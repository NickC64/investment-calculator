import InputForm from "./components/InputForm"
import InvestmentTable from "./components/InvestmentTable"
import { useState } from "react"

const FORM_INPUTS = {
  initialInvestment: 1000,
  annualInvestment: 100,
  expectedReturn: 5,
  duration: 12
}

function App() {

  const [formInputs, setFormInputs] = useState(FORM_INPUTS);
  
  function handleFormChange(name, val) {
    setFormInputs((prevInputs) => {
      const newInputs = {...prevInputs}
      newInputs[name] = val;
      return newInputs;
    });
  }

  return (
    <>
    <InputForm formInputs={formInputs} onFormChange={handleFormChange}/>
    <InvestmentTable formInputs={formInputs} />
    </>
  )
}

export default App
