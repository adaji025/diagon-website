"use client" 
import React, { useEffect } from 'react';
import Head from "next/head";
import { useRouter } from 'next/router';


interface GameQuery {
  url: string;
  // Add other properties if available in the query
}

export default function PlayGame() {
  const router = useRouter();
  const game: GameQuery = router.query as unknown as GameQuery;

  if (!game || !game.url) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>DIAGON: Play Game</title>
        <meta
          name="description"
          content="DIAGON GAMES - A hyper-casual play-to-earn platform that gives you the best digital living experience with crypto."
        />
      </Head>
      <section
        id="app-index"
        className="md:grid grid-cols-12 relative bg-white w-full"
      >
        <div className="app-main overflow-y-scroll md:overflow-y-auto w-full md:grid grid-cols-12 col-span-12">
          <iframe
            title="game.title"
            id="fg-frame-archery-world-tour"
            width="640"
            height="640"
            data-aspect-ratio="1"
            src={game.url}
            frameBorder={0}
            style={{
              display: 'block',
              height: '100vh',
              width: '100vw',
              zIndex: 1000
            }}
          ></iframe>
        </div>
      </section>
    </div>
  );
};
