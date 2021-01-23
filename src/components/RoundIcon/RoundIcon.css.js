import styled from "styled-components";
export const IconWrapper = styled.a`
  // width: 35px;
  // height: 35px;
  padding: ${({ theme }) => theme.spacing.sm / 2}px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.3s;
  font-size: 12px;
  visibility: hidden;
  @media (min-width: ${({ theme }) => theme.breakpoints.phone}px) {
    visibility: visible;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    font-size: 16px;
    padding: ${({ theme }) => theme.spacing.sm}px;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.brown};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
