import styled from "styled-components";
import { StyledButton } from "components/Button/Button.css";
import { Wrapper, Line } from "components/LineTitle/LineTitle.css";
export const Section = styled.section``;
export const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: calc(50% - ${({ theme }) => theme.spacing.sm * 2}px);
  height: 50vw;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: ${({ theme }) => theme.spacing.sm}px;
  border: 1px solid ${({ theme }) => theme.colors.brown};
  @media (min-width: ${({ theme }) => theme.breakpoints.phone}px) {
    height: 50vw;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    width: calc(33% - ${({ theme }) => theme.spacing.sm * 2}px);
    height: 260px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: calc(25% - ${({ theme }) => theme.spacing.sm * 2}px);
    height: 300px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 400px;
  }
`;
export const ImageTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.brown};
  opacity: 0;
  transition: 0.3s;
  ${ImageWrapper}:hover & {
    opacity: 0.8;
  }
`;
export const ImageTextInfoWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing.sm}px;
  color: ${({ theme }) => theme.colors.white};
  @media (min-width: ${({ theme }) => theme.breakpoints.phone}px) {
    margin: ${({ theme }) => `${theme.spacing.sm}px ${theme.spacing.mx}px`};
    min-height: 60px;
  }
`;
export const ImageNameText = styled.p`
  font-size: 14px;
  font-weight: bold;
  @media (min-width: ${({ theme }) => theme.breakpoints.phone}px) {
    font-size: 16px;
  }
`;
export const ImagePositionText = styled.p`
  margin-top: ${({ theme }) => theme.spacing.xs}px;
  padding-top: ${({ theme }) => theme.spacing.xs}px;
  border-top: ${({ theme }) =>
    `${theme.spacing.xs / 2}px solid ${theme.colors.white}`};
  width: min-content;
  font-size: 14px;
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    width: fit-content;
  }
`;
export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  @media (min-width: ${({ theme }) => theme.breakpoints.phone}px) {
    margin: ${({ theme }) => theme.spacing.sm}px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: ${({ theme }) => `${theme.spacing.mx}px ${theme.spacing.sm}px`};
  }
`;
export const Img = styled.img`
  width: calc(50% - ${({ theme }) => theme.spacing.sm * 2}px);
  height: 50vw;
  margin: ${({ theme }) => theme.spacing.sm}px;
  border: 1px solid ${({ theme }) => theme.colors.brown};
  @media (min-width: ${({ theme }) => theme.breakpoints.phone}px) {
    height: 50vw;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    width: calc(33% - ${({ theme }) => theme.spacing.sm * 2}px);
    height: 260px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: calc(25% - ${({ theme }) => theme.spacing.sm * 2}px);
    height: 300px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 400px;
  }
`;
export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: calc(50% - ${({ theme }) => theme.spacing.sm * 2}px);
  height: 50vw;
  margin: ${({ theme }) => theme.spacing.sm}px;
  border: 1px solid ${({ theme }) => theme.colors.brown};
  @media (min-width: ${({ theme }) => theme.breakpoints.phone}px) {
    height: 50vw;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    width: calc(33% - ${({ theme }) => theme.spacing.sm * 2}px);
    height: 260px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: calc(25% - ${({ theme }) => theme.spacing.sm * 2}px);
    height: 300px;
    justify-content: space-evenly;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 400px;
  }
`;
export const CoffeeImg = styled.img`
  width: 70px;
  height: 35px;
  margin: 0 auto;
  transform: translateX(2px);
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    width: 100px;
    height: 50px;
  }
`;
export const Paragraph = styled.p`
  word-spacing: 100vw;
  text-align: center;
  color: ${({ theme }) => theme.colors.brown};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    font-size: 18px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 20px;
  }
`;
export const BackgroundButton = styled(StyledButton)`
  width: unset;
  // margin: ${({ theme }) => theme.spacing.mx}px auto;
  background-color: ${({ theme }) => theme.colors.brown};
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  width: unset;
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    width: 120px;
  }
`;
export const StyledWrapper = styled(Wrapper)`
  height: unset;
  justify-content: space-around;
`;
export const StyledLine = styled(Line)`
  width: calc(20% / 2);
`;
