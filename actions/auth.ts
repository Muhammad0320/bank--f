'use server';

import z from 'zod';
import { UserStatus } from '../utils/enums';
import { UserUpdatesObj } from '../utils/types';
import { redirect } from 'next/navigation';
import { revalidatePath, revalidateTag } from 'next/cache';
import { formDataConverter } from '../utils/formatter';

const UserSchema = z.object({
  name: z.string({ message: 'Invalid name format' }),
  email: z.string().email('Invalid email format'),
  phone: z.number().min(13, 'Invalid phone format'),
  password: z.string().min(8, 'Password too short'),
  passwordConfirm: z.string(),
});

export type FormSchema = z.infer<typeof UserSchema>;

export type User = FormSchema & {
  id: string;
  version: number;
  createdAt: Date;
  status: UserStatus;
  avatar?: string;
  signinTimeStamps: Date[];
  updates: UserUpdatesObj[];
};

export const signupAction = (prevState: any, formData: FormData) => {
  const parsedData = formDataConverter<FormSchema>(formData);

  const user = UserSchema.parse(parsedData);

  console.log(user);

  console.log('It reached here');

  // revalidateTag('signup');
  // redirect('/');
};


