import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

export const ListForm = styled.ul`
  display: flex;
  flex-direction: column;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.md};
  
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 60px;
  & > p {
    width: calc((100% - 4px * 6) / 7);
    text-align: center;
  }
  &:not(:last-child) {
    border-bottom: ${p => p.theme.borders.normal};
  }
`;
