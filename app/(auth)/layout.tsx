import Image from "next/image";
import React from "react";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="hidden md:block w-[50%] h-screen relative">
        <Image
          src={"/login.jpg"}
          alt="AI video creation"
          height={400}
          width={400}
          className="h-full w-full object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 flex items-center justify-center p-8" />
        <div className=" absolute inset-2 flex items-center justify-center w-full">
          <div className="text-white">
            <h2 className="text-6xl font-bold mb-4">
              Create Stunning AI Shorts
            </h2>
            <p className="text-lg mb-6">
              Transform your ideas into viral short videos with the power of
              artificial intelligence.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[50%] h-screen flex items-center justify-center p-4">
        {children}
      </div>
    </div>
  );
};

export default LoginLayout;
