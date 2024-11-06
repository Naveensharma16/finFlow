// component created for sidebar menu

"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/images/logo.png";
import { sideBarMenu } from "@/constants/index";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathName = usePathname();

  return (
    <div className="bg-white p-4 h-screen">
      <Link href={"/"} className="flex items-center">
        <Image
          src={logo}
          alt={"logo"}
          width={50}
          height={50}
          className="px-3"
        />
        <span className="font-semibold text-lg text-blue-950 hidden lg:block">
          FinFlow
        </span>
      </Link>
      {/* menu list fetched from constants */}
      <ul className="mt-3">
        {sideBarMenu.map((item, index) => (
          <li key={index} className="py-1">
            <Link
              href={item.route}
              className={`group flex items-center gap-2 text-lg p-3 text-black-2 hover:text-white hover:bg-bankGradient rounded-md  ${
                pathName === item.route ? "bg-bankGradient text-white" : ""
              }`}
            >
              <Image
                src={item.imageurl}
                alt={item.label}
                width={20}
                height={20}
                className={`group-hover:brightness-[3] group-hover:invert-0 ${
                  pathName === item.route ? "brightness-[3] invert-0" : ""
                }`}
              />
              <span className="font-semibold text-base hidden lg:block">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
