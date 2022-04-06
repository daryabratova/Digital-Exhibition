import styled, { createGlobalStyle } from 'styled-components';

import MenuOpenIcon from '../../assets/icons/menu-open.svg';
import MenuCloseIcon from '../../assets/icons/menu-close.svg';
import Contacts from '../../assets/icons/contacts.svg';
import ContactsHover from '../../assets/icons/contacts-hover.svg';

import TgIcon from '../../assets/icons/tg.svg';
import InIcon from '../../assets/icons/in.svg';
import VkIcon from '../../assets/icons/vk.svg';
import TgIconHover from '../../assets/icons/tg-hover.svg';
import InIconHover from '../../assets/icons/in-hover.svg';
import VkIconHover from '../../assets/icons/vk-hover.svg';

import ArrowBytton from '../../assets/icons/arrow-up.svg';

import BackgroundMobile from '../../assets/images/main-background-mobile.png';
import BackgroundDesktop from '../../assets/images/main-background-desktop.png';

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

export const HeaderLayout = styled.div`
  @media screen and (min-width: 1366px) {
    display: flex;
    width: 100%;
  }
`;

export const TitleLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #e5e5e5;
  font-family: Black Acute, serif;
`;

export const MenuOpen = styled.button`
  all: unset;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 48px;
  height: 48px;
  background-image: url(${MenuOpenIcon});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 60px;
    width: 80px;
    height: 80px;
  }

  @media screen and (min-width: 1366px) {
    top: 80px;
    width: 101px;
    height: 101px;
  }
`;

export const Menu = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #131313;
  font-family: Black Acute, serif;
  overflow: hidden;
`;

export const MenuClose = styled.button`
  all: unset;
  width: 48px;
  height: 48px;
  margin-top: 20px;
  background-image: url(${MenuCloseIcon});
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.2s;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 80px;
    height: 80px;
    margin-top: 60px;
  }

  @media screen and (min-width: 1366px) {
    width: 101px;
    height: 101px;
    margin-top: 80px;
  }
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - 20px);
  height: 64%;
  margin-top: 49px;
  border-top: 3px solid #d5d5d5;
  border-bottom: 3px solid #d5d5d5;

  @media screen and (min-width: 1366px) {
    width: calc(100% - 272px);
    height: 54%;
    margin-top: 51px;
  }
`;

export const MenuArtist = styled.a`
  margin-bottom: 22px;
  font-size: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  color: #f5f5f5;
  transition: all 0.2s;

  &:hover {
    color: #fbec5d;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1366px) {
    font-size: 36px;
  }
`;

export const MenuContacts = styled.a`
  width: 199px;
  height: 31px;
  margin-top: 35px;
  background-image: url(${Contacts});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 180px 30px;
  cursor: pointer;

  &:hover,
  &:active {
    background-image: url(${ContactsHover});
  }

  @media screen and (min-width: 768px) {
    width: 245px;
    height: 31px;
    margin-top: 61px;
    background-size: 224px 31px;
  }

  @media screen and (min-width: 1366px) {
    width: 265px;
    height: 41px;
    margin-top: 81px;
    background-size: 264px 41px;
  }
`;

export const Title = styled.h1`
  margin: 0 0 27px;
  text-transform: uppercase;
  font-size: 64px;
  color: #000000;

  @media screen and (min-width: 768px) {
    font-size: 104px;
  }

  @media screen and (min-width: 1366px) {
    font-size: 144px;
  }
`;

export const Subtitle = styled.h2`
  margin: 0;
  text-transform: uppercase;
  font-size: 24px;
  letter-spacing: 0.25em;
  text-align: center;
  color: #131313;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1366px) {
    font-size: 42px;
  }
`;

export const DescriptionLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #131313;
`;

export const Description = styled.p`
  width: 277px;
  line-height: 16px;
  font-size: 14px;
  color: #f5f5f5;

  &:first-child {
    margin-bottom: 15px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    font-size: 18px;
    line-height: 22px;

    &:first-child {
      margin-bottom: 45px;
    }
  }

  @media screen and (min-width: 1366px) {
    width: 565px;
    font-size: 20px;
    line-height: 28px;

    &:first-child {
      margin-bottom: 35px;
    }
  }
`;

export const ArtistsLayout = styled.main`
  padding: 0 15px 30px;
  background-image: url(${BackgroundMobile});
  background-position: center;
  background-repeat: repeat-y;

  @media screen and (min-width: 1366px) {
    width: 1200px;
    padding: 0;
    margin: 0 auto;
    background-image: url(${BackgroundDesktop});
    background-repeat: repeat-y;
    background-position: center;
  }
`;

export const Artist = styled.div`
  display: flex;
  justify-content: space-between;
  height: 130px;
  padding-top: 170px;
  font-family: Black Acute, serif;
  font-size: 14px;
  letter-spacing: 0.1em;

  img {
    cursor: pointer;
  }

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

  @media screen and (min-width: 768px) {
    width: 640px;
    height: 300px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1366px) {
    align-items: flex-end;
    width: 453px;
    height: 226px;
    padding: 0;
    margin: 0;
    font-size: 18px;

    img {
      margin-right: 53px;
      transition: all 0.2s;
    }

    &:hover {
      img {
        margin-right: 68px;
      }
    }

    &:nth-child(even) {
      flex-direction: row;
      padding: 0;

      & > div {
        align-items: flex-end;

        & > a {
          text-align: end;
        }

        & > img {
          transform: none;
        }
      }
    }

    &:nth-child(1),
    &:nth-child(4) {
      padding: 266px 0 0 374px;
    }

    &:nth-child(2),
    &:nth-child(5) {
      padding: 40px 0 0 126px;
    }

    &:nth-child(3),
    &:nth-child(6) {
      padding: 120px 0 0 620px;
    }

    &:nth-child(7) {
      padding: 0 0 264px 126px;
    }
  }
`;

export const Art = styled.div<{ src: string }>`
  width: 130px;
  height: 130px;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: 130px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
    background-repeat: repeat;
  }

  @media screen and (min-width: 1366px) {
    width: 206px;
    height: 226px;
    background-size: cover;
  }
`;

export const ArtistDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  @media screen and (min-width: 768px) {
    justify-content: space-evenly;
  }

  @media screen and (min-width: 1366px) {
    height: 60%;
    margin-bottom: 35px;
    justify-content: space-between;
  }
`;

export const ArtistName = styled.a`
  display: inline-block;
  width: 130px;
  text-align: end;
  transition: all 0.2s;
  cursor: pointer;

  &:active {
    color: #fbec5d;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1366px) {
    width: 165px;
    padding-right: 15px;
  }
`;

export const CreatorsLayout = styled.div`
  background-color: #131313;

  @media screen and (min-width: 1366px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 532px;
  }
`;

export const Creator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  color: #f5f5f5;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 134px;
    text-transform: none;

    @media screen and (min-width: 768px) {
      height: 170px;
    }
  }
`;

export const CreatorName = styled.p`
  margin: 55px 0 12px;
  font-family: Black Acute, serif;
  font-size: 24px;
  letter-spacing: 0.1em;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1366px) {
    font-size: 36px;
  }
`;

export const CreatorJob = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1366px) {
    font-size: 20px;
  }
`;

export const CreatorLinks = styled.div`
  margin: 0 auto;
  font-size: 18px;
  letter-spacing: 0.1em;

  @media screen and (min-width: 1366px) {
    font-size: 20px;
  }
`;

export const CreatorLink = styled.a`
  box-sizing: border-box;
  width: 100%;
  padding-left: 80px;
  margin-bottom: 30px;
  background-repeat: no-repeat;
  background-position: 15px center;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;

  &:nth-child(1) {
    background-image: url(${TgIcon});
    background-size: 39px 24px;

    &:hover,
    &:active {
      background-image: url(${TgIconHover});
    }
  }

  &:nth-child(2) {
    background-image: url(${InIcon});
    background-size: 30px 26px;
    background-position: 20px center;

    &:hover,
    &:active {
      background-image: url(${InIconHover});
    }
  }

  &:nth-child(3) {
    background-image: url(${VkIcon});
    background-size: 45px 22px;

    &:hover,
    &:active {
      background-image: url(${VkIconHover});
    }
  }
`;

export const Footer = styled.footer`
  @media screen and (min-width: 1366px) {
    position: relative;
  }
`;

export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 35px 0;

  @media screen and (min-width: 1366px) {
    position: absolute;
    bottom: 452px;
  }
`;

export const Arrow = styled.button`
  all: unset;
  width: 48px;
  height: 48px;
  background-image: url(${ArrowBytton});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 80px;
    height: 80px;
  }

  @media screen and (min-width: 1366px) {
    width: 101px;
    height: 101px;
  }
`;
