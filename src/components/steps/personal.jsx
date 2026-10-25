import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalSchema } from "../../schemas/personalSchema";
import { FormContext } from "../../context/FormContext";

function Personal() {
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
    resolver: zodResolver(personalSchema),
    defaultValues: formData.personal,
  });

  const onSubmit = (data) => {
    setFormData({
      ...formData,
      personal: data,
    });

    console.log("Personal Saved:", data);

    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-2xl font-semibold">
        Personal Details
      </h2>

      <div>
        <label className="block mb-2">First Name</label>

        <input
          {...register("firstName")}
          className="w-full border rounded-lg p-3"
        />

        <p className="text-red-500">
          {errors.firstName?.message}
        </p>
      </div>

      <div>
        <label className="block mb-2">Last Name</label>

        <input
          {...register("lastName")}
          className="w-full border rounded-lg p-3"
        />

        <p className="text-red-500">
          {errors.lastName?.message}
        </p>
      </div>

      <div>
        <label className="block mb-2">Email</label>

        <input
          type="email"
          {...register("email")}
          className="w-full border rounded-lg p-3"
        />

        <p className="text-red-500">
          {errors.email?.message}
        </p>
      </div>

      <div>
        <label className="block mb-2">Phone</label>

        <input
          {...register("phone")}
          className="w-full border rounded-lg p-3"
        />

        <p className="text-red-500">
          {errors.phone?.message}
        </p>
      </div>

      <div className="flex justify-between mt-8">
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

export default Personal;