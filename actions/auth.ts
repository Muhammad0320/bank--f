import z from 'zod';

const UserSchema = z.object({
  name: z.string({ message: 'Invalid name format' }),
  email: z.string().email('Invalid email format'),
  phone: z.number().min(13, 'Invalid phone format'),
  password: z.string().min(8, 'Password too short'),
  passwordConfirm: z.string(),
  avatar: z.any(),
});



type User = z.infer<typeof UserSchema>;

export const signupApi = () => {};
