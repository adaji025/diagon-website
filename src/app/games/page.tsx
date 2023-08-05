"use client";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Game {
  id: string;
  image: {
    url: string;
    alternativeText: string;
  };
  title: string;
  url: string;
}

const Games = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      const res = await fetch("https://api.diagon.gg/games");
      const game = await res.json();
      setGames(game);
    };

    fetchGames();
  }, []);

  return (
    <div className="pt-20  bg-black">
      <div className="max-w-[1200px] mt-24 mx-auto px-8 md:px-20 pb-[200px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {games.map((game) => (
            <div key={game.id}>
              <img
                src={game.image.url}
                alt={game.image.alternativeText}
                className="w-full hover:scale-95 transition-all duration-300 rounded-[10px]"
              />

              <div className="flex justify-between mt-5">
              <Link
                  href={{
                    pathname: "/play",
                    query: {
                      game: game.url,
                    },
                  }}
                >
                  <span className="font-bold text-base capitalize text-white">
                    {game.title}
                  </span>
                </Link>
                <Link
                  href={{
                    pathname: "/play",
                    query: {
                      game: game.url,
                    },
                  }}
                >
                  <button className="bg-[#E20001] px-4 text-white font-semibold rounded-sm inline-flex">
                    Play
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;
