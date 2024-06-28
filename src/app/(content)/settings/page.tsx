import { Metadata } from 'next';
import Input from '../../../../components/UI/Input';
import { SectionStyle } from '../../../../components/UI/SectionStyle';
import { StyledH1, StyledH3, Text } from '../../../../components/UI/Text';
import { FlexContainer } from '../../../../components/UI/uiStyles';

export const metadata: Metadata = {
  title: 'Settings page',
};

const SettingsPage = () => {
  return (
    <SectionStyle>
      <FlexContainer $flow="column" $size="medium">
        <StyledH1>Settings</StyledH1>

        {/*  For the Profile settings  */}
        <FlexContainer $flow="column" $size="small">
          <StyledH3> Profile Settings </StyledH3>
          <FlexContainer $flow="row" $size="small">
            <Input label="Email" id="name" type="text" />
            <Input label="Your email address" id="email" type="email" />
            <Input label="Avatar" id="avatar" type="file" />
          </FlexContainer>
        </FlexContainer>

        {/*  For Account settings */}
        <FlexContainer $flow="column" $size="small">
          <StyledH3> Account Settings </StyledH3>

          <Text> Disply Account Number </Text>
          <Text> Disply Account Balace </Text>
          <Text> Disply Account Type </Text>
        </FlexContainer>
      </FlexContainer>
    </SectionStyle>
  );
};

export default SettingsPage;
