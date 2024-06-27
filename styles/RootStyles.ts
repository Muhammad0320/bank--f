'use client';

import styled from 'styled-components';

export const StyledBody = styled.body`
  display: grid;

  grid-template-columns: auto 1fr;

  grid-template-rows: 10rem 1fr;
`;

export const MainContainer = styled.main`
  grid-column: 2 / -1;
  grid-row: 2 / -1;
`;
