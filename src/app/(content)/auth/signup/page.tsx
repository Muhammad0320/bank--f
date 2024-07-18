import Input from '../../../../../components/UI/Input';

const FormPage = () => {
  return (
    <div>
      <Input id="name" label="name" type="string" />
      <Input id="email" label="email" type="email" />
      <Input id="password" label=" password" type="password" />
      <Input id="passwordConfirm" label="password confirm" type="password" />
      <Input id="phone" label="phone" type="number" />
    </div>
  );
};

export default FormPage;
