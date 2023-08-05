"use client"
import React from 'react';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';

const Play = () => {
  const searchParams = useSearchParams();
  const game = searchParams.get('game');

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
      <section className="md:grid grid-cols-12 relative  w-full">
        <div className="app-main overflow-y-scroll md:overflow-y-auto w-full md:grid grid-cols-12 col-span-12">
          {game && (
            <iframe
              title="Game"
              width="640"
              height="640"
              data-aspect-ratio="1"
              src={game}
              frameBorder={0}
              style={{
                display: 'block',
                height: '100vh',
                width: '100vw',
                zIndex: 1000,
              }}
            ></iframe>
          )}
        </div>
      </section>
    </div>
  );
};

export default Play;





