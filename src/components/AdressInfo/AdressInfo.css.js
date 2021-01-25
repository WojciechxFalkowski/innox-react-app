import styled from "styled-components";
export const StyledAdress = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: space-around;
  // min-height: 400px;
  width: 250px;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    min-height: unset;
    align-self: center;
  }
`;
export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.colors.brown};
  font-weight: bold;
  text-transform: uppercase;
  flex-basis: 60%;
  margin: ${({ theme }) => theme.spacing.sm}px 0;
`;
export const StyledSpan = styled.span`
  display: block;
  margin-top: ${({ theme }) => theme.spacing.xs}px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: normal;
  font-size: 14px;
  opacity: 0.7;
  text-transform: capitalize;
`;
export const StyledInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledRoundIcon = styled.a`
  width: 40px;
  height: 40px;
  max-width: 40px;
  max-height: 40px;
  text-align: center;
  line-height: 40px;
  color: ${({ theme }) => theme.colors.brown};
  border: 1px solid ${({ theme }) => theme.colors.brown};
  border-radius: 50%;
`;
