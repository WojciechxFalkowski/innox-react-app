import styled from "styled-components";
export const Wrapper = styled.div`
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.brown};
  margin: ${({ theme }) => theme.spacing.mx}px 0;
  padding: ${({ theme }) => theme.spacing.xl}px;
  max-height: 300px;
  margin: ${({ theme }) => theme.spacing.sm}px;
  width: calc(100% - ${({ theme }) => theme.spacing.sm * 2}px);
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    width: calc(50% - ${({ theme }) => theme.spacing.sm * 2}px);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: calc(33% - ${({ theme }) => theme.spacing.sm * 2}px);
  }
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border: 2px solid ${({ theme }) => theme.colors.brown};
  border-radius: 50%;
`;
export const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;
export const Title = styled.p`
  padding: ${({ theme }) => theme.spacing.mx}px 0;
  text-transform: capitalize;
  font-weight: bold;
  opacity: 0.7;
`;
export const Paragraph = styled.p`
  font-weight: bold;
  opacity: 0.6;
  font-size: 14px;
`;
