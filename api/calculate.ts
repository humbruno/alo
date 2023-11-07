import type { VercelRequest, VercelResponse } from '@vercel/node';
import { calculateFormSchema } from '../src/validations';

export default async function (
  request: VercelRequest,
  response: VercelResponse
) {
  switch (request.method) {
    case 'POST':
      const parsed = calculateFormSchema.safeParse(request.body);

      if (!parsed.success) {
        return response.status(400).send({
          message: `Yo, bad payload!`,
        });
      }

      response.status(200).send({ message: 'all good' });
      break;
    default:
      response.status(501).send({ message: 'method not implemented' });
      break;
  }
}
