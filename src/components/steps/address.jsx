import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormContext } from "../../context/FormContext";
import { addressSchema } from "../../schemas/addressSchema";

import InputField from "../common/InputField";

function Address() {
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
    resolver: zodResolver(addressSchema),
    defaultValues: formData.address,
  });

  const onSubmit = (data) => {
    setFormData({
      ...formData,
      address: data,
    });

    console.log("Address Saved:", data);

    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold">
        Address Details
      </h2>

      <InputField
        label="Full Address"
        name="address"
        register={register}
        error={errors.address}
        placeholder="Enter your address"
      />

      <InputField
        label="City"
        name="city"
        register={register}
        error={errors.city}
        placeholder="Enter city"
      />

      <InputField
        label="State"
        name="state"
        register={register}
        error={errors.state}
        placeholder="Enter state"
      />

      <InputField
        label="Pincode"
        name="pincode"
        register={register}
        error={errors.pincode}
        placeholder="Enter pincode"
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

export default Address;