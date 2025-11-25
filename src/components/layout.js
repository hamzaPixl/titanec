import React, { useState } from 'react'
import SEO from './seo'
import Footer from './footer'
import Header from './header'
import MenuOverlay from './menu/overlay'

export default function Layout({ children }) {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <>
      <main className='min-h-screen'>
        <SEO />
        <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        {navbarOpen && <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />}
        <div className='pt-16 md:pt-20'>
          <div className='max-w-screen-xl mx-auto px-4 md:px-6 flex flex-col gap-16 md:gap-20 py-8 md:py-12'>
            {children}
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
