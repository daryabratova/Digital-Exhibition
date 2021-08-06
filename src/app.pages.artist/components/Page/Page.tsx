import React from 'react';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();

  return <h1>First Post -- {router.query.artistId}</h1>;
}
