import styled from "styled-components";
export const ImageWrapper = styled.div`
  width: 100%;
  height: ${(100 / 5) * 2}vw;
  margin-top: ${({ theme }) => theme.spacing.mx}px;
  background-image: url(${(props) => props.image});
  background-size: 100% 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: ${({ theme }) => `calc(50% - ${theme.spacing.sm}px * 2)`};
    margin: ${({ theme }) => theme.spacing.sm}px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: ${(50 / 5) * 2}vw;
  }
`;
export const HoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  padding: ${({ theme }) => `0 ${theme.spacing.mx}px`};
  background-color: rgba(151, 115, 94, 0.8);
  transition: 0.3s;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    justify-content: flex-end;
    padding: ${({ theme }) => `0 ${theme.spacing.xl}px`};
  }
  ${ImageWrapper}:hover & {
    opacity: 1;
  }
`;
export const Title = styled.p`
  font-size: 14px;
  font-weight: bold;
  @media (min-width: ${({ theme }) => theme.breakpoints.phone}px) {
    font-size: 16px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    align-self: flex-start;
    margin-bottom: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid white;
  }
`;
export const Paragraph = styled.p`
  max-height: 24px;
  overflow: hidden;
  font-size: 12px;
  @media (min-width: ${({ theme }) => theme.breakpoints.phone}px) {
    max-height: 48px;
    font-size: 14px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    width: 60%;
    align-self: flex-start;
    text-align: justify;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 100%;
    font-size: 16px;
    max-height: 72px;
  }
`;
export const LineWrapper = styled.div`
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    width: 30%;
    align-self: flex-end;
    margin-top: 32px;
    margin-bottom: 32px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 100%;
  }
`;
export const StyledA = styled.a`
  padding: ${({ theme }) => `${theme.spacing.xs}px ${theme.spacing.sm}px`};
  border: 1px solid ${({ theme }) => theme.colors.white};
  font-size: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: unset;
  text-transform: uppercase;
  @media (min-width: ${({ theme }) => theme.breakpoints.phone}px) {
    font-size: 12px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    font-size: 14px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.brown};
  }
`;
