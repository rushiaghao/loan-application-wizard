function StepNavigation({
  currentStep,
  totalSteps,
  nextStep,
  prevStep,
}) {
  return (
    <div className="flex justify-between mt-8">
      <button
        onClick={prevStep}
        disabled={currentStep === 1}
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        Previous
      </button>

      <button className="px-4 py-2 bg-yellow-500 text-white rounded">
        Save Draft
      </button>

      <button
        onClick={nextStep}
        disabled={currentStep === totalSteps}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

export default StepNavigation;