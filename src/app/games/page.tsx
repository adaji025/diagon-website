"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Game {
  name: string;
  image: string;
  link: string;
}

async function getData() {
  const res = await fetch("https://api.diagon.gg/games");

  if (!res.ok) {
    throw new Error("Failed to fetch games data");
  }

  return res.json();
}




const Card: React.FC<{ game: Game }> = ({ game }) => {
  return (
    <div>
      <img
        src={game.image}
        alt={game.name}
        className="w-full hover:scale-95 transition-all duration-300 rounded-[10px]"
      />
      <div className="flex justify-between mt-5">
        <a href={game.link}>
          <span className="font-bold text-base capitalize text-white">
            {game.name}
          </span>
        </a>
        <Link
          href={{
            pathname: "/play",
            query: { gameName: game.name, gameLink: game.link }, // Pass only necessary data
          }}
        >
          <button className="bg-[#E20001] px-4 text-white font-semibold rounded-sm inline-flex">
            Play
          </button>
        </Link>
      </div>
    </div>
  );
};

const useClient = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setGames(data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    }

    fetchData();
  }, []);

  return games;
};

const Games: React.FC = () => {
  const games = useClient();

  return (
    <div className="pt-20 bg-black">
      <div className="max-w-[1200px] mt-24 mx-auto px-8 md:px-20 pb-[200px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {games.map((item, index) => (
            <Card key={index} game={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;
