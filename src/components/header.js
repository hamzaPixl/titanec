import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './button'
import merge from '../lib/merge'
import Burger from './burger'
import injected from '../injected.json'
import { useTranslate } from '../hooks/useTranslate'
import { useRouter } from 'next/router'

export default function Header({ navbarOpen, setNavbarOpen }) {
  const { t } = useTranslate()
  const { push } = useRouter()
  return (
    <nav
      className={merge(
        'z-50 sticky top-0 overflow-auto transition-all duration-300 ease-in-out text-light-900',
        'p-5 md:p-8 font-bold leading-normal flex flex-row items-center justify-between gap-2 bg-white shadow-lg',
      )}
    >
      <div className='hidden md:flex flex-row justify-center gap-6'>
        <Link href={'/'} className='w-44 mb-2'>
          <Image width={200} height={150} src='/logo.svg' alt={`Logo`} />
        </Link>
        <div className='flex flex-row items-center'>
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
              <p className='flex flex-col px-4 group items-center font-medium'>
                {t(item.title)}
                <span className='opacity-0 rounded-full bg-primary-600 p-1 group-hover:opacity-100 transition-all duration-300 ease-in-out w-1'></span>
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className='flex flex-row items-center justify-between w-full md:hidden'>
        <Link href={'/'} className='w-36'>
          <Image width={200} height={150} src='/logo.svg' alt={`Logo`} />
        </Link>
        <button
          href={'/'}
          className='relative p-5 cursor-pointer'
          onClick={(e) => {
            e.preventDefault()
            setNavbarOpen(!navbarOpen)
          }}
        >
          <Burger navbarOpen={navbarOpen} />
        </button>
      </div>
      <Button
        label={t('header.button')}
        link={injected.rdv}
        className='bg-primary-600 text-white shadow-md w-fit hover:bg-primary-700 hidden md:flex'
        icon={'/icons/bell-white.svg'}
      />
    </nav>
  )
}
