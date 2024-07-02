import IconContainer from '../../../../components/UI/IconContainer';
import { Text } from '../../../../components/UI/Text';
import { FlexContainer } from '../../../../components/UI/uiStyles';
import {
  AccountContainer,
  AccountDetailsComponent,
  AccountOverviewContainer,
} from './style';

const AccountPage = () => {
  return (
    <AccountContainer>
      <AccountOverviewContainer></AccountOverviewContainer>

      <AccountDetailsComponent as="section" $flow="column" $size="small">
        <FlexContainer $flow="column" $size="tiny">
          <Text> Income </Text>
          <FlexContainer $flow="row" $size="tiny">
            <IconContainer> I </IconContainer>

            <Text> $12,000 </Text>

            <div>I m gonna be the graph</div>
          </FlexContainer>
        </FlexContainer>

        <FlexContainer $flow="column" $size="tiny">
          <Text> Income </Text>
          <FlexContainer $flow="row" $size="tiny">
            <IconContainer> I </IconContainer>

            <Text> $12,000 </Text>

            <div>I m gonna be the graph</div>
          </FlexContainer>
        </FlexContainer>

        <FlexContainer $flow="column" $size="small" as="ul">
          <FlexContainer $flow="row" $size="btw" as={'li'}>
            <Text> Account Status </Text>
            <Text $size="small"> Active </Text>
          </FlexContainer>
          <FlexContainer $flow="row" $size="btw" as={'li'}>
            <Text> Account No </Text>
            <Text $size="small"> 9640253013 </Text>
          </FlexContainer>
          <FlexContainer $flow="row" $size="btw" as={'li'}>
            <Text> Pin </Text>
            <Text $size="small"> .... </Text>
          </FlexContainer>
          <FlexContainer $flow="row" $size="btw" as={'li'}>
            <Text> Account Name </Text>
            <Text $size="small"> Balogun Muhammad </Text>
          </FlexContainer>
          <FlexContainer $flow="row" $size="btw" as={'li'}>
            <Text> BVN </Text>
            <Text $size="small"> 2291202020 </Text>
          </FlexContainer>
          <FlexContainer $flow="row" $size="btw" as={'li'}>
            <Text> DOB </Text>
            <Text $size="small"> 20rd Nov. 2005 </Text>
          </FlexContainer>
          <FlexContainer $flow="row" $size="btw" as={'li'}>
            <Text> Phone </Text>
            <Text $size="small"> 09166537641 </Text>
          </FlexContainer>

          <FlexContainer $flow="row" $size="btw" as={'li'}>
            <Text> Address </Text>
            <Text $size="small"> G50, Balogun compd... </Text>
          </FlexContainer>
        </FlexContainer>
      </AccountDetailsComponent>
    </AccountContainer>
  );
};

export default AccountPage;
