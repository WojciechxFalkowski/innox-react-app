import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  // background-color: green;
  height: ${({ theme }) => theme.spacing.mx}vh;
  align-items: center;
  justify-content: space-between;
`;
export const Line = styled.div`
  width: calc(40% - 140px / 2);
  height: 1px;
  background-color: ${({ theme }) => theme.colors.brown};
`;
