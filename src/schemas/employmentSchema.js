import { z } from "zod";

export const employmentSchema = z.object({
  employmentType: z.string().min(1, "Employment Type is required"),

  companyName: z.string().min(2, "Company Name is required"),

  monthlyIncome: z
    .number({
      invalid_type_error: "Monthly Income is required",
    })
    .positive("Income must be greater than 0"),

  workExperience: z
    .number({
      invalid_type_error: "Work Experience is required",
    })
    .min(0, "Experience cannot be negative"),
});