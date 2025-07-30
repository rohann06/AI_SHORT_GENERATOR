import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";
import { GiVibratingShield } from "react-icons/gi";
import { RiCopperCoinFill } from "react-icons/ri";

const DashNav = () => {
  return (
    <div className=" lg:px-10 flex items-center gap-x-5 justify-end py-[20px]">
      <p className="flex items-center text-xl font-medium">
        <RiCopperCoinFill className=" text-2xl text-orange-400 hover:animate-caret-blink" />
        30
      </p>
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: {
                width: "2.1rem",
                height: "2.1rem",
              },
            },
          }}
        />
      </SignedIn>
    </div>
  );
};

export default DashNav;
