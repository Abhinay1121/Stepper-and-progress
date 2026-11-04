import { useState, useEffect, useRef } from "react";

const CheckoutStepper = ({ stepsConfig }) => {

    const[currentStep, setCurrentStep] =useState(1)

const handleNext = () =>{
   setCurrentStep((prevStep) =>prevStep+1) 
}
  const progressBarwidth = () =>{
    return (currentStep -1) *100/(stepsConfig.length-1)
  }

  //caliculate width
  // 1-2-3-4 (3 parts/lines in between(4-1))
    return (
        <>
        <div className="stepper">
{stepsConfig.map((step, index) =>{
    return (
        <div key ={step.id}className="step">
        <div className={`stepId ${currentStep ===step.id ? "active": ""} ${currentStep > step.id? 'complete':""}`}>
            {currentStep > step.id ? <span>&#10003;</span> :step.id}
            </div>
        <div>{step.name}</div>
        </div>

    )
})}
<div className="progress-bar">
  <div className="progress" style={{width:`${ progressBarwidth()}%`}}></div>
</div>
        </div>
       
        <div>
            <button onClick={handleNext}>Next</button>
        </div>
        </>
    )
}

export default CheckoutStepper