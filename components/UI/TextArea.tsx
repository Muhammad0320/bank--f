import { type ComponentPropsWithoutRef, FC } from 'react';

type TextAreaType = ComponentPropsWithoutRef<'textarea'>;

const TextArea: FC<TextAreaType> = ({ children, ...props }) => {
  return <textarea {...props}>{children}</textarea>;
};

export default TextArea;
