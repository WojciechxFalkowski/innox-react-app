import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${({ theme }) => theme.spacing.mx}vh;
  align-items: center;
  justify-content: space-between;
`;
export const Line = styled.div`
  width: ${({ width }) => (width ? width : "calc(40% - 100px / 2)")};
  height: 1px;
  background-color: ${({ theme }) => theme.colors.brown};
  @media (min-width: ${({ theme }) => theme.breakpoints.phone}px) {
    width: ${({ width }) => (width ? width : "calc(40% - 140px / 2)")};
  }
`;
