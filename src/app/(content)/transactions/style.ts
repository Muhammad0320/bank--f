'use-client';

import styled from 'styled-components';
import { MainContainer } from '../../../../styles/RootStyles';
import { ClampComponent } from '../../../../styles/clampBuilder';

export const TransactionContainer = styled(MainContainer)`
  display: grid;

  grid-template-columns: 1.2fr 1fr;
  grid-template-rows: 1.2fr 1fr;

  gap: ${() => ClampComponent(900, 1250, 2.5, 3.5)};

  & > * {
    box-shadow: var(--box-shadow-light);
  }
`;
