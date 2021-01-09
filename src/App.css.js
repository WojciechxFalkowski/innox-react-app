import styled from "styled-components";
export const Main = styled.main`
  padding: 0 ${({ theme }) => theme.spacing.mx}px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    max-width: 1200px;
    margin: 0 auto;
  } ;
`;
