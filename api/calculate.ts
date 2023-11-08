import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { MailDataRequired } from '@sendgrid/mail';
import { z } from 'zod';

const requestBodySchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string(),
  postCode: z.string().min(1),
  city: z.string().optional(),
});

async function sendEmail(body: z.infer<typeof requestBodySchema>) {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(
    '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'
  );

  const { firstName, lastName, company, email, phone, postCode, city } = body;

  const message: MailDataRequired = {
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',

    to: 'bruno.santos@sitewerk.ch',
    from: 'info@sitewerk.ch',
    subject: 'Risto Development',
    templateId: 'd-d7a3927de3c84f3ea2ea0924de2fb7d4',
    dynamicTemplateData: {
      firstName,
      lastName,
      company,
    },
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
      const parsedData = requestBodySchema.safeParse(request.body);

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
    response.status(200).send({ body: 'Email sent' });
  } catch (error) {
    console.log(error);
    response.status(400).send(error);
  }
};
