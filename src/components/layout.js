import React, { useState } from 'react'
import SEO from './seo'
import Footer from './footer'
import Header from './header'
import MenuOverlay from './menu/overlay'

export default function Layout({ children }) {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <>
      <main>
        <SEO />
        <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        {navbarOpen && <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />}
        <div className='max-w-screen-xl mx-auto px-3 flex flex-col gap-20 my-10'>{children}</div>
        <Footer />
      </main>
    </>
  )
}
