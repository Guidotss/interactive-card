import { Providers } from '@/providers';
import './globals.css'
import localFont from '@next/font/local';


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const Lora = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins/Poppins-Regular.ttf",
      weight: "400"
    }
  ],
  variable: "--font-lora",
}); 




export default function RootLayout({children}: { children: React.ReactNode }) {


  return (
    <html lang="en">
      <body className={`${Lora.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
