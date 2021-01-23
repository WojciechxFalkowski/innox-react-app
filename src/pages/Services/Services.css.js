import styled from "styled-components";
import { StyledButton } from "components/Button/Button.css";
export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const SubSection = styled.div`
  display: flex;
  min-height: 250px;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: ${({ theme }) => `${theme.spacing.xl}px ${theme.spacing.sm}px`};
  background-color: ${({ theme }) => theme.colors.brown};
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    flex-wrap: nowrap;
    align-items: center;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    min-height: 300px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    min-height: 350px;
  }
`;
export const TextWrapper = styled.div`
  text-align: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    order: 2;
  }
`;
export const Title = styled.h3`
  padding: ${({ theme }) => theme.spacing.mx}px;
  margin: 0 auto;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;
export const Text = styled.p`
  padding: ${({ theme }) => theme.spacing.mx}px;
  text-align: justify;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.7;
`;
export const TextButton = styled(StyledButton)`
  width: 160px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.brown};
  color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.white};
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    margin-bottom: ${({ theme }) => theme.spacing.mx}px;
  }
`;

export const LaptopWrapper = styled.div`
  position: relative;
  height: 150px;
  margin-top: ${({ theme }) => theme.spacing.mx}px;
  margin-left: auto;
  margin-right: auto;
  transform: translateY(15px);
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    order: 1;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-top: unset;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    transform: translateY(-60px);
  }
`;
export const Img = styled.img`
  height: 140px;
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    height: 190px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 220px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 330px;
  }
`;
export const MacbookImage = styled.img`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 117px;
  width: 184px;
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    height: 160px;
    width: 250px;
    top: 60%;
    left: 50%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 180px;
    width: 290px;
    top: 70%;
    left: 50%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 275px;
    width: 430px;
    top: 103%;
    left: 50%;
  }
`;
