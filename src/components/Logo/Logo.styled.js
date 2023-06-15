import styled from 'styled-components';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 60px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.round};
  text-transform: uppercase;
  margin: 0 auto;
`;
