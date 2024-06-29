'use client';

import styled from 'styled-components';
import { MainContainer } from '../../styles/RootStyles';
import { ClampComponent } from '../../styles/clampBuilder';

export const DashBoardContainer = styled(MainContainer)`
  display: grid;

  grid-template-rows: 1fr 10rem 1fr;

  gap: ${() => ClampComponent(900, 1250, 2, 3)};
`;

export const FirstDashBoardRow = styled.section`
  grid-row: 1 / 3;

  display: grid;

  grid-template-columns: 2fr repeat(2, 1fr);

  gap: ${() => ClampComponent(900, 1250, 2, 3)};
`;
