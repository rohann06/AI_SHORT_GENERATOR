"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import PageHeader from "./PageHeader";

const DashNav = () => {
  const { user } = useUser();
  const path = usePathname();
  return (
    <div className=" flex items-center justify-between py-[20px]">
      <PageHeader />
      <div className=" flex items-center gap-x-2 justify-end">
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  width: "2rem",
                  height: "2rem",
                },
              },
            }}
          />
          <p className=" text-sm font-semibold lg:block hidden">
            {user?.fullName}
          </p>
        </SignedIn>
      </div>
    </div>
  );
};

export default DashNav;
