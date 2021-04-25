import styled from "styled-components";
export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  padding: ${({ theme }) => theme.spacing.xl}px 0;
  margin-top: ${({ theme }) => `${theme.spacing.xl}px`};
  background-color: ${({ theme }) => theme.colors.brown};
`;
export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 400px;
  margin: ${({ theme }) => theme.spacing.mx}px 0;
`;
export const A = styled.a`
  padding: ${({ theme }) => theme.spacing.sm}px;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.3s;
  border-radius: 50%;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
export const H5 = styled.h5`
  color: ${({ theme }) => theme.colors.white};
  font-size: 10px;
  font-weight: normal;
  @media (min-width: ${({ theme }) => theme.breakpoints.phone}px) {
    font-size: 14px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    font-size: 16px;
  }
`;
