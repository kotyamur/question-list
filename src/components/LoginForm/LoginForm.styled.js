import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 260px;
  padding: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  margin: 0 auto;
  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 220px;
  }
  & input {
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.sm};
    background-color: ${p => p.theme.colors.grey};
    height: 32px;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 32px;
  cursor: pointer;
  outline: none;
  padding: 12px 20px;
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.black};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
  text-transform: uppercase;

  &:hover {
    background-color: ${p => p.theme.colors.grey};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;