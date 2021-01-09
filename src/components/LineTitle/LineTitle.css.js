import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  // background-color: green;
  height: ${({ theme }) => theme.spacing.mx}vh;
  align-items: center;
  justify-content: space-around;
`;
export const Line = styled.div`
  width: calc(35% - 140px / 4);
  height: 1px;
  background-color: ${({ theme }) => theme.colors.brown};
`;
