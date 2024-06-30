import styled from 'styled-components';
import { MainContainer } from '../../../../styles/RootStyles';
import { ClampComponent } from '../../../../styles/clampBuilder';
import { FlexContainer } from '../../../../components/UI/uiStyles';

export const ReportContainer = styled(MainContainer)`
  display: grid;

  grid-template-columns: repeat(4, 1fr) 1.2fr;

  grid-template-rows: 1fr 3fr 1fr;

  gap: ${() => ClampComponent(900, 1250, 1.5, 3)};
`;

export const FirstReportRow = styled(FlexContainer)`
  grid-row: 1/ -1;
  grid-column: 1 / 5;

  gap: inherit;

  & > * {
    padding: ${() => ClampComponent(900, 1250, 1, 1.5)};

    border-radius: ${() => ClampComponent(900, 1250, 1, 1.4)};

    box-shadow: var(--box-shadow-light);
  }
`;

export const LastReportRow = styled(FlexContainer)`
  grid-column: 1 / 5;

  grid-row: 3 / -1;

  gap: inherit;

  & > * {
    padding: ${() => ClampComponent(900, 1250, 1, 1.5)};

    border-radius: ${() => ClampComponent(900, 1250, 1, 1.4)};

    box-shadow: var(--box-shadow-light);
  }
`;   


