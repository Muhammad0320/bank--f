import { ComponentPropsWithoutRef, FC } from 'react';
import { FlexContainer, StyledInput } from './uiStyles';

type InputType = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<'input'>;

const Input: FC<InputType> = ({ label, id, ...props }) => {
  return (
    <FlexContainer $flow="column" $size="tiny">
      <label htmlFor={id}> {label}</label>

      <StyledInput id={id} {...props} />
    </FlexContainer>
  );
};

export default Input;
