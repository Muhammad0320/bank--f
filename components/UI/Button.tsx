import { ComponentPropsWithRef, ReactNode } from 'react';

type ButtonType = ComponentPropsWithRef<'button'> & { children: ReactNode };

const Button = ({ children, ...props }: ButtonType) => {
  return <button {...props}> {children} </button>;
};

export default Button;
