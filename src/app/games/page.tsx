import React from "react";

type CardProps = {
  item: {
    name: string;
    image: string;
    link: string;
  };
};

const Card = ({ item }: CardProps) => {
  return (
    <div>
      <img
        src="/image/protector.png"
        alt=""
        className="w-full hover:scale-95 transition-all duration-300 rounded-[10px]"
      />
      <div className="flex justify-between mt-5">
        <span className=" font-bold  text-base capitalize text-white">{item.name}</span>
        <button className="bg-[#E20001] px-4 text-white font-semibold rounded-sm inline-flex">Play</button>
      </div>
    </div>
  );
};

const Games = () => {
  const games = [
    {
      name: "hulu",
      image: "/images/hulu.png",
      link: ""
    },
    {
      name: "fanatics",
      image: "/images/fanatics.png",
      link: ""
    },
    {
      name: "google play",
      image: "/images/google-play.png",
      link: ""
    },
    {
      name: "MTN",
      image: "/images/mtn.png",
      link: ""
    },
    {
      name: "hulu",
      priceStart: 5,
      priceEnd: 5000,
      rating: "4.7",
      image: "/images/hulu.png",
      link: ""
    },
    {
      name: "fanatics",
      image: "/images/fanatics.png",
      link: ""
    },
    {
      name: "google play",
      image: "/images/google-play.png",
      link: ""
    },
    {
      name: "MTN",
      image: "/images/mtn.png",
      link: ""
    },
  ];
  return (
    <div className="pt-20  bg-black">
      <div className="max-w-[1200px] mt-24 mx-auto px-8 md:px-20 pb-[200px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {games.map((item, index) => (
            <Card key={index} {...{ item }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;
