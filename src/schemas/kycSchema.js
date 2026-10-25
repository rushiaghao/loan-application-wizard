import { z } from "zod";

export const kycSchema = z.object({
  aadhaar: z
    .string()
    .length(12, "Aadhaar must be exactly 12 digits"),

  pan: z
    .string()
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN number"),
});