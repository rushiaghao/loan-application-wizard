import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormContext } from "../../context/FormContext";
import { kycSchema } from "../../schemas/kycSchema";

import InputField from "../common/InputField";

function KYC() {
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
    resolver: zodResolver(kycSchema),
    defaultValues: formData.kyc,
  });

  const onSubmit = (data) => {
    setFormData({
      ...formData,
      kyc: data,
    });

    console.log("KYC Saved:", data);

    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold">
        KYC Details
      </h2>

      <InputField
        label="Aadhaar Number"
        name="aadhaar"
        register={register}
        error={errors.aadhaar}
        placeholder="Enter Aadhaar Number"
      />

      <InputField
        label="PAN Number"
        name="pan"
        register={register}
        error={errors.pan}
        placeholder="ABCDE1234F"
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

export default KYC;