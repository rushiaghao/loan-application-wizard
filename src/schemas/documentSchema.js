import { z } from "zod";

const fileValidation = z
  .any()
  .refine((files) => files && files.length === 1, {
    message: "Please upload a file",
  });

export const documentSchema = z.object({
  aadhaarFile: fileValidation,
  panFile: fileValidation,
  salarySlip: fileValidation,
});