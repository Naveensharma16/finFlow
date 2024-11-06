import BalanceBox from "@/components/UI/BalanceBox";
import Header from "@/components/UI/Header";
import RightSidebar from "@/components/UI/RightSidebar";
import Link from "next/link";
import React from "react";

export default function Home() {

  const user = {firstName:"Naveen", lastName:"Sharma", email:"naveen@gmail.com" }
  return (
    <>
      <section className="flex bg-white">
        <div className="w-[70%]">
          <Header
            type="greeting"
            title="Welcome"
            user="Guest"
            subTitle="Access & manage your account and transactions efficiently."
          />
          <BalanceBox bankAccounts={[]} accountCounts={2} totalAccountBalance={1235}/>
        </div>
        <div className="w-[30%]">
          <RightSidebar
           user={user}
          // TODO:  data here will be dynamic for banks details.
          // most probably we will create a custom array of object of first 2 account
            banks={[
              {bankName:"HDFC",
                cardNumber:"1234 1234 1234 1234",
                exp:"06/24",
                userName:"Naveen Sharma",
                balance:1234,
                showBalance:true,
                cardProvider:"visa"
              },
              {bankName:"HDFC",
                cardNumber:"1234 1234 1234 1234",
                exp:"06/24",
                userName:"Naveen Sharma",
                balance:1234,
                showBalance:true,
                cardProvider:"visa"
              },]}/>
        </div>
      </section>
    </>
  );
}
