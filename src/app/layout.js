

import  StartAppoloServer from './apolloclient/apolloclient'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StartAppoloServer>
          {children}
        </StartAppoloServer>
      </body>
    </html>
  )
}
