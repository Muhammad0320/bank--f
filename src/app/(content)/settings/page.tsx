import Input from '../../../../components/UI/Input';
import { SectionStyle } from '../../../../components/UI/SectionStyle';
import { StyledH1, StyledH3 } from '../../../../components/UI/Text';
import { FlexContainer } from '../../../../components/UI/uiStyles';

const SettingsPage = () => {
  return (
    <SectionStyle>
      <FlexContainer $flow="column" $size="medium">
        <StyledH1>Settings</StyledH1>

        {/*  For the Profile settings  */}
        <FlexContainer $flow="column" $size="small">
          <StyledH3> Profile Settings </StyledH3>
          <Input label="Email" id="name" placeholder="John Doe" type="text" />
          <Input
            label="Your email address"
            id="email"
            type="email"
            placeholder="johndoe@gmail.com"
          />
          <Input label="Avatar" id="avatar" type="file" />
        </FlexContainer>
      </FlexContainer>
    </SectionStyle>
  );
};

export default SettingsPage;
