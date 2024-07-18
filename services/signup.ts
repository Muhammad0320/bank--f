import { FormSchema, User } from '../actions/auth';
import { rootUrl } from '../utils/variable';

const signupApi: (data: FormSchema) => Promise<User> = async (
  formData: FormSchema
) => {
  const res = await fetch(`${rootUrl}/signup`, {
    method: 'Post',
    body: JSON.stringify(formData),
    next: {
      tags: ['signup'],
    },
  });

  console.log(res.json);
  if (!res.ok) throw new Error('Something went wrong');

  // let data = JSON.parse( res.json )
};
