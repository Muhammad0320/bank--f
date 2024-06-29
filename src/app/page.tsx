import React from 'react';
import {
  BalaceSummary,
  DashBoardContainer,
  FirstDashBoardRow,
  FlashTransaction,
  LastDashboardRow,
  MonthlyCardContainer,
  TopBeneficiary,
} from './style';
import { StyledH3, Text } from '../../components/UI/Text';
import { FlexContainer } from '../../components/UI/uiStyles';
import IconContainer from '../../components/UI/IconContainer';

const Page: React.FC = () => {
  return (
    <DashBoardContainer>
      <FirstDashBoardRow>
        <BalaceSummary $flow="column" $size="small">
          <StyledH3> Yearly Balance summary </StyledH3>
          <div> The Chart </div>
        </BalaceSummary>

        <MonthlyCardContainer $flow="column" $size="medium">
          <FlexContainer $flow="row" $size="btw">
            <FlexContainer $flow="column" $size="tiny">
              <StyledH3> $45,000.00 </StyledH3>
              <Text> Income </Text>
              <Text $size="small"> +0.5% than last month </Text>
            </FlexContainer>
            {/* Progress bar */}
            <IconContainer> PB </IconContainer>
          </FlexContainer>
          <FlexContainer $flow="row" $size="btw">
            <FlexContainer $flow="column" $size="tiny">
              <StyledH3> $45,000.00 </StyledH3>
              <Text> Income </Text>
              <Text $size="small"> +0.5% than last month </Text>
            </FlexContainer>
            {/* Progress bar */}
            <IconContainer> PB </IconContainer>
          </FlexContainer>
          <FlexContainer $flow="row" $size="btw">
            <FlexContainer $flow="column" $size="tiny">
              <StyledH3> $45,000.00 </StyledH3>
              <Text> Income </Text>
              <Text $size="small"> +0.5% than last month </Text>
            </FlexContainer>
            {/* Progress bar */}
            <IconContainer> PB </IconContainer>
          </FlexContainer>
        </MonthlyCardContainer>

        <TopBeneficiary $flow="column" $size="small">
          <StyledH3> Top Beneficiaries </StyledH3>
          <div> Beneficiary container </div>
        </TopBeneficiary>
      </FirstDashBoardRow>

      <LastDashboardRow>
        <FlashTransaction $flow="column" $size="small">
          <StyledH3> Flash Transfer </StyledH3>
          <div> Transfer content </div>
        </FlashTransaction>
      </LastDashboardRow>
    </DashBoardContainer>
  );
};

export default Page;
