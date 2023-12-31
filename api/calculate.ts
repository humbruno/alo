/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
import type { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail, { type MailDataRequired } from '@sendgrid/mail';
import { z } from 'zod';
import { calculateFormSchema } from '../src/validations/index.js';

// const requestBodySchema = z.object({
//   firstName: z.string().optional(),
//   lastName: z.string().optional(),
//   company: z.string().optional(),
//   email: z.string().email(),
//   phone: z.string(),
//   postCode: z.string().min(1),
//   city: z.string().optional(),
//   disclaimer: z
//     .boolean({ required_error: 'calculateForm.requiredField' })
//     .refine((data) => data === true),
// });

async function sendEmail(body: z.infer<typeof calculateFormSchema>) {
  sgMail.setApiKey(process.env.API_KEY ?? '');

  const { firstName, lastName, company } = body;

  const message: MailDataRequired = {
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',

    to: 'hsbruno1@gmail.com',
    from: 'hsbruno1@gmail.com',
    subject: 'Risto Development',
  };

  return sgMail.send(message);
}

export default async function (
  request: VercelRequest,
  response: VercelResponse
) {
  switch (request.method) {
    case 'OPTIONS':
      return response.status(200).send({ message: 'CORS ok' });
    case 'POST':
      // eslint-disable-next-line no-case-declarations
      const parsedData = calculateFormSchema.safeParse(request.body);

      if (!parsedData.success)
        return response.status(400).send(parsedData.error.errors);

      await handlePostContact(request, response);
      break;
    default:
      return response.status(501).send({ message: 'Invalid method' });
  }
}

const handlePostContact = async (
  request: VercelRequest,
  response: VercelResponse
) => {
  try {
    await sendEmail(request.body);
    response.status(200).send({ body: 'bruno ok' });
  } catch (error) {
    console.log(error);
    response.status(400).send(error);
  }
};
