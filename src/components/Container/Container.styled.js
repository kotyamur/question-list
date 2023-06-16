import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    max-width: 1200px;
  }
`;