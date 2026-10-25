import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

function Review() {

  const {
    formData,
    prevStep,
    setCurrentStep,
    resetForm,
  } = useContext(FormContext);


  const viewDocument = (file) => {
    if (!file) {
      alert("No document uploaded.");
      return;
    }

    const url = URL.createObjectURL(file);
    window.open(url, "_blank");
  };

  const handleSubmit = async () => {
  console.log(formData);

  // Later replace this with API call

  localStorage.removeItem("loanApplication");

  resetForm();

  alert("Application Submitted Successfully!");
};

  return (
    <div className="space-y-6">

      <h2 className="text-3xl font-bold text-center">
        Review Your Application
      </h2>

      {/* Loan Details */}

      <div className="border rounded-xl p-5 shadow">

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">
            Loan Details
          </h3>

          <button
            onClick={() => setCurrentStep(1)}
            className="text-blue-600 font-medium hover:underline"
          >
            Edit
          </button>
        </div>

        <p><strong>Loan Type:</strong> {formData.loan?.loanType}</p>
        <p><strong>Loan Amount:</strong> ₹ {formData.loan?.loanAmount}</p>
        <p><strong>Loan Tenure:</strong> {formData.loan?.loanTenure}</p>
        <p><strong>Purpose:</strong> {formData.loan?.purpose}</p>

      </div>

      {/* Personal Details */}

      <div className="border rounded-xl p-5 shadow">

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">
            Personal Details
          </h3>

          <button
            onClick={() => setCurrentStep(2)}
            className="text-blue-600 font-medium hover:underline"
          >
            Edit
          </button>
        </div>

        <p><strong>First Name:</strong> {formData.personal?.firstName}</p>
        <p><strong>Last Name:</strong> {formData.personal?.lastName}</p>
        <p><strong>Email:</strong> {formData.personal?.email}</p>
        <p><strong>Phone:</strong> {formData.personal?.phone}</p>

      </div>

      {/* KYC */}

      <div className="border rounded-xl p-5 shadow">

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">
            KYC Details
          </h3>

          <button
            onClick={() => setCurrentStep(3)}
            className="text-blue-600 font-medium hover:underline"
          >
            Edit
          </button>
        </div>

        <p><strong>Aadhaar:</strong> {formData.kyc?.aadhaar}</p>
        <p><strong>PAN:</strong> {formData.kyc?.pan}</p>

      </div>

      {/* Address */}

      <div className="border rounded-xl p-5 shadow">

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">
            Address Details
          </h3>

          <button
            onClick={() => setCurrentStep(4)}
            className="text-blue-600 font-medium hover:underline"
          >
            Edit
          </button>
        </div>

        <p><strong>Address:</strong> {formData.address?.address}</p>
        <p><strong>City:</strong> {formData.address?.city}</p>
        <p><strong>State:</strong> {formData.address?.state}</p>
        <p><strong>Pincode:</strong> {formData.address?.pincode}</p>

      </div>

      {/* Employment */}

      <div className="border rounded-xl p-5 shadow">

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">
            Employment Details
          </h3>

          <button
            onClick={() => setCurrentStep(5)}
            className="text-blue-600 font-medium hover:underline"
          >
            Edit
          </button>
        </div>

        <p><strong>Employment Type:</strong> {formData.employment?.employmentType}</p>
        <p><strong>Company:</strong> {formData.employment?.companyName}</p>
        <p><strong>Monthly Income:</strong> ₹ {formData.employment?.monthlyIncome}</p>
        <p><strong>Experience:</strong> {formData.employment?.workExperience} Years</p>

      </div>

      {/* Co Applicant */}

      <div className="border rounded-xl p-5 shadow">

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">
            Co-Applicant
          </h3>

          <button
            onClick={() => setCurrentStep(6)}
            className="text-blue-600 font-medium hover:underline"
          >
            Edit
          </button>
        </div>

        <p><strong>Has Co Applicant:</strong> {formData.coApplicant?.hasCoApplicant}</p>

        {formData.coApplicant?.hasCoApplicant === "Yes" && (
          <>
            <p><strong>Name:</strong> {formData.coApplicant?.coApplicantName}</p>
            <p><strong>Relationship:</strong> {formData.coApplicant?.relationship}</p>
            <p><strong>Income:</strong> ₹ {formData.coApplicant?.coApplicantIncome}</p>
          </>
        )}

      </div>

      {/* Documents */}

      <div className="border rounded-xl p-5 shadow">

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">
            Uploaded Documents
          </h3>

          <button
            onClick={() => setCurrentStep(7)}
            className="text-blue-600 font-medium hover:underline"
          >
            Edit
          </button>
        </div>

        <div className="space-y-3">

          <div className="flex justify-between items-center">
            <span>Aadhaar Card</span>

            <div className="flex items-center gap-4">

              <span>
                {formData.documents?.aadhaarFile?.name || "Not Uploaded"}
              </span>

              <button
                onClick={() => viewDocument(formData.documents?.aadhaarFile)}
                className="text-blue-600 hover:underline"
              >
                View
              </button>

            </div>
          </div>

          <div className="flex justify-between items-center">
            <span>PAN Card</span>

            <div className="flex items-center gap-4">

              <span>
                {formData.documents?.panFile?.name || "Not Uploaded"}
              </span>

              <button
                onClick={() => viewDocument(formData.documents?.panFile)}
                className="text-blue-600 hover:underline"
              >
                View
              </button>

            </div>
          </div>

          <div className="flex justify-between items-center">
            <span>Salary Slip</span>

            <div className="flex items-center gap-4">

              <span>
                {formData.documents?.salarySlip?.name || "Not Uploaded"}
              </span>

              <button
                onClick={() => viewDocument(formData.documents?.salarySlip)}
                className="text-blue-600 hover:underline"
              >
                View
              </button>

            </div>
          </div>

        </div>

      </div>

     {/* Buttons */}
      <div className="flex justify-between mt-10">
        <button
          onClick={prevStep}
          className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg"
        >
          Previous
        </button>

        <button
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-lg"
        >
          Submit Application
        </button>
      </div>

    </div>
  );
}


export default Review;