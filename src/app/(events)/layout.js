'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {Kodchasan} from 'next/font/google';
import "./globals.css";
import Navbar from '../../components/navbar/page.js'
import Footer from '../../components/Footer'

const kodchasan = Kodchasan({
  subsets: ["latin"],
  weight: '700',
});

export default function RootLayout({ children }) {
  const path = usePathname();
  return (
    <html lang="en">
      <body>
        <Navbar />
        
        <main>
          <section className="min-h-screen flex flex-col justify-center items-center text-center relative">
            <div className={`text-xl font-bold text-white bg-gradient-to-r from-green-500 to-transparent px-6 py-2 my-2 rounded-full ${kodchasan.className}`}>
              HOME • EVENTS 
            </div>
            <h1 className="text-8xl">ADVITIYA &apos;24 EVENTS</h1>
            <Image src={'/assests/events/bg.png'} fill={true} className='absolute top-0 left-0 w-full h-full mainBG -z-10' alt='Background' />
          </section>
          <section className={`w-auto flex justify-evenly text-center mx-36 my-10 bg-gradient-to-r from-slate-600 px-10 py-4 rounded-full ${kodchasan.className}`}>
            <Link href={'/events/workshops'} className={`flex-1 ${path.indexOf('workshops') != -1 || path == '/events' ? 'text-green-500' : ''}`}>Workshops</Link>
            <Link href={'/events/talks'} className={`flex-1 ${path.indexOf('talks') != -1 ? 'text-green-500' : ''}`}>Talks</Link>
            <Link href={'/events/competitions'} className={`flex-1 ${path.indexOf('competitions') != -1 ? 'text-green-500' : ''}`}>Competitions</Link>
            <Link href={'/events/exhibitions'} className={`flex-1 ${path.indexOf('exhibitions') != -1 ? 'text-green-500' : ''}`}>Exhibitions</Link>
            <Link href={'/events/isc'} className={`flex-1 ${path.indexOf('isc') != -1 ? 'text-green-500' : ''}`}>ISC</Link>
          </section>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
