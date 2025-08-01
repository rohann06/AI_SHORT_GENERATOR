import Image from "next/image";
import React from "react";

const styles = [
  {
    name: "Realistic",
    image: "/styles/tn.avif",
  },
  {
    name: "Cartoon",
    image: "/styles/cartoon.avif",
  },
  {
    name: "Comic",
    image: "/styles/comic.jpg",
  },
  {
    name: "WaterColor",
    image: "/styles/wc.jpg",
  },
  {
    name: "GTA",
    image: "/styles/gta.avif",
  },
];

const Style = () => {
  return (
    <div>
      <div>
        <p className="text-2xl font-black text-violet-500">Style</p>
        <p className="text-sm font-semibold text-gray-400">
          Select Your Video Style
        </p>
      </div>
      <div className=" flex items-center gap-x-10 py-5">
        {styles?.map((style, i) => (
          <div className=" flex flex-col items-center">
            <div
              className=" h-[200px] w-[150px] rounded-xl overflow-hidden hover:scale-105 duration-300"
              key={i}
            >
              <Image
                src={style.image}
                alt="image"
                height={400}
                width={400}
                className=" w-full h-full bg-cover"
              />
            </div>
            <p className=" text-lg font-medium">{style.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Style;
