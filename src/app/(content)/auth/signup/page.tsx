import { useFormState } from 'react-dom';
import Input from '../../../../../components/UI/Input';
import { signupAction } from '../../../../../actions/auth';
import { FormErrorObj } from '../../../../../utils/types';

const FormPage = () => {
  const initialState: any = { message: [] };

  const [formAction, state] = useFormState(signupAction, initialState);

  return (
    <div>
      <form action={formAction}>
        <Input id="name" label="name" type="string" />
        <Input id="email" label="email" type="email" />
        <Input id="password" label=" password" type="password" />
        <Input id="passwordConfirm" label="password confirm" type="password" />
        <Input id="phone" label="phone" type="number" />
      </form>
    </div>
  );
};

export default FormPage;
