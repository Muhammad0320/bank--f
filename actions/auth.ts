import z from 'zod';

const UserSchema = z.object({
  name: z.string({ message: 'Invalid name' }),
  email: z.string().email('Invalid email format'),
});

type User = z.infer<typeof UserSchema>;

export const signupApi = () => {};
