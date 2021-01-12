import styled from "styled-components";
export const StyledButton = styled.button`
  width: ${({ width }) => (width ? width : `120px`)};
  height: ${({ height }) => (height ? height : `unset`)};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : `unset`)};
  color: ${({ theme }) => theme.colors.brown};
  padding: ${({ theme }) => `${theme.spacing.xs}px ${theme.spacing.sm}px`};
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  border: ${({ border, theme }) =>
    border ? `${border}` : `1px solid ${theme.colors.brown}`};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "unset"};
  &:hover {
    opacity: 0.8;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.phone}px) {
    width: ${({ width }) => (width ? width : `140px`)};
    padding: ${({ theme }) => `${theme.spacing.sm}px ${theme.spacing.mx}px`};
  }
`;
