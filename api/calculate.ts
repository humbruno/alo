import type { VercelRequest, VercelResponse } from '@vercel/node';
import { calculateFormSchema } from '../validations';

// const calculateFormSchema = z.object({
//   firstName: z.string().optional(),
//   lastName: z.string().optional(),
//   company: z.string().optional(),
//   email: z.string().email('calculateForm.invalidEmail'),
//   phone: z.string({ invalid_type_error: 'calculateForm.requiredField' }),
//   postCode: z.string().min(1, 'calculateForm.requiredField'),
//   city: z.string().optional(),
//   disclaimer: z
//     .boolean({ required_error: 'calculateForm.requiredField' })
//     .refine((data) => data === true),
// });

export default async function (
  request: VercelRequest,
  response: VercelResponse
) {
  switch (request.method) {
    case 'POST':
      // eslint-disable-next-line no-case-declarations
      const parsed = calculateFormSchema.safeParse(request.body);

      if (!parsed.success) {
        return response.status(400).send({
          message: `Yo, bad payload!`,
        });
      }

      response.status(200).send({ message: JSON.stringify(parsed) });
      break;
    default:
      response.status(501).send({ message: 'method not implemented' });
      break;
  }
}
