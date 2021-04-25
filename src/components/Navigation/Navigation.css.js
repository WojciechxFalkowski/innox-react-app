import styled from "styled-components";
import { Link } from "react-scroll";
export const Nav = styled.nav`
  position: ${({ isSticky }) => (isSticky ? "fixed" : "absolute")};
  width: 100%;
  top: 0px;
  padding: ${({ theme }) => `${theme.spacing.sm}px 0`};
  transform: ${({ isSticky }) => !isSticky && "translateY(20px)"};
  z-index: 100;
  transition: 1s;
  @media (orientation: landscape) {
    transform: unset;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.landscapePhone}px) {
    background-color: rgba(151, 115, 94, 0.8);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: unset;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.bigDesktop}px) {
    transition: background-color linear 1s;
    left: 50%;
    transform: translateX(-50%);
  }

  &.active-header {
    background-color: ${({ isSticky }) =>
      isSticky && "rgba(151, 115, 94, 0.8)"};
  }
`;
export const Img = styled.img`
  margin: 0 ${({ theme }) => theme.spacing.xl}px;
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
  &.active {
    border-bottom: ${({ islower }) =>
      islower === "true"
        ? "2px solid rgba(151, 115, 94, 0.8)"
        : "2px solid #fff"};
  }
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 0px;
  overflow: hidden;
  height: ${(props) => props.open && "240px"};
  text-align: center;
  transition: 0.7s;
  margin-block-start: unset;
  margin-block-end: unset;
  max-height: calc(100vh - 52px);
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
  }
`;
