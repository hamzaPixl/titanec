import React from 'react'
import Link from 'next/link'
import Button from './button'
import merge from '../lib/merge'
import Burger from './burger'
import injected from '../injected.json'
import { useTranslate } from '../hooks/useTranslate'
import { useRouter } from 'next/router'
import { useLocale } from '../hooks/useLocale'
import Image from 'next/image'

export default function Header({ navbarOpen, setNavbarOpen }) {
  const { t } = useTranslate()
  const { push } = useRouter()
  const { switchLocale } = useLocale()

  const handleLocaleChange = (e) => {
    e.preventDefault()
    switchLocale(e.target.value)
  }

  return (
    <nav
      className={merge(
        'z-50 sticky top-0 overflow-auto transition-all duration-300 ease-in-out text-light-900',
        'p-5 md:p-5 font-bold leading-normal flex flex-row items-center justify-between gap-2 bg-white shadow-lg',
      )}
    >
      <div className='hidden md:flex flex-row justify-center gap-6'>
        <Link href={'/'} className='text-4xl mb-2'>
          <Image
            loading='lazy'
            width={200}
            height={200}
            src={`/titanec-logo.svg`}
            alt={`Logo ${injected.name}`}
          />
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
        <Link href={'/'} className='text-2xl'>
          <Image
            loading='lazy'
            width={200}
            height={200}
            src={`/titanec-logo.svg`}
            alt={`Logo ${injected.name}`}
          />
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
      <div className='hidden md:flex flex-row items-center justify-between gap-2'>
        <select
          className='bg-light-200 text-light-900 rounded-full p-3 font-semibold'
          onChange={handleLocaleChange}
          defaultValue={injected.defaultLocale}
        >
          {injected.locales.map((locale, index) => (
            <option key={index} value={locale}>
              {t(locale)}
            </option>
          ))}
        </select>
        <Button
          label={t('header.button')}
          link={injected.rdv}
          className='bg-secondary-400 hover:text-white text-primary-900 shadow-md hidden md:flex w-fit hover:bg-primary-700'
        />
      </div>
    </nav>
  )
}
