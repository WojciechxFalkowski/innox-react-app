import styled from "styled-components";
export const Section = styled.section``;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: ${({ theme }) => theme.breakpoints.bigDesktop}px) {
    margin-top: ${({ theme }) => theme.spacing.xl}px;
  }
`;
export const ContactFormWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-basis: 60%;
  }
`;
export const H4 = styled.h4`
  margin-top: ${({ theme }) => theme.spacing.xl}px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
  color: ${({ theme }) => theme.colors.brown};
  text-transform: uppercase;
`;
export const Paragraph = styled.p`
  font-size: 14px;
  opacity: 0.7;
  margin-bottom: ${({ theme }) => theme.spacing.mx}px;
`;
