import styled, { createGlobalStyle } from 'styled-components';
import menuOpen from '../../assets/icons/menu-open.svg';
import menuClose from '../../assets/icons/menu-close.svg';
import contacts from '../../assets/icons/contacts.svg';
import backgroundLines from '../../assets/icons/background-lines.svg';
import tgIcon from '../../assets/icons/tg.svg';
import inIcon from '../../assets/icons/in.svg';
import vkIcon from '../../assets/icons/vk.svg';
import arrowBytton from '../../assets/icons/arrow-up.svg';

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`;

export const MenuGlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const TitleLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e5e5e5; ;
`;

export const MenuOpen = styled.button`
  all: unset;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 48px;
  height: 48px;
  background-image: url(${menuOpen});
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #131313;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  overflow: hidden;
`;

export const MenuClose = styled.button`
  all: unset;
  width: 48px;
  height: 48px;
  margin-top: 20px;
  background-image: url(${menuClose});
  cursor: pointer;
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - 20px);
  height: 64%;
  border-top: 3px solid #d5d5d5;
  border-bottom: 3px solid #d5d5d5;
  margin-top: 49px;
`;

export const MenuArtist = styled.a`
  margin-bottom: 22px;
  font-size: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  color: #f5f5f5;
`;

export const MenuContacts = styled.a`
  width: 199px;
  height: 31px;
  margin-top: 35px;
  background-image: url(${contacts});
`;

export const Title = styled.h1`
  margin: 0 0 27px;
  text-transform: uppercase;
  font-size: 64px;
  color: #000000;
`;

export const Subtitle = styled.h2`
  margin: 0;
  text-transform: uppercase;
  font-size: 24px;
  letter-spacing: 0.25em;
  text-align: center;
  color: #131313;
`;

export const DescriptionLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #131313;
`;

export const Description = styled.p`
  width: 277px;
  line-height: 16px;
  font-size: 14px;
  font-family: auto;
  color: #f5f5f5;

  &:first-child {
    margin-bottom: 70px;
  }
`;

export const ArtistsLayout = styled.div`
  padding: 0 15px 30px;
  background-image: url(${backgroundLines});
  background-position: center;
  background-repeat: repeat-y;
`;

export const Artist = styled.div`
  display: flex;
  justify-content: space-between;
  height: 130px;
  padding-top: 170px;
  font-size: 14px;
  letter-spacing: 0.1em;

  &:nth-child(even) {
    flex-direction: row-reverse;
    padding-top: 210px;

    & > div {
      align-items: flex-start;

      & > a {
        text-align: start;
      }

      & > img {
        transform: rotate(180deg);
      }
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ArtistDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ArtistName = styled.a`
  display: inline-block;
  width: 130px;
  text-align: end;
`;

export const CreatorsLayout = styled.div`
  background-color: #131313;
`;

export const Creator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  text-transform: uppercase;
  color: #f5f5f5;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 134px;
    text-transform: none;
  }
`;

export const CreatorName = styled.p`
  margin: 55px 0 12px;
  font-size: 24px;
  letter-spacing: 0.1em;
`;

export const CreatorJob = styled.p`
  font-family: auto;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const CreatorLinks = styled.div`
  width: 100%;
  font-family: auto;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.1em;
`;

export const CreatorLink = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-left: 110px;
  margin-bottom: 30px;
  font-weight: 400;
  background-repeat: no-repeat;
  background-position: 15px;
  line-height: 24px;

  &:nth-child(1) {
    background-image: url(${tgIcon});
    background-size: 39px 24px;
  }

  &:nth-child(2) {
    background-image: url(${inIcon});
    background-size: 28px 23px;
  }

  &:nth-child(3) {
    background-image: url(${vkIcon});
    background-size: 47px 24px;
  }
`;

export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 35px 0;
`;

export const Arrow = styled.button`
  all: unset;
  width: 48px;
  height: 48px;
  background-image: url(${arrowBytton});
  background-repeat: no-repeat;
  cursor: pointer;
`;
