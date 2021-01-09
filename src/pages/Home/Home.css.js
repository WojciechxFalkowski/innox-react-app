import styled from "styled-components";
import manWithBike from "images/home/man-with-bike.png";
import background from "images/home/background-image.png";
export const Section = styled.section`
  min-height: 100vh;
  background-image: url(${background});
`;
export const Div = styled.div`
  background-image: url(${manWithBike});
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: 50% 0%;
  @media (min-width: ${({ theme }) =>
      theme.breakpoints.landscapePhone}px) and (orientation: landscape) {
    background-position: 80% 0%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    background-position: left top;
  }
`;
export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    left: 70%;
  }
`;
export const H1 = styled.h1`
  // display:none;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-size: 2.5rem;
  white-space: nowrap;
  font-weight: 100;
`;
export const Span = styled.span`
  display: block;
  font-weight: bold;
  font-size: 1.8rem;
`;
// export const Button = styled.button`
//   color: ${({ theme }) => theme.colors.brown};
//   color: ${({ theme }) => theme.colors.brown};
//   padding: ${({ theme }) => `${theme.spacing.sm}px ${theme.spacing.mx}px`};
//   font-weight: bold;
//   cursor: pointer;
//   text-transform: uppercase;
// `;
