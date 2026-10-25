import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormContext } from "../../context/FormContext";
import { documentSchema } from "../../schemas/documentSchema";

import uploadImage from "../../assets/upload.png";

function Document() {
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
    resolver: zodResolver(documentSchema),
    defaultValues: formData.documents,
  });

  const aadhaar = watch("aadhaarFile");
  const pan = watch("panFile");
  const salary = watch("salarySlip");

  const onSubmit = (data) => {
  setFormData({
    ...formData,
    documents: {
      // Store the whole File object so other components can access it
      aadhaarFile: data.aadhaarFile?.[0] || null, 
      panFile: data.panFile?.[0] || null,
      salarySlip: data.salarySlip?.[0] || null,
    },
  });

  console.log("Documents Saved:", data);
  nextStep();
};
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <h2 className="text-2xl font-semibold">Upload Documents</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Aadhaar Card */}
        <div>
          <label className="block font-medium mb-2">Aadhaar Card</label>
          <label className="cursor-pointer">
            <div
              className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center transition ${
                aadhaar?.length > 0
                  ? "border-green-500 bg-green-50"
                  : "border-gray-300 hover:border-blue-500 hover:bg-blue-50"
              }`}
            >
              <img src={uploadImage} alt="Upload" className="w-20 h-20 object-contain" />
              {aadhaar?.length > 0 ? (
                <>
                  <p className="mt-3 text-green-600 font-semibold">✓ File Selected</p>
                  <p className="text-sm text-gray-700 break-all mt-1">{aadhaar[0].name}</p>
                </>
              ) : (
                <>
                  <p className="mt-3 font-medium">Click to Upload</p>
                  <p className="text-sm text-gray-500">JPG • PNG • PDF</p>
                  <p className="text-xs text-gray-400">Maximum Size: 2 MB</p>
                </>
              )}
            </div>
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              className="hidden"
              {...register("aadhaarFile")}
            />
          </label>
          {errors.aadhaarFile && (
            <p className="text-red-500 text-sm mt-2">{errors.aadhaarFile.message}</p>
          )}
        </div>

        {/* PAN Card */}
        <div>
          <label className="block font-medium mb-2">PAN Card</label>
          <label className="cursor-pointer">
            <div
              className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center transition ${
                pan?.length > 0
                  ? "border-green-500 bg-green-50"
                  : "border-gray-300 hover:border-blue-500 hover:bg-blue-50"
              }`}
            >
              <img src={uploadImage} alt="Upload" className="w-20 h-20 object-contain" />
              {/* FIXED: Changed aadhaar?.length to pan?.length */}
              {pan?.length > 0 ? (
                <>
                  <p className="mt-3 text-green-600 font-semibold">✓ File Selected</p>
                  <p className="text-sm text-gray-700 break-all mt-1">{pan[0].name}</p>
                </>
              ) : (
                <>
                  <p className="mt-3 font-medium">Click to Upload</p>
                  <p className="text-sm text-gray-500">JPG • PNG • PDF</p>
                  <p className="text-xs text-gray-400">Maximum Size: 2 MB</p>
                </>
              )}
            </div>
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              className="hidden"
              {...register("panFile")}
            />
          </label>
          {errors.panFile && (
            <p className="text-red-500 text-sm mt-2">{errors.panFile.message}</p>
          )}
        </div>

        {/* Salary Slip */}
        <div>
          <label className="block font-medium mb-2">Salary Slip</label>
          <label className="cursor-pointer">
            {/* FIXED: Cleaned up HTML tags and template literal syntax breakdown */}
            <div
              className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center transition ${
                salary?.length > 0
                  ? "border-green-500 bg-green-50"
                  : "border-gray-300 hover:border-blue-500 hover:bg-blue-50"
              }`}
            >
              <img src={uploadImage} alt="Upload" className="w-20 h-20 object-contain" />
              {/* FIXED: Changed aadhaar?.length to salary?.length */}
              {salary?.length > 0 ? (
                <>
                  <p className="mt-3 text-green-600 font-semibold">✓ File Selected</p>
                  <p className="text-sm text-gray-700 break-all mt-1">{salary[0].name}</p>
                </>
              ) : (
                <>
                  <p className="mt-3 font-medium">Click to Upload</p>
                  <p className="text-sm text-gray-500">JPG • PNG • PDF</p>
                  <p className="text-xs text-gray-400">Maximum Size: 2 MB</p>
                </>
              )}
            </div>
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              className="hidden"
              {...register("salarySlip")}
            />
          </label>
          {errors.salarySlip && (
            <p className="text-red-500 text-sm mt-2">{errors.salarySlip.message}</p>
          )}
        </div>

      </div>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg"
        >
          Previous
        </button>
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

export default Document;