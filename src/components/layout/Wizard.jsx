import { useState } from "react";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

import ProgressBar from "./ProgressBar";
// import StepNavigation from "./StepNavigation";

import Loan from "../steps/loan";
import Personal from "../steps/personal";
import KYC from "../steps/kyc";
import Address from "../steps/address";
import Employment from "../steps/employment";
import CoApplicant from "../steps/CoApplicant";
import Document from "../steps/document";
import Review from "../steps/review";

function Wizard() {
  const steps = [
  <Loan />,
  <Personal />,
  <KYC />,
  <Address />,
  <Employment />,
  <CoApplicant />,
  <Document />,
  <Review />,
];

//   const [currentStep, setCurrentStep] = useState(1);

  //   const {
  //       currentStep,
  //       setCurrentStep,
  //   } = useContext(FormContext);

  // const nextStep = () => {
  //   if (currentStep < steps.length) {
  //     setCurrentStep(currentStep + 1);
  //   }
  // };

  // const prevStep = () => {
  //   if (currentStep > 1) {
  //     setCurrentStep(currentStep - 1);
  //   }
  // };

  const {
  currentStep,
  nextStep,
  prevStep,
} = useContext(FormContext);

  return (
  <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
    <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Loan Application
      </h1>

      <ProgressBar
        currentStep={currentStep}
        totalSteps={steps.length}
      />

      <div className="mt-8">
        {steps[currentStep - 1]}
      </div>

      {/* <StepNavigation
        currentStep={currentStep}
        totalSteps={steps.length}
        nextStep={nextStep}
        prevStep={prevStep}
      /> */}
    </div>
  </div>
);
}

export default Wizard;