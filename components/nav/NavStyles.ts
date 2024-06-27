'use client';

import styled from 'styled-components';
import { ClampComponent } from '../../styles/clampBuilder';

export const NavLinkContainer = styled.span`
  display: flex;

  justify-content: center;

  align-items: center;

  gap: ${() => ClampComponent(900, 1250, 1.5, 2.5)};

  font-size: ${() => ClampComponent(900, 1250, 1, 2)};
  color: var(--black-color);
  /* & > a {
  } */
`;

export const StyledNavLinks = styled.nav`
  display: flex;

  /* justify-content: center; */

  flex-flow: column;

  gap: ${() => ClampComponent(900, 1250, 1.5, 3)};

  color: var(--primary-color);
`;



export const StyledSidebar = styled.aside`
  grid-column: 1 / 1;
  grid-row: 2 / -1;

  background-color: var(--text-color-dark);

  padding-block: ${() => ClampComponent(900, 1250, 3, 4.5)};

  padding-inline: ${() => ClampComponent(900, 1250, 3, 5)};

  display: flex;

  flex-flow: column;

  justify-content: space-between;
`;

export const StyledTopNav = styled.div`
  grid-row: 1/ 2;
  grid-column: 1 / -1;
  z-index: 1;

  background-color: var(--color-white-1);

  display: flex;

  justify-content: space-between;

  /* padding-inline: ${() => ClampComponent(900, 1250, 1.5, 2)}; */

  padding: ${() => ClampComponent(900, 1250, 1.5, 2.5)};

  align-items: center;
`;
