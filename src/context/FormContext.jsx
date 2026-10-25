import { createContext, useState, useEffect } from "react";

export const FormContext = createContext();

function FormProvider({ children }) {
  const initialFormData = {
    loan: {},
    personal: {},
    kyc: {},
    address: {},
    employment: {},
    coApplicant: {},
    documents: {},
  };

  const resetForm = () => {
  setFormData(initialFormData);
  setCurrentStep(1);
};

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("loanApplication");
    return saved ? JSON.parse(saved) : initialFormData;
  });

  const [currentStep, setCurrentStep] = useState(1);

  // 👇 Put it here
  useEffect(() => {
    localStorage.setItem(
      "loanApplication",
      JSON.stringify(formData)
    );
  }, [formData]);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        currentStep,
        setCurrentStep,
        nextStep,
        prevStep,
        resetForm, 
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;