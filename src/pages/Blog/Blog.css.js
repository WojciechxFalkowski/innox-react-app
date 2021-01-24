import styled from "styled-components";
import { StyledButton } from "components/Button/Button.css";
export const Section = styled.section`
  text-align: center;
`;
export const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: ${({ theme }) => theme.spacing.xl}px;
`;
export const BackgroundButton = styled(StyledButton)`
  margin: ${({ theme }) => theme.spacing.mx}px auto;
  background-color: ${({ theme }) => theme.colors.brown};
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
`;
