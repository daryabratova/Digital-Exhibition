import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { artists } from '../../../data';

import * as Styles from './Page.styles';

const pictures = Array.from(Array(5).keys());

export default function Page() {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const router = useRouter();

  const currentArtist = artists.find((artist) => artist.id === router.query.artistId);

  return (
    <>
      <Styles.GlobalStyle />
      <header>
        <Styles.ArtistLayout>
          <Styles.Artist>
            <Link href="../">
              <Styles.LinkMain />
            </Link>
            <Styles.ArtistPagination>
              {artists.map((artist) => {
                return (
                  <Link
                    href={{ pathname: '/artists/[artistId]', query: { artistId: artist.id } }}
                    passHref
                    key={artist.id}
                  >
                    <Styles.PaginationCircle filledCircle={artist.id === currentArtist.id} />
                  </Link>
                );
              })}
            </Styles.ArtistPagination>
            <Styles.ArtistInfo>
              <Styles.ArtistName>{currentArtist.name}</Styles.ArtistName>
              <Styles.ArtistLinks>
                <Styles.ArtistLink>{currentArtist.tg}</Styles.ArtistLink>
                <Styles.ArtistLink>{currentArtist.in}</Styles.ArtistLink>
                <Styles.ArtistLink>{currentArtist.vk}</Styles.ArtistLink>
              </Styles.ArtistLinks>
            </Styles.ArtistInfo>
          </Styles.Artist>
          <Styles.Decoration />
        </Styles.ArtistLayout>
      </header>

      <main>
        <Styles.PicturesLayout>
          {pictures.map((picture) => {
            return (
              <Styles.ArtLayout key={picture}>
                <div>
                  <Styles.Title>{currentArtist.title}</Styles.Title>
                  <Styles.Picture />
                </div>
                <Styles.Description>{currentArtist.description} </Styles.Description>
              </Styles.ArtLayout>
            );
          })}
          <Styles.ArrowUp onClick={handleScrollToTop} />
        </Styles.PicturesLayout>
      </main>
    </>
  );
}

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
