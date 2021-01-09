import styled from "styled-components";
export const StyledButton = styled.button`
  width: 140px;
  border: 1px solid ${({ theme }) => theme.colors.brown};
  color: ${({ theme }) => theme.colors.brown};
  color: ${({ theme }) => theme.colors.brown};
  padding: ${({ theme }) => `${theme.spacing.sm}px ${theme.spacing.mx}px`};
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    opacity: 0.8;
  }
`;
