import React from 'react';
import Link from 'next/link';

const FirstArtist = () => {
  return (
    <div>
      <h1>First Artist here</h1>
      <h2>
        <Link href="/">Back home</Link>
      </h2>
    </div>
  );
};

export default FirstArtist;
