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
            <Styles.TitleWrapper>
              <Styles.Title data-text="TRIGGER">
                <span>TRIGGER</span>
              </Styles.Title>
              <Styles.Subtitle>[Make it flow]</Styles.Subtitle>
            </Styles.TitleWrapper>
          </Styles.TitleLayout>
          <Styles.DescriptionLayout>
            <Styles.Description>
              A trigger (trigger system) is a class of electronic devices that have the ability to
              stay in one of two stable states for a long time and alternate them under the
              influence of external signals. Each trigger state is easily recognized by the value of
              the output voltage. By the nature of the action, triggers belong to pulse devices —
              their active elements (transistors, lamps) operate in the key mode, and the change of
              states lasts a very short time.
            </Styles.Description>
            <Styles.Description>
              A distinctive feature of the trigger as a functional device is the property of storing
              binary information. Trigger memory refers to the ability to remain in one of two
              states even after the termination of the switching signal. Taking one of the states as
              «1» and the other as «0», we can assume that the trigger stores (remembers) one digit
              of a number written in binary code.
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
