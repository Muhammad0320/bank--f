import styled from 'styled-components';
import { ClampComponent } from '../../styles/clampBuilder';

export const StyledNavLink = styled.span`
  display: flex;

  gap: ${() => ClampComponent(900, 1250, 1.5, 2.5)};

  & > a {
    font-size: ${() => ClampComponent(900, 1250, 1, 2)};
    color: var(--black-color);
  }
`;

export const StyledNavLinks = styled.nav`
  display: flex;

  flex-flow: column;

  gap: ${() => ClampComponent(900, 1250, 1.5, 3)};

  color: var(--primary-color);
`;

export const StyledSidebar = styled.aside`
  background-color: var(--text-color-dark);

  padding-block: ${() => ClampComponent(900, 1250, 3, 4.5)};

  display: flex;

  flex-flow: column;

  justify-content: space-between;
`;
