import styled from "styled-components";
import { StyledButton } from "components/Button/Button.css";
export const Section = styled.section`
  text-align: center;
`;
export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: ${({ theme }) => theme.spacing.mx}px auto;
  font-size: 12px;
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    font-size: 16px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 50%;
  }
`;
export const Li = styled.li`
  list-style: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.brown};
  text-transform: capitalize;
`;
export const ListButton = styled(StyledButton)`
  border: unset;
  background-color: unset;
  text-transform: capitalize;
  width: unset;
  padding: unset;
  font-weight: normal;
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    padding: ${({ theme }) => `${theme.spacing.sm}px ${theme.spacing.mx}px`};
  }
`;
export const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Img = styled.img`
  width: calc(50% - ${({ theme }) => theme.spacing.sm * 2}px);
  max-height: 240px;
  margin: ${({ theme }) => theme.spacing.sm}px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: calc(33% - ${({ theme }) => theme.spacing.sm * 2}px);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: calc(25% - ${({ theme }) => theme.spacing.sm * 2}px);
  }
`;
export const Button = styled(StyledButton)`
  margin: ${({ theme }) => theme.spacing.mx}px auto;
  background-color: ${({ theme }) => theme.colors.brown};
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
`;
