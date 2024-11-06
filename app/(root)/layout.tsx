import Sidebar from "@/components/UI/Sidebar"


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="flex">
        <div className="w-[9%] lg:w-[20%]">
        <Sidebar/>
        </div>
        <div className="w-[91%] lg:w-[80%]">
        {children}
        </div>
      </main>
    )
  }