import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function (
  request: VercelRequest,
  response: VercelResponse
) {
  switch (request.method) {
    case 'POST':
      response.status(200).send({ message: 'bruno ok' });
      break;
    default:
      response.status(501).send({ message: 'method not implemented' });
      break;
  }
}
