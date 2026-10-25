function ProgressBar({ currentStep, totalSteps }) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span>Step {currentStep}</span>
        <span>{totalSteps} Steps</span>
      </div>

      <div className="w-full h-3 bg-gray-300 rounded-full">
        <div
          className="h-3 bg-blue-600 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;