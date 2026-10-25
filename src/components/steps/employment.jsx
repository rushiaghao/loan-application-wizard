import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormContext } from "../../context/FormContext";
import { employmentSchema } from "../../schemas/employmentSchema";

import InputField from "../common/InputField";
import SelectField from "../common/SelectField";

function Employment() {
  const {
    formData,
    setFormData,
    nextStep,
    prevStep,
  } = useContext(FormContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(employmentSchema),
    defaultValues: formData.employment,
  });

  const onSubmit = (data) => {
    setFormData({
      ...formData,
      employment: data,
    });

    console.log("Employment Saved:", data);

    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold">
        Employment Details
      </h2>

      <SelectField
        label="Employment Type"
        name="employmentType"
        register={register}
        error={errors.employmentType}
        options={[
          "Salaried",
          "Self Employed",
          "Business",
          "Student",
        ]}
      />

      <InputField
        label="Company Name"
        name="companyName"
        register={register}
        error={errors.companyName}
        placeholder="Enter company name"
      />

      <InputField
        label="Monthly Income"
        type="number"
        name="monthlyIncome"
        register={register}
        error={errors.monthlyIncome}
        placeholder="Enter monthly income"
      />

      <InputField
        label="Work Experience (Years)"
        type="number"
        name="workExperience"
        register={register}
        error={errors.workExperience}
        placeholder="Enter work experience"
      />

      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-500 text-white px-6 py-2 rounded-lg"
        >
          Previous
        </button>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </form>
  );
}

export default Employment;