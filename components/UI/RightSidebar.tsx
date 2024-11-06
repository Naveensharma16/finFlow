// component used for right sidebar in home page
import React from "react";
import Image from "next/image";
import Link from "next/link";
import BankCard from "./BankCard";
import { RightSidebarProps } from "@/types";

function RightSidebar({ user, banks }: RightSidebarProps) {
  return (
    <>
      {/* showing user profile data like name,email and image */}
      <div className="profile">
        <div className="profile-bg" />
        <div className="profile-img">
          {user.img ? (
            <Image
              src={user.img}
              alt={user.firstName}
              width={50}
              height={50}
              className="rounded-full"
            />
          ) : (
            <span className="text-gray-600 font-bold text-4xl">
              {user.firstName[0].toUpperCase()}
            </span>
          )}
        </div>
        <div className="profile-desc">
          <h1 className="text-2xl text-gray-900 font-semibold">
            {user.firstName} {user.lastName}
          </h1>
          <p className="text-base text-gray-600">{user.email}</p>
        </div>
      </div>

      <div className="flex justify-between items-center p-3 mt-5">
        <p className="font-semibold text-gray-900 text-lg">My Banks</p>
        <Link href={"/"} className="text-sm text-gray-600 font-semibold">
          + Add bank
        </Link>
      </div>

      {/* showing bank cards if any and will show only 2 cards according to design */}
      {banks.length > 0 && (
        <div className="relative mt-5">
          <div className="relative z-10">
            <BankCard
              bankName={banks[0].bankName}
              cardNumber={banks[0].cardNumber}
              exp={banks[0].exp}
              userName={banks[0].userName}
              balance={banks[0].balance}
              showBalance={banks[0].showBalance}
              cardProvider={banks[0].cardProvider}
            />
          </div>
          {banks.length > 1 && (
            <div className="absolute top-9 right-2">
              <BankCard
                 bankName={banks[1].bankName}
                 cardNumber={banks[1].cardNumber}
                 exp={banks[1].exp}
                 userName={banks[1].userName}
                 balance={banks[1].balance}
                 showBalance={banks[1].showBalance}
                 cardProvider={banks[1].cardProvider}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default RightSidebar;
