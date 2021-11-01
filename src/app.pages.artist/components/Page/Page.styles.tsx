import styled, { createGlobalStyle } from 'styled-components';

import LinkToMenu from '../../assets/icons/arrow-menu.svg';
import EmptyCircle from '../../assets/icons/circle-empty.svg';
import FilledCircle from '../../assets/icons/circle-full.svg';
import TgIcon from '../../assets/icons/tg.svg';
import InstIcon from '../../assets/icons/in.svg';
import VkIcon from '../../assets/icons/vk.svg';
import Arrow from '../../assets/icons/arrow-up.svg';

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`;

export const ArtistLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #131313;
`;

export const Artist = styled.div`
  width: 250px;
  margin: 25px 0;

  @media screen and (min-width: 1200px) {
    width: 1100px;
    margin: 0;
    padding: 60px 0;
  }
`;

export const LinkMain = styled.a`
  display: inline-block;
  width: 150px;
  height: 25px;
  background-image: url(${LinkToMenu});
  cursor: pointer;
`;

export const ArtistPagination = styled.div`
  display: flex;
  width: 210px;
  height: 23px;
  margin: 60px auto 0;

  @media screen and (min-width: 1200px) {
    width: 355px;
    height: 40px;
    margin: -25px auto 0;
  }
`;

export const PaginationCircle = styled.a<{ filledCircle: boolean }>`
  width: 23px;
  height: 23px;
  margin-right: 7px;
  background-image: url(${(props) => (props.filledCircle ? FilledCircle : EmptyCircle)});
  background-size: 23px;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (min-width: 1200px) {
    width: 40px;
    height: 40px;
    margin-right: 12px;
    background-size: 38px;
  }
`;

export const ArtistInfo = styled.div`
  @media screen and (min-width: 1200px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 204px;
  }
`;

export const ArtistName = styled.div`
  width: 250px;
  margin-top: 94px;
  font-size: 28px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #f5f5f5;

  @media screen and (min-width: 1200px) {
    width: 774px;
    margin-top: 0;
    font-size: 72px;
    line-height: 84px;
  }
`;

export const ArtistLinks = styled.div`
  margin-top: 41px;

  @media screen and (min-width: 1200px) {
    margin-top: 0;
  }
`;

export const ArtistLink = styled.div`
  height: 25px;
  padding-left: 72px;
  margin-bottom: 27px;
  background-image: url(${TgIcon});
  background-repeat: no-repeat;
  background-position: left;
  background-size: 39px 24px;
  font-family: initial;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.1em;
  color: #f5f5f5;

  &:nth-child(2) {
    background-image: url(${InstIcon});
    background-size: 28px 23px;
  }

  &:nth-child(3) {
    background-image: url(${VkIcon});
    background-size: 47px 24px;
  }

  @media screen and (min-width: 1200px) {
    height: 30px;
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 28px;
    background-size: 45px 30px;
  }
`;

export const Decoration = styled.div`
  position: absolute;
  bottom: 26px;
  width: 100%;
  height: 90px;
  background-color: #d5d5d5;

  @media screen and (min-width: 1200px) {
    bottom: 250px;
    height: 127px;
  }
`;

export const PicturesLayout = styled.div`
  position: relative;
  width: 100%;
  background-color: #131313;
`;

export const Title = styled.div`
  padding: 36px 0 0 13px;
  font-size: 24px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #f5f5f5;

  @media screen and (min-width: 1200px) {
    width: 333px;
    margin-bottom: 30px;
    font-size: 36px;
    line-height: 42px;
  }
`;

export const ArtLayout = styled.div`
  @media screen and (min-width: 1200px) {
    display: flex;
    width: 1000px;
    margin: 0 auto;
    padding-bottom: 300px;
  }
`;

export const Picture = styled.div`
  width: 345px;
  height: 345px;
  margin: 26px auto 0;
  background-color: #e6e6e6;

  @media screen and (min-width: 1200px) {
    display: inline-block;
    width: 500px;
    height: 500px;
    margin: 0;
  }
`;

export const Description = styled.div`
  width: 345px;
  margin: 13px auto 0;
  padding-bottom: 100px;
  font-family: initial;
  font-size: 18px;
  color: #f5f5f5;

  @media screen and (min-width: 1200px) {
    width: 425px;
    margin: 150px 0 0 100px;
    font-size: 24px;
    line-height: 28px;
  }
`;

export const ArrowUp = styled.button`
  all: unset;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 35px;
  width: 48px;
  height: 48px;
  margin: 0 auto;
  background-image: url(${Arrow});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;

  @media screen and (min-width: 1200px) {
    width: 100px;
    height: 100px;
  }
`;