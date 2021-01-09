import styled from "styled-components";
import computerImage from "images/about/computer.png";

export const Wrapper = styled.div`
  display: flex;
  min-height: 50vh;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-wrap: nowrap;
  }
`;
export const Image = styled.img`
  width: 100vw;
  height: 100vw;
  max-height: 550px;
  background-image: url(${computerImage});
  background-position: 60% 50%;
  background-repeat: no-repeat;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    background-position: 40% 50%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    max-width: 500px;
    max-height: 500px;
    background-position: 60% 50%;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 50vw;
    margin: 0 ${({ theme }) => theme.spacing.mx}px;
    justify-content: space-between;
  }
`;
export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.brown};
  margin: ${({ theme }) => theme.spacing.mx}px 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin: unset;
  }
`;
export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.brown};
  text-align: justify;
  line-height: 1.5em;
`;
export const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.mx}px;
`;
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.mx}px 0 0 0`};
`;
export const SmallImage = styled.img`
  width: 50px;
  height: 50px;
  background-image: url(${(props) => props.img});
  background-color: ${({ theme }) => theme.colors.brown};
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
export const P = styled.p`
  font-size: 12px;
  padding: ${({ theme }) => `${theme.spacing.sm}px 0 0 0`};
  color: ${({ theme }) => theme.colors.brown};
`;
export const Line = styled.div`
  width: calc((100% - 150px - ${({ theme }) => theme.spacing.mx * 2}px) / 2);
  height: 1px;
  background-color: ${({ theme }) => theme.colors.brown};
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 300px;
  }
`;
