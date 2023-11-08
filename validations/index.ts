import { z } from 'zod';

export const calculateFormSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  company: z.string().optional(),
  email: z.string().email('calculateForm.invalidEmail'),
  phone: z.string({ invalid_type_error: 'calculateForm.requiredField' }),
  postCode: z.string().min(1, 'calculateForm.requiredField'),
  city: z.string().optional(),
  disclaimer: z
    .boolean({ required_error: 'calculateForm.requiredField' })
    .refine((data) => data === true),
});
