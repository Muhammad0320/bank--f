'use client';

import styled from 'styled-components';
import { MainContainer } from '../../../../styles/RootStyles';
import { ClampComponent } from '../../../../styles/clampBuilder';
import { FlexContainer } from '../../../../components/UI/uiStyles';

export const TransactionContainer = styled(MainContainer)`
  display: grid;

  grid-template-columns: 1.2fr 1fr;
  grid-template-rows: auto 1.2fr 1fr;

  gap: ${() => ClampComponent(900, 1250, 2.5, 3.5)};

  & > * {
    box-shadow: var(--box-shadow-light);

    border: 1px solid var(--border-color);

    padding: ${() => ClampComponent(900, 1250, 1, 2)};

    border-radius: ${() => ClampComponent(900, 1250, 1, 1.4)};

    display: grid;
    grid-template-rows: auto 1fr;

    gap: ${() => ClampComponent(900, 1250, 1.2, 2)};
  }

  & > h2 {
    grid-row: 1 / 2;
  }
`;

export const TxnCardContainer = styled.section`
  grid-row: 2 / 3;
  grid-column: 1 / 2;
`;

export const TxnAnalysis = styled.section`
  grid-row: 3 / -1;
  grid-column: 1 / 2;
  display: flex;
  flex-flow: column;
  gap: ${() => ClampComponent(900, 1250, 1.5, 2.5)};
`;

export const TxnHistory = styled.section`
  grid-row: 2 / -1;
  grid-column: 2 / -1;
`;

export const TxnCard = styled(FlexContainer)`
  padding: ${() => ClampComponent(900, 1250, 0.8, 1.2)};

  border: 1px solid var(--border-color);

  border-radius: ${() => ClampComponent(900, 1250, 1, 1.4)};
`;

export const TxnContentContainer = styled.div`
  background-color: var(--text-color-dark);
`;

export const TxnModeContainer = styled.div``;
