import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 360px;
  padding: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  
  & input {
    width: 220px;
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.sm};
    background-color: ${p => p.theme.colors.grey};
    height: 32px;
  }
`;

export const ContentInput = styled.textarea`
  width: 100%;
  height: 140px;
  resize: none;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.lg};
  background-color: ${p => p.theme.colors.grey};
  margin-bottom: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[3]}px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 24px;

  & button[type='button'] {
    background-color: ${p => p.theme.colors.redLight};
    border-color: ${p => p.theme.colors.redDark};
  }
`;
