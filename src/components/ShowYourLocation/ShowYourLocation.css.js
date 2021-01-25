import styled from "styled-components";
import { StyledButton } from "components/Button/Button.css";
export const BackgroundButton = styled(StyledButton)`
  position: absolute;
  top: 0;
  left: 0;
  // z-index: 100;
  padding: ${({ theme }) => `${theme.spacing.xs}px ${theme.spacing.sm}px`};
  margin: unset;
  background-color: ${({ theme }) => theme.colors.brown};
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  transform: translate(10px, 10px);
`;
