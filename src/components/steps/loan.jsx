import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loanSchema } from "../../schemas/loanSchema";
import { FormContext } from "../../context/FormContext";

function Loan() {
  const {
  formData,
  setFormData,
  nextStep,
} = useContext(FormContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loanSchema),
    defaultValues: formData.loan,
  });

const onSubmit = (data) => {
  setFormData({
    ...formData,
    loan: data,
  });

  console.log("Loan Data Saved:", data);

  nextStep();
};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-2xl font-semibold">Loan Details</h2>

      {/* Loan Type */}
      <div>
        <label className="block mb-2 font-medium">
          Loan Type
        </label>

        <select
          {...register("loanType")}
          className="w-full border rounded-lg p-3"
        >
          <option value="">Select Loan Type</option>
          <option value="Home Loan">Home Loan</option>
          <option value="Personal Loan">Personal Loan</option>
          <option value="Car Loan">Car Loan</option>
          <option value="Education Loan">Education Loan</option>
        </select>

        {errors.loanType && (
          <p className="text-red-500 text-sm mt-1">
            {errors.loanType.message}
          </p>
        )}
      </div>

      {/* Loan Amount */}
      <div>
        <label className="block mb-2 font-medium">
          Loan Amount
        </label>

        <input
          type="number"
          placeholder="Enter Loan Amount"
          {...register("loanAmount", {
            valueAsNumber: true,
          })}
          className="w-full border rounded-lg p-3"
        />

        {errors.loanAmount && (
          <p className="text-red-500 text-sm mt-1">
            {errors.loanAmount.message}
          </p>
        )}
      </div>

      {/* Loan Tenure */}
      <div>
        <label className="block mb-2 font-medium">
          Loan Tenure (Months)
        </label>

        <input
          type="number"
          placeholder="Enter Loan Tenure"
          {...register("tenure", {
            valueAsNumber: true,
          })}
          className="w-full border rounded-lg p-3"
        />

        {errors.tenure && (
          <p className="text-red-500 text-sm mt-1">
            {errors.tenure.message}
          </p>
        )}
      </div>

      {/* Purpose */}
      <div>
        <label className="block mb-2 font-medium">
          Purpose
        </label>

        <textarea
          rows={4}
          placeholder="Enter purpose of loan"
          {...register("purpose")}
          className="w-full border rounded-lg p-3"
        />

        {errors.purpose && (
          <p className="text-red-500 text-sm mt-1">
            {errors.purpose.message}
          </p>
        )}
      </div>

      {/* Temporary Submit Button */}
     <div className="flex justify-end mt-8">
  <button
    type="submit"
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
  >
    Next
  </button>
</div>
    </form>
  );
}

export default Loan;


{/* <StepNavigation
    showPrevious
    nextLabel="Next"
    onNext={handleSubmit(onSubmit)}
/> */}