'use client';

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

export const FlexContainer = styled.div<{
  $flow: 'row' | 'column';
  $size: 'tiny' | 'small' | 'medium' | 'large';
}>`
  display: flex;

  gap: ${() => ClampComponent(900, 1250, 2, 2.5)};
  flex-flow: ${prop => prop.$flow};
  gap: ${prop => prop.$size === 'large' && ClampComponent(900, 1250, 3, 3.5)};
  gap: ${prop => prop.$size === 'small' && ClampComponent(900, 1250, 2, 2.5)};
  gap: ${prop => prop.$size === 'tiny' && ClampComponent(900, 1250, 1.5, 2)};
  gap: ${prop =>
    prop.$size === 'medium' && ClampComponent(900, 1250, 0.8, 1.2)};
`;
