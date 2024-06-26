import styled from 'styled-components';

export const StyledBody = styled.body`
  display: grid;

  grid-template-columns: auto 1fr;

  grid-template-rows: auto 1fr;
`;


export const ChildrenContainer = styled.main`
  grid-column: 2 / -1;
  grid-row: 2 / -1;
`;