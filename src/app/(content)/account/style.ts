'use client';

import styled from 'styled-components';
import { MainContainer } from '../../../../styles/RootStyles';
import { FlexContainer } from '../../../../components/UI/uiStyles';
import { ClampComponent } from '../../../../styles/clampBuilder';

export const AccountContainer = styled(MainContainer)`
  display: grid;

  grid-template-columns: 2.5fr 1fr;

  grid-template-columns: auto repeat(2, 1fr);

  gap: ${() => ClampComponent(900, 1250, 1.5, 2)};
`;

export const AccountDetailsComponent = styled(FlexContainer)`
  grid-column: 2 / -1;
  grid-row: 1 / -1;

  padding: ${() => ClampComponent(900, 1250, 1, 1.5)};

  & > * {
    border-radius: ${() => ClampComponent(900, 1250, 1, 1.4)};

    box-shadow: var(--box-shadow-light);

    padding: ${() => ClampComponent(900, 1250, 1, 1.5)};
  }
`;

export const AccountOverviewContainer = styled.section`
  grid-column: 1 / 2;
  grid-row: 1 / -1;

  & > * {
    border-radius: ${() => ClampComponent(900, 1250, 1, 1.4)};

    box-shadow: var(--box-shadow-light);

    padding: ${() => ClampComponent(900, 1250, 1, 1.5)};
  }
`;

export const AccountBalanceContainer = styled(FlexContainer)`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;


export const AccountExpenceContainrt = styled(FlexContainer)`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;

export const AccountFooterContainrr = styled(FlexContainer)`
  grid-column: 1 / 2;
  grid-row: 3 / -1;
`;