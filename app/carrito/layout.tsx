import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Carrito',
  description: 'Carrito',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  return (
    <div>
        {children}
    </div>
  )
}