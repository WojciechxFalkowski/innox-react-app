import styled from "styled-components";
import { Link } from "react-scroll";
export const Nav = styled.nav`
  position: absolute;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.bigDesktop}px;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const Img = styled.img`
  margin-left: ${({ theme }) => theme.spacing.xl}px;
`;
export const StyledLink = styled(Link)`
  cursor: pointer;
  margin: 0 ${({ theme }) => theme.spacing.xs}px;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  text-decoration: unset;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin: 0 ${({ theme }) => theme.spacing.sm}px;
  }
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 0px;
  background-color: rgba(120, 120, 120, 0.8);
  overflow: hidden;
  height: ${(props) => props.open && "240px"};
  text-align: center;
  transition: 0.7s;
  margin-block-start: unset;
  margin-block-end: unset;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: unset;
    align-items: unset;
    justify-content: unset;
    background-color: unset;
    margin-right: ${({ theme }) => theme.spacing.xl}px;
    height: unset;
  }
`;
export const Li = styled.li`
  padding: ${({ theme }) => `${theme.spacing.xs}px 0`};
  list-style-type: none;
`;
