import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 152px;
  height: 32px;
  cursor: pointer;
  outline: none;
  padding: 12px 20px;
  background-color: ${p => p.theme.colors.greenLight};
  color: ${p => p.theme.colors.black};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
  border-color: ${p => p.theme.colors.greenDark};

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
