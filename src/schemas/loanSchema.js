import { z } from "zod";

export const loanSchema = z.object({
  loanType: z.string().min(1, "Please select a loan type"),

  loanAmount: z
    .number({
      required_error: "Loan amount is required",
    })
    .positive("Amount must be greater than 0"),

  tenure: z
    .number({
      required_error: "Tenure is required",
    })
    .positive(),

  purpose: z
    .string()
    .min(10, "Purpose should be at least 10 characters"),
});