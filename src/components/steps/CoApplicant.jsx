import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormContext } from "../../context/FormContext";
import { coApplicantSchema } from "../../schemas/coApplicantSchema";

import InputField from "../common/InputField";
import SelectField from "../common/SelectField";

function CoApplicant() {
  const {
    formData,
    setFormData,
    nextStep,
    prevStep,
  } = useContext(FormContext);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(coApplicantSchema),
    defaultValues: formData.coApplicant,
  });

  const hasCoApplicant = watch("hasCoApplicant");

  const onSubmit = (data) => {
    setFormData({
      ...formData,
      coApplicant: data,
    });

    console.log("Co-Applicant Saved:", data);

    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold">
        Co-Applicant Details
      </h2>

      <SelectField
        label="Do you have a Co-Applicant?"
        name="hasCoApplicant"
        register={register}
        error={errors.hasCoApplicant}
        options={["Yes", "No"]}
      />

      {hasCoApplicant === "Yes" && (
        <>
          <InputField
            label="Co-Applicant Name"
            name="coApplicantName"
            register={register}
            error={errors.coApplicantName}
            placeholder="Enter name"
          />

          <InputField
            label="Relationship"
            name="relationship"
            register={register}
            error={errors.relationship}
            placeholder="Father, Spouse, Brother..."
          />

          <InputField
            label="Monthly Income"
            type="number"
            name="coApplicantIncome"
            register={register}
            error={errors.coApplicantIncome}
            placeholder="Enter monthly income"
          />
        </>
      )}

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

export default CoApplicant;