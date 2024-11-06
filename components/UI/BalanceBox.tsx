import { BalanceBoxProps } from '@/types'
import { formatCurrency } from '@/utils/utils'
import Link from 'next/link'
import React from 'react'
import DoughnutChart from './DoughnutChart'

export default function BalanceBox({bankAccounts,accountCounts,totalAccountBalance}:BalanceBoxProps) {
  return (
    <div className="p-4">
       <div className='p-4 border border-gray-300 rounded-md flex justify-between gap-2 items-center'>
            
            <div className="basis-1/4">
            <DoughnutChart/>
            </div>
            
            <div className="basis-1/2">
                <p className='text-base text-gray-900 font-semibold'>{accountCounts} Bank Accounts</p>
                <p className='text-sm text-gray-600 mt-8'>Total Current balance</p>
                {/* TODO: adding counter for number check countUp npm and similar to that */}
                <p className='text-3xl font-semibold text-gray-900 mt-2'>${formatCurrency(totalAccountBalance)}</p>
            </div>
            <div className="basis-1/4 self-start text-right">
               <Link href={'/'} className='text-bankGradient text-sm font-semibold'>+ Add Bank</Link>
            </div>
    </div>
    </div>

   
  )
}
