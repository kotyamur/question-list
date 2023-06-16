import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

export const EditLink = styled(NavLink)`
  margin-left: auto;
  width: 40px;
  color: ${p => p.theme.colors.primaryText};
  text-align: center;
  &:hover {
    color: ${p => p.theme.colors.greenDark};
  }
`;

export const DeleteButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  outline: none;
  background-color: ${p => p.theme.colors.white};
  border: none;
  margin-right: ${p => p.theme.space[4]}px;

  &:hover {
    color: ${p => p.theme.colors.redDark};
  }
`;
