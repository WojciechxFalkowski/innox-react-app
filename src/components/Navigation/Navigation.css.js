import styled from "styled-components";
import { Link } from "react-scroll";
export const Nav = styled.nav`
  position: absolute;
  width: 100vw;
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
  height: 0px;
  overflow: hidden;
  height: ${(props) => props.open && "240px"};
  text-align: center;
  transition: 0.7s;
  margin-block-start: unset;
  margin-block-end: unset;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: flex;
    margin-right: ${({ theme }) => theme.spacing.xl}px;
    height: unset;
  }
`;
export const Li = styled.li`
  padding: ${({ theme }) => `${theme.spacing.xs}px 0`};
  list-style-type: none;
`;
