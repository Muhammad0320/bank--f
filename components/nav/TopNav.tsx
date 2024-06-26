import IconContainer from '../UI/IconContainer';
import { StyledH2, Text } from '../UI/Text';
import { FlexContainer } from '../UI/uiStyles';
import { StyledTopNav } from './NavStyles';

const TopNav = () => {
  return (
    <StyledTopNav>
      <FlexContainer $flow="col" $size="small">
        <StyledH2> Hey, Muhammad 👋 </StyledH2>
        <Text> Welcome back to YourBank </Text>
      </FlexContainer>

      <FlexContainer $flow="row" $size="small">
        <IconContainer> N </IconContainer>
        <IconContainer> T </IconContainer>
        <IconContainer> M </IconContainer>
      </FlexContainer>
    </StyledTopNav>
  );
};

export default TopNav;
