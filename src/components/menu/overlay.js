import React from 'react'
import injected from '../../injected.json'
import Link from 'next/link'
import { useTranslate } from '../../hooks/useTranslate'
import { useRouter } from 'next/navigation'
import Button from '../button'
import { useLocale } from '../../hooks/useLocale'

export default function MenuOverlay({ navbarOpen, setNavbarOpen }) {
  const { t } = useTranslate()
  const { push } = useRouter()
  const { switchLocale, locale } = useLocale()

  const handleLocaleChange = (e) => {
    e.preventDefault()
    switchLocale(e.target.value)
  }

  return (
    <nav
      className={`fixed inset-0 top-[56px] z-40 bg-white transform transition-all duration-300 ease-in-out ${
        navbarOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
    >
      <div className='flex flex-col h-full'>
        <div className='flex-1 flex flex-col items-center justify-center gap-6 p-8'>
          {injected.pages.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              onClick={(e) => {
                e.preventDefault()
                setNavbarOpen(false)
                push(item.link)
              }}
              className='text-xl font-semibold text-gray-800 hover:text-primary-500 transition-colors duration-200'
            >
              {t(item.title)}
            </Link>
          ))}

          <div className='mt-6 flex flex-col items-center gap-4'>
            <select
              className='bg-gray-100 text-gray-700 rounded-lg px-6 py-3 font-medium border-none focus:ring-2 focus:ring-secondary-500'
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
              className='bg-primary-500 hover:bg-primary-600 text-white px-8 py-3'
              onClick={() => setNavbarOpen(false)}
            />
          </div>
        </div>

        {/* Contact info at bottom */}
        <div className='p-6 bg-gray-50 border-t border-gray-200'>
          <div className='flex flex-col items-center gap-3 text-sm text-gray-600'>
            <Link href={`tel:${injected.tel}`} className='hover:text-primary-500 transition-colors'>
              {injected.tel}
            </Link>
            <Link href={`mailto:${injected.email}`} className='hover:text-primary-500 transition-colors'>
              {injected.email}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
