import Link from "next/link";
import React from "react";

const testimonials = [
  {
    name: "Joel",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best application I've ever used!",
  },
  {
    name: "Antonio",
    avatar: "A",
    title: "Designer",
    description: "I use this daily for generating new photos!",
  },
  {
    name: "Mark",
    avatar: "M",
    title: "CEO",
    description:
      "This app has changed my life, cannot imagine working without it!",
  },
  {
    name: "Mary",
    avatar: "M",
    title: "CFO",
    description:
      "The best in class, definitely worth the premium subscription!",
  },
];

const Feedbacks = () => {
  return (
    <div className="lg:px-[230px] pt-[100px] pb-5">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <div
            key={item.description}
            className="bg-[#192339] border-none text-white p-5 rounded-lg"
          >
            <div>
              <div className="flex items-center gap-x-2">
                <p className="text-lg">{item.name}</p>
                <p className="text-zinc-400 text-sm">{item.title}</p>
              </div>
              <div className="pt-4 px-0">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
      <p className=" text-white text-center pt-20 font-semibold opacity-50">
        Made by{" "}
        <Link
          href={"https://rohan06.vercel.app/"}
          target="_blank"
          className=" underline"
        >
          Rohan 🚀
        </Link>
      </p>
    </div>
  );
};

export default Feedbacks;
