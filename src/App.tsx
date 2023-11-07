import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { calculateFormSchema } from './validations';
import { Form } from './components/form';
import { sendCalculateEmail } from './services/sendCalculateEmail';

type TFormSchema = z.infer<typeof calculateFormSchema>;

const App = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TFormSchema>({
    resolver: zodResolver(calculateFormSchema),
  });

  async function onSubmit(formData: TFormSchema) {
    const res = await sendCalculateEmail(formData);
    console.log(res);
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3 md:flex-row">
        <Form.Group>
          <Form.Label htmlFor="firstName">calculateForm.firstName</Form.Label>
          <Form.Input {...register('firstName')} id="firstName" />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="lastName">calculateForm.lastName</Form.Label>
          <Form.Input {...register('lastName')} id="lastName" />
        </Form.Group>
      </div>
      <Form.Group>
        <Form.Label htmlFor="company">calculateForm.company</Form.Label>
        <Form.Input {...register('company')} id="company" />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="email">calculateForm.email</Form.Label>
        <Form.Input {...register('email')} id="email" />
        {errors.email && <Form.Error>errors.email.message</Form.Error>}
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="phone">calculateForm.phone</Form.Label>
        <Form.PhoneInput
          name="phone"
          id="phone"
          defaultCountry="DE"
          inputComponent={Form.Input}
          control={control}
        />
        {errors.phone && <Form.Error>errors.phone.message</Form.Error>}
      </Form.Group>
      <div className="flex flex-col gap-3 md:flex-row">
        <Form.Group className="md:max-w-[120px]">
          <Form.Label htmlFor="postCode">calculateForm.postCode</Form.Label>
          <Form.Input {...register('postCode')} id="postCode" />
          {errors.postCode && <Form.Error>errors.postCode.message</Form.Error>}
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="city">calculateForm.city</Form.Label>
          <Form.Input {...register('city')} id="city" />
        </Form.Group>
      </div>
      <div className="flex flex-col gap-2">
        <Form.Group className="flex-row items-center">
          <input {...register('disclaimer')} type="checkbox" id="disclaimer" />

          <Form.Label htmlFor="disclaimer">calculateForm.disclaimer</Form.Label>
        </Form.Group>
        {errors.disclaimer && (
          <Form.Error>errors.disclaimer.message</Form.Error>
        )}
      </div>
      <div className="flex flex-col gap-3 md:flex-row">
        <a className="flex flex-1">
          <button className="flex-1" type="button">
            calculateForm.cancelButton
          </button>
        </a>
        <button className="md:max-w-[182px]" type="submit">
          calculateForm.submitButton
        </button>
      </div>
    </form>
  );
};

export default App;
