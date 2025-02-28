import React from 'react'
import injected from '../../injected.json'
import Link from 'next/link'
import { useTranslate } from '../../hooks/useTranslate'
import { useRouter } from 'next/navigation'
import Button from '../button'

export default function MenuOverlay({ navbarOpen, setNavbarOpen }) {
  const { t } = useTranslate()
  const { push } = useRouter()
  return (
    <nav
      className={`sticky top-16 overflow-auto flex w-full h-fit z-50 justify-center bg-white shadow-lg text-light-900 bg-opacity-100 transform delay-100 transition-all duration-300 ${
        navbarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
      }`}
    >
      <div className='max-w-screen-xl 2xl:max-w-screen-2xl mx-auto text-lg md:text-3xl flex flex-col gap-2 items-center p-10'>
        {injected.pages.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            onClick={(e) => {
              e.preventDefault()
              setNavbarOpen(false)
              push(item.link)
            }}
          >
            <span className='hover:underline hover:underline-offset-8 transition-all duration-300 ease-in-out hover:text-primary-600'>
              {t(item.title)}
            </span>
          </Link>
        ))}
        <Button
          label={t('header.button')}
          link={injected.rdv}
          icon={'/icons/bell-white.svg'}
          className='bg-primary-600 text-white shadow-md w-fit hover:bg-primary-700'
        />
      </div>
    </nav>
  )
}
