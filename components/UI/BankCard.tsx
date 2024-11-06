import Image from "next/image";
import Link from "next/link";
import React from "react";
import paypass from "@/public/images/paypass.png";
import paymentmethod from "@/public/images/paymentmethod.png";
import { bandCardProps } from "@/types";

export default function BankCard({
  bankName,
  cardNumber,
  exp,
  userName,
  balance,
  showBalance,
  cardProvider,
}: bandCardProps) {
  return (
    <div className="flex">
      <Link href={"/"} className="bank-card">
        <div className="bg-card-bg h-full bg-no-repeat bg-center bg-contain">
          <div className="flex h-full">
            <div className="flex flex-col h-full justify-between w-[70%] p-2 rounded-tl-[20px] rounded-bl-[20px]">
              <p className="text-base text-white">Bank name</p>
              <div className="flex flex-wrap justify-between gap-1">
                <p className="text-[12px] text-white uppercase">
                  Naveen sharma
                </p>
                <p className="text-[12px] text-white">06/24</p>
                <p className="text-base text-white w-full">
                  1234 1234 1234 1234
                </p>
              </div>
            </div>
            <div className="flex flex-col w-[30%] h-full justify-between items-end p-5">
              <Image src={paypass} alt="" width={20} height={20} />
              <Image src={paymentmethod} alt="" width={40} height={40} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
