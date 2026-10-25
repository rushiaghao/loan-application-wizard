import { z } from "zod";

export const addressSchema = z.object({
  address: z.string().min(5, "Address is required"),

  city: z.string().min(2, "City is required"),

  state: z.string().min(2, "State is required"),

  pincode: z
    .string()
    .length(6, "Pincode must be exactly 6 digits"),
});