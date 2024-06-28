'use-client';

import styled from 'styled-components';
import { MainContainer } from '../../../../styles/RootStyles';
import { ClampComponent } from '../../../../styles/clampBuilder';

export const TransactionContainer = styled(MainContainer)`
  display: grid;

  grid-template-columns: auto 1.2fr 1fr;
  grid-template-rows: 1.2fr 1fr;

  gap: ${() => ClampComponent(900, 1250, 2.5, 3.5)};

  & > * {
    box-shadow: var(--box-shadow-light);

    border: 1px solid var(--card-color);

    padding: ${() => ClampComponent(900, 1250, 1, 2)};

    border-radius: ${() => ClampComponent(900, 1250, 1, 1.4)};
  }
`;


