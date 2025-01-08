import React from 'react'
import Dashboard from './page';
import Navbar from "@/app/(components)/Navbar";

type Props = {}

const DashboardWrapper = ({children }: { children: React.ReactNode}) => {
  return (
    <div className= {` light flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
        Sidebar
        <main className= {`flex flex-col w-full h-full py-7 px-9 bg-grap-50 md:pl-20 `}>
        <Navbar />
        {children}
        </main>
    </div>
  )
}

export default DashboardWrapper