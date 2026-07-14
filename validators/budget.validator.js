import { z } from "zod";

export const createBudgetSchema = z
  .object({
    categoryId: z.coerce
      .number({
        required_error: "Category ID is required",
        invalid_type_error: "Category ID must be a number",
      })
      .int("Category ID must be an integer")
      .positive("Category ID must be greater than 0"),

    amount: z.coerce
      .number({
        required_error: "Amount is required",
        invalid_type_error: "Amount must be a number",
      })
      .positive("Amount must be greater than 0"),

    period: z
      .enum(["monthly", "weekly"], {
        invalid_type_error: "Period must be either 'monthly' or 'weekly'",
      })
      .optional(),

    startDate: z.iso.date({
      error: "Transaction date must be in YYYY-MM-DD format",
    }),
  })
  .strict();

export const updateBudgetSchema = z
  .object({
    amount: z.coerce
      .number({
        required_error: "Amount is required",
        invalid_type_error: "Amount must be a number",
      })
      .positive("Amount must be greater than 0")
      .optional(),

    period: z
      .enum(["monthly", "weekly"], {
        error: "Period must be either 'monthly' or 'weekly'",
      })
      .optional(),
  })
  .strict()
  .superRefine((data, ctx) => {
    if (Object.keys(data).length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "At least one field (amount, period) must be provided",
      });
    }
  });
