import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handleNext(){
    if(step == 3){
      setStep(1);
    }else{
    setStep(step+1);
    }
  }

  function handlePrevious(){
    if(step == 1){
      setStep(3);
    }else{
    setStep(step-1)
    }
  }

  function handleClose(){
    if(isOpen === true){
      setIsOpen(false);
    }
  }

  function handleOpen() {
    if(isOpen === false){
      setIsOpen(true);
    }
  }
  return (
    <>
    <button className="close" onClick={handleClose}>close</button>
    <button className="open" onClick={handleOpen}>open</button>
    {isOpen && <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">step {step}: {messages[step-1]}</p>

      <div className="buttons">
        <button style={
          {
            backgroundColor: "purple",
            color: "white"
          }
        }
        onClick={handlePrevious}>Previous</button>
        <button style={{
          backgroundColor: "purple",
          color: "white"
        }}
        onClick={handleNext}
        >Next</button>
      </div>
    </div>} 
    
    </>
  );
}

export default App;
