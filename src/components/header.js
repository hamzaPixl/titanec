import React from 'react'
import Link from 'next/link'
import Button from './button'
import Burger from './burger'
import injected from '../injected.json'
import { useTranslate } from '../hooks/useTranslate'
import { useRouter } from 'next/router'
import { useLocale } from '../hooks/useLocale'

export default function Header({ navbarOpen, setNavbarOpen }) {
  const { t } = useTranslate()
  const { push } = useRouter()
  const { switchLocale, locale } = useLocale()

  const handleLocaleChange = (e) => {
    e.preventDefault()
    switchLocale(e.target.value)
  }

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white shadow-md'>
      <div className='max-w-screen-xl mx-auto px-4 py-3 md:px-6 md:py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo Text */}
          <Link href='/' className='flex-shrink-0'>
            <span className='text-2xl md:text-3xl font-bold text-primary-500'>
              {injected.companyName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-6'>
            {injected.pages.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                onClick={(e) => {
                  e.preventDefault()
                  setNavbarOpen(false)
                  push(item.link)
                }}
                className='text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200'
              >
                {t(item.title)}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className='hidden md:flex items-center gap-4'>
            <select
              className='bg-gray-100 text-gray-700 rounded-lg px-3 py-2 text-sm font-medium border-none focus:ring-2 focus:ring-secondary-500 cursor-pointer'
              onChange={handleLocaleChange}
              value={locale || injected.defaultLocale}
            >
              {injected.locales.map((loc, index) => (
                <option key={index} value={loc}>
                  {t(loc)}
                </option>
              ))}
            </select>
            <Button
              label={t('header.button')}
              link={injected.rdv}
              className='bg-primary-500 hover:bg-primary-600 text-white px-5 py-2 text-sm'
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-label='Menu'
          >
            <Burger navbarOpen={navbarOpen} />
          </button>
        </div>
      </div>
    </nav>
  )
}
