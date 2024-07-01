import styled from 'styled-components';
import { MainContainer } from '../../../../styles/RootStyles';
import { FlexContainer } from '../../../../components/UI/uiStyles';
import { ClampComponent } from '../../../../styles/clampBuilder';

export const CardComponentWrapper = styled(MainContainer)`
  display: grid;

  grid-template-columns: 1fr auto;
`;

export const CardContainer = styled(FlexContainer)`
  padding: ${() => ClampComponent(900, 1250, 1, 1.5)};
`;
