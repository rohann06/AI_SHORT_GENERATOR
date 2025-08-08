import Image from "next/image";
import { useCreateNewStore } from "@/store/store";

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
  const selectedStyle = useCreateNewStore((state) => state.style);
  const setStyle = useCreateNewStore((state) => state.setStyle);

  return (
    <div>
      <div>
        <p className="text-xl lg:text-2xl font-black text-violet-500">Style</p>
        <p className="text-xs lg:text-sm font-semibold text-gray-400">
          Select Your Video Style
        </p>
      </div>
      <div className="flex items-center justify-center lg:justify-start flex-wrap gap-x-10 py-5">
        {styles?.map((style, i) => (
          <div
            className="flex flex-col items-center cursor-pointer group"
            key={i}
            onClick={() => setStyle(style.name)}
          >
            <div className="relative h-[150px] w-[150px] lg:h-[200px] lg:w-[150px] rounded-xl overflow-hidden hover:scale-105 duration-300">
              <Image
                src={style.image}
                alt={style.name}
                height={400}
                width={400}
                className="w-full h-full object-cover"
                priority={i < 3} // Optional: prioritize loading first few images
              />
              {/* Overlay */}
              <div
                className={`
                absolute inset-0 
                ${
                  selectedStyle === style.name
                    ? "bg-violet-500/30"
                    : "group-hover:bg-black/20"
                }
                transition-all duration-300
                flex items-center justify-center
              `}
              >
                {selectedStyle === style.name && (
                  <div className="bg-violet-500 text-white p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
            <p
              className={`text-lg font-medium mt-2 ${
                selectedStyle === style.name
                  ? "text-violet-500"
                  : "text-gray-800"
              }`}
            >
              {style.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Style;
