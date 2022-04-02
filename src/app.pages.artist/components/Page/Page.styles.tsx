import styled, { createGlobalStyle } from 'styled-components';

import LinkToMenu from '../../assets/icons/arrow-menu.svg';
import LinkToMenuActive from '../../assets/icons/arrow-menu-active.svg';
import EmptyCircle from '../../assets/icons/circle-empty.svg';
import FilledCircle from '../../assets/icons/circle-full.svg';

import TgIcon from '../../assets/icons/tg.svg';
import InstIcon from '../../assets/icons/in.svg';
import VkIcon from '../../assets/icons/vk.svg';
import TgIconHover from '../../assets/icons/tg-hover.svg';
import InIconHover from '../../assets/icons/in-hover.svg';
import VkIconHover from '../../assets/icons/vk-hover.svg';

import Arrow from '../../assets/icons/arrow-up.svg';

import DecorationMobile from '../../assets/images/artist-decoration-mobile.png';
import DecorationDesktop from '../../assets/images/artist-decoration-desktop.png';
import BackgroundMobile from '../../assets/images/artist-main-mobile.png';
import BackgroundDesktop from '../../assets/images/artist-main-desktop.png';

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`;

export const ArtistLayout = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 116px);
  padding-bottom: 116px;
  background-color: #131313;

  @media screen and (min-width: 768px) {
    min-height: calc(80vh - 127px);
    padding-bottom: 127px;
  }

  @media screen and (min-width: 1366px) {
    min-height: calc(90vh - 127px);
    padding-bottom: 127px;
  }
`;

export const Artist = styled.div`
  width: 250px;
  margin: 25px 0;

  @media screen and (min-width: 768px) {
    width: 640px;
    padding: 60px 0 0;
  }

  @media screen and (min-width: 1366px) {
    width: 1100px;
    height: 520px;
    margin: 0;
  }
`;

export const LinkMain = styled.a`
  display: inline-block;
  width: 150px;
  height: 25px;
  background-image: url(${LinkToMenu});
  transition: all 0.2s;
  cursor: pointer;

  &:hover,
  &:active {
    background-image: url(${LinkToMenuActive});
  }
`;

export const ArtistPagination = styled.div`
  display: flex;
  width: 210px;
  height: 23px;
  margin: 60px auto 0;

  @media screen and (min-width: 768px) {
    width: 245px;
    height: 40px;
    margin: -30px auto 0;
  }

  @media screen and (min-width: 1366px) {
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
  transition: all 0.1s;

  &:hover {
    background-image: url(${FilledCircle});
  }

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
    background-size: 28px;
  }

  @media screen and (min-width: 1366px) {
    width: 40px;
    height: 40px;
    margin-right: 12px;
    background-size: 38px;
  }
`;

export const ArtistInfo = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 204px;
  }
`;

export const ArtistName = styled.div`
  width: 250px;
  margin-top: 94px;
  font-family: Black Acute, serif;
  font-size: 26px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #f5f5f5;

  @media screen and (min-width: 768px) {
    margin-top: 38px;
    font-size: 35px;
    line-height: 46px;
  }

  @media screen and (min-width: 1366px) {
    width: 774px;
    margin-top: 0;
    font-size: 68px;
    line-height: 78px;
  }
`;

export const ArtistLinks = styled.div`
  margin-top: 41px;

  @media screen and (min-width: 1366px) {
    margin-top: 0;
  }
`;

export const ArtistLink = styled.a`
  display: block;
  height: 25px;
  padding-left: 72px;
  margin-bottom: 27px;
  background-image: url(${TgIcon});
  background-repeat: no-repeat;
  background-position: left;
  background-size: 39px 24px;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.1em;
  color: #f5f5f5;
  cursor: pointer;

  &:hover,
  &:active {
    background-image: url(${TgIconHover});
  }

  &:nth-child(2) {
    background-image: url(${InstIcon});
    background-size: 28px 23px;
    background-position: 5px;

    &:hover,
    &:active {
      background-image: url(${InIconHover});
    }
  }

  &:nth-child(3) {
    background-image: url(${VkIcon});
    background-size: 47px 24px;

    &:hover,
    &:active {
      background-image: url(${VkIconHover});
    }
  }
`;

export const Decoration = styled.div`
  position: absolute;
  bottom: 26px;
  width: 100%;
  height: 90px;
  background-color: #131313;
  background-image: url(${DecorationMobile});
  background-repeat: repeat-x;

  @media screen and (min-width: 768px) {
    bottom: 0;
    height: 127px;
    background-image: url(${DecorationDesktop});
  }

  @media screen and (min-width: 1366px) {
    bottom: 0;
    height: 127px;
    background-image: url(${DecorationDesktop});
  }
`;

export const PicturesLayout = styled.main`
  position: relative;
  width: 100%;
  background-color: #131313;
  background-image: url(${BackgroundMobile});
  background-position: center;
  background-repeat: repeat-y;

  @media screen and (min-width: 768px) {
    padding-top: 300px;
    background-image: url(${BackgroundDesktop});
  }

  @media screen and (min-width: 1366px) {
    background-image: url(${BackgroundDesktop});
  }
`;

export const Title = styled.div`
  padding: 36px 0 0 13px;
  font-family: Black Acute, serif;
  font-size: 24px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #f5f5f5;

  @media screen and (min-width: 768px) {
    width: 345px;
    margin: 0 auto;
    margin-bottom: 30px;
    font-size: 28px;
    line-height: 36px;
  }

  @media screen and (min-width: 1366px) {
    width: 333px;
    margin: 0;
    margin-bottom: 30px;
    font-size: 36px;
    line-height: 42px;
  }
`;

export const ArtLayout = styled.div`
  @media screen and (min-width: 1366px) {
    display: flex;
    width: 1000px;
    padding-bottom: 300px;
    padding-left: 57px;
    margin: 0 auto;
  }
`;

export const Picture = styled.div`
  width: 345px;
  height: 345px;
  margin: 26px auto 0;
  background-color: #e6e6e6;

  @media screen and (min-width: 1366px) {
    display: inline-block;
    width: 450px;
    height: 450px;
    margin: 0;
  }
`;

export const Description = styled.div`
  width: 345px;
  padding-bottom: 100px;
  margin: 13px auto 0;
  font-size: 18px;
  color: #f5f5f5;

  @media screen and (min-width: 768px) {
    padding-bottom: 150px;
    font-size: 20px;
    line-height: 24px;
  }

  @media screen and (min-width: 1366px) {
    width: 425px;
    margin: 150px 0 0 60px;
    padding-bottom: 100px;
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

  @media screen and (min-width: 768px) {
    width: 80px;
    height: 80px;
  }

  @media screen and (min-width: 1366px) {
    width: 100px;
    height: 100px;
  }
`;
