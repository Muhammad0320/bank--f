import IconContainer from '../../../../components/UI/IconContainer';
import { StyledH3, Text } from '../../../../components/UI/Text';
import {
  AvatarContainer,
  FlexContainer,
} from '../../../../components/UI/uiStyles';
import {
  TransactionContainer,
  TxnAnalysis,
  TxnCard,
  TxnCardContainer,
  TxnHistory,
} from './style';

const Tracsaction = () => {
  return (
    <TransactionContainer>
      <TxnCardContainer></TxnCardContainer>

      <TxnAnalysis></TxnAnalysis>

      <TxnHistory>
        <FlexContainer $flow="row" $size="btw">
          <StyledH3> Transaction History </StyledH3>

          <IconContainer> F </IconContainer>
        </FlexContainer>

        <TxnCard $flow="row" $size="small">
          <AvatarContainer> I </AvatarContainer>

          <FlexContainer
            $flow="column"
            $size="tiny"
            style={{ marginRight: 'auto' }}
          >
            <Text> Muhammad Awwal </Text>
            <Text $size="small"> Shit money </Text>
          </FlexContainer>

          <FlexContainer $flow="column" $size="tiny">
            <Text> - $13.00 </Text>
            <Text $size="small"> 12/06/2024 </Text>
          </FlexContainer>
        </TxnCard>
        <TxnCard $flow="row" $size="small">
          <AvatarContainer> I </AvatarContainer>

          <FlexContainer
            $flow="column"
            $size="tiny"
            style={{ marginRight: 'auto' }}
          >
            <Text> Muhammad Awwal </Text>
            <Text $size="small"> Shit money </Text>
          </FlexContainer>

          <FlexContainer $flow="column" $size="tiny">
            <Text> - $13.00 </Text>
            <Text $size="small"> 12/06/2024 </Text>
          </FlexContainer>
        </TxnCard>
      </TxnHistory>
    </TransactionContainer>
  );
};

export default Tracsaction;
