import styled from "styled-components";
export const Section = styled.section``;
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
