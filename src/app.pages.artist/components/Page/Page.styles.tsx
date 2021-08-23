import styled, { createGlobalStyle } from 'styled-components';
import LinkToMenu from '../../../assets/icons/arrow-menu.svg';
import EmptyCircle from '../../../assets/icons/circle-empty.svg';
import FilledCircle from '../../../assets/icons/circle-full.svg';
import TgIcon from '../../../assets/icons/tg.svg';
import InstIcon from '../../../assets/icons/in.svg';
import VkIcon from '../../../assets/icons/vk.svg';
import Arrow from '../../../assets/icons/arrow-up.svg';

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
`;

export const LinkMain = styled.div`
  width: 150px;
  height: 25px;
  background-image: url(${LinkToMenu});
`;

export const ArtistPagination = styled.div`
  display: flex;
  width: 210px;
  height: 23px;
  margin: 60px auto 0;
`;

export const PaginationCircle = styled.a<{ filledCircle: boolean }>`
  width: 23px;
  height: 23px;
  margin-right: 7px;
  background-image: url(${(props) => (props.filledCircle ? FilledCircle : EmptyCircle)});
  background-size: 23px;
  background-position: center;
`;

export const ArtistName = styled.div`
  width: 250px;
  margin-top: 94px;
  font-size: 28px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #f5f5f5;
`;

export const ArtistLinks = styled.div`
  margin-top: 41px;
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
`;

export const Decoration = styled.div`
  position: absolute;
  bottom: 26px;
  width: 100%;
  height: 90px;
  background-color: #d5d5d5;
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
`;

export const Picture = styled.div`
  width: 345px;
  height: 345px;
  margin: 26px auto 0;
  background-color: #e6e6e6;
`;

export const Description = styled.div`
  width: 345px;
  margin: 13px auto 0;
  padding-bottom: 100px;
  font-family: initial;
  font-size: 18px;
  color: #f5f5f5;
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
  cursor: pointer;
`;
