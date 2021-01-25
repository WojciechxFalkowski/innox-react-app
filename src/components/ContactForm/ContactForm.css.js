import styled from "styled-components";
import { StyledButton } from "components/Button/Button.css";
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  min-height: 300px;
`;
export const StyledLabel = styled.label`
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    width: 45%;
  }
`;
export const StyledInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.xs}px ${theme.spacing.sm}px`};
  border: 1px solid ${({ theme }) => theme.colors.brown};
`;
export const StyledErrorParagraph = styled.p`
  font-size: 14px;
`;
export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.xs}px ${theme.spacing.sm}px`};
  min-height: 100px;
  border: 1px solid ${({ theme }) => theme.colors.brown};
`;
export const BackgroundButton = styled(StyledButton)`
  padding: ${({ theme }) => theme.spacing.sm}px;
  margin: ${({ theme }) => theme.spacing.mx}px auto;
  background-color: ${({ theme }) => theme.colors.brown};
  color: ${({ theme }) => theme.colors.white};
  font-weight: normal;
  font-size: 12px;
`;
