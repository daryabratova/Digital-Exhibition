import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { artists, creators } from '../../../data';
import arrow from '../../assets/icons/arrow.svg';

import * as Styles from './Page.styles';

const Home: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Head>
        <title>Digital Exhibition</title>
        <meta
          name="description"
          content="Web page for posting artists' works and information about them"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Styles.GlobalStyle />
      <header>
        {menuIsOpen && (
          <>
            <Styles.Menu>
              <Styles.MenuClose onClick={() => setMenuIsOpen(false)} />
              <Styles.MenuContent>
                {artists.map((artist) => (
                  <Styles.MenuArtist
                    onClick={() => setMenuIsOpen(false)}
                    href={`#${artist.id}`}
                    key={artist.id}
                  >
                    {artist.name}
                  </Styles.MenuArtist>
                ))}
              </Styles.MenuContent>
              <Styles.MenuContacts href="#creators" onClick={() => setMenuIsOpen(false)} />
            </Styles.Menu>
            <Styles.MenuGlobalStyle />
          </>
        )}
        <Styles.MenuOpen onClick={() => setMenuIsOpen(true)} />
        <Styles.HeaderLayout>
          <Styles.TitleLayout>
            <div>
              <Styles.Title>Trigger</Styles.Title>
              <Styles.Subtitle>[Make it flow]</Styles.Subtitle>
            </div>
          </Styles.TitleLayout>
          <Styles.DescriptionLayout>
            <Styles.Description>
              Триггер (триггерная система) — класс электронных устройств, обладающих способностью
              длительно находиться в одном из двух устойчивых состояний и чередовать их под
              воздействием внешних сигналов. Каждое состояние триггера легко распознаётся по
              значению выходного напряжения. По характеру действия триггеры относятся к импульсным
              устройствам — их активные элементы (транзисторы, лампы) работают в ключевом режиме, а
              смена состояний длится очень короткое время.
            </Styles.Description>
            <Styles.Description>
              Отличительной особенностью триггера как функционального устройства является свойство
              запоминания двоичной информации. Под памятью триггера подразумевают способность
              оставаться в одном из двух состояний и после прекращения действия переключающего
              сигнала. Приняв одно из состояний за «1», а другое за «0», можно считать, что триггер
              хранит (помнит) один разряд числа, записанного в двоичном коде.
            </Styles.Description>
          </Styles.DescriptionLayout>
        </Styles.HeaderLayout>
      </header>

      <Styles.ArtistsLayout>
        {artists.map((artist) => {
          return (
            <Styles.Artist id={artist.id} key={artist.id}>
              <Styles.Art src={artist.artURL} />
              <Link
                href={{ pathname: '/artists/[artistId]', query: { artistId: artist.id } }}
                passHref
              >
                <Styles.ArtistDescription>
                  <img src={arrow} alt="arrow" />
                  <Styles.ArtistName>{artist.name}</Styles.ArtistName>
                </Styles.ArtistDescription>
              </Link>
            </Styles.Artist>
          );
        })}
      </Styles.ArtistsLayout>

      <Styles.Footer>
        <Styles.CreatorsLayout id="creators">
          {creators.map((creator) => {
            return (
              <Styles.Creator id={creator.name} key={creator.name}>
                <Styles.CreatorName>{creator.name}</Styles.CreatorName>
                <Styles.CreatorJob>{creator.job}</Styles.CreatorJob>
                <Styles.CreatorLinks>
                  <Styles.CreatorLink>{creator.tg}</Styles.CreatorLink>
                  <Styles.CreatorLink>{creator.in}</Styles.CreatorLink>
                  <Styles.CreatorLink>{creator.vk}</Styles.CreatorLink>
                </Styles.CreatorLinks>
              </Styles.Creator>
            );
          })}
          <Styles.ArrowWrapper>
            <Styles.Arrow onClick={handleScrollToTop} />
          </Styles.ArrowWrapper>
        </Styles.CreatorsLayout>
      </Styles.Footer>
    </>
  );
};

export default Home;
