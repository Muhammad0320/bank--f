import styled from 'styled-components';
import { ClampComponent } from '../../styles/clampBuilder';

export const StyledIConContainer = styled.span`
  height: ${() => ClampComponent(900, 1250, 3, 4.5)};
  width: ${() => ClampComponent(900, 1250, 3, 4.5)};

  display: flex;

  justify-content: center;

  align-items: center;

  border-radius: 50%;
`;
