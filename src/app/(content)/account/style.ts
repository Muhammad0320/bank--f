import styled from 'styled-components';
import { MainContainer } from '../../../../styles/RootStyles';
import { FlexContainer } from '../../../../components/UI/uiStyles';

export const AccountContainer = styled(MainContainer)`
  display: grid;

  grid-template-columns: 2.5fr 1fr;

  grid-template-columns: auto repeat(2, 1fr);
`;

export const CardDetailsComponent = styled(FlexContainer)``;
