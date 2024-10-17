

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main>
        sidebar
        {children}
      </main>
    )
  }