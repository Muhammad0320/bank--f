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
      </AccountDetailsComponent>
    </AccountContainer>
  );
};

export default AccountPage;
