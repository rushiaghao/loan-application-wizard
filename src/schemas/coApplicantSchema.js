import { z } from "zod";

export const coApplicantSchema = z.object({
  hasCoApplicant: z.string(),

  coApplicantName: z.string().optional(),

  relationship: z.string().optional(),

  coApplicantIncome: z.number().optional(),
});