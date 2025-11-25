import React from 'react'
import injected from '../injected.json'
import Link from 'next/link'
import { useTranslate } from '../hooks/useTranslate'

export default function Footer() {
  const { t } = useTranslate()
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-primary-500 rounded-t-3xl mt-20'>
      {/* Main Footer Content */}
      <div className='max-w-screen-xl mx-auto px-6 py-12 md:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8'>
          {/* Company Info */}
          <div className='lg:col-span-2'>
            <Link href={'/'} className='inline-block mb-6'>
              <span className='text-3xl font-bold text-white'>
                {injected.companyName}
              </span>
            </Link>
            <p className='text-gray-300 max-w-md mb-6 leading-relaxed'>
              {t('footer.description')}
            </p>
            <p className='text-secondary-400 font-semibold text-lg'>
              {t('footer.slogan')}
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className='text-lg font-bold text-white mb-6'>{t('footer.legal')}</h3>
            <ul className='space-y-3'>
              <li>
                <Link
                  className='text-gray-300 hover:text-white transition-colors duration-200'
                  href='/policy/privacy'
                >
                  {t('footer.policy')}
                </Link>
              </li>
              <li>
                <Link
                  className='text-gray-300 hover:text-white transition-colors duration-200'
                  href='/policy/cookies'
                >
                  {t('footer.cookies')}
                </Link>
              </li>
              <li>
                <Link
                  className='text-gray-300 hover:text-white transition-colors duration-200'
                  href='/policy/terms'
                >
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-bold text-white mb-6'>{t('footer.informations')}</h3>
            <ul className='space-y-4'>
              <li>
                <Link
                  href={`tel:${injected.tel}`}
                  className='flex items-center gap-3 text-white hover:text-secondary-400 transition-colors duration-200'
                >
                  <svg className='w-5 h-5 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                  </svg>
                  <span className='text-white'>{injected.tel}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${injected.email}`}
                  className='flex items-center gap-3 text-white hover:text-secondary-400 transition-colors duration-200'
                >
                  <svg className='w-5 h-5 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                  <span className='text-white'>{injected.email}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={injected.address.url}
                  target='_blank'
                  className='flex items-start gap-3 text-white hover:text-secondary-400 transition-colors duration-200'
                >
                  <svg className='w-5 h-5 flex-shrink-0 mt-0.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                  </svg>
                  <span className='text-white text-sm'>{injected.address.address}</span>
                </Link>
              </li>
              <li className='flex items-center gap-3'>
                <span className='bg-secondary-500 text-white px-2 py-1 rounded text-xs font-bold'>TVA</span>
                <span className='text-white text-sm'>{injected.tva}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-700'>
        <div className='max-w-screen-xl mx-auto px-6 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-400 text-sm'>
              &copy; {currentYear} {injected.companyName}. Tous droits réservés.
            </p>

            {/* Social Links */}
            <div className='flex items-center gap-4'>
              {injected.socials && injected.socials.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  target='_blank'
                  className='w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-secondary-500 hover:text-white transition-all duration-200'
                  aria-label={item.name}
                >
                  {item.name === 'linkedin' && (
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                    </svg>
                  )}
                  {item.name === 'facebook' && (
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/>
                    </svg>
                  )}
                </Link>
              ))}
            </div>

            {/* Author Credit */}
            <p className='text-gray-500 text-xs'>
              {t('footer.greetings.dev')}{' '}
              <Link href={injected.author.url} target='_blank' className='text-secondary-400 hover:text-secondary-300'>
                {injected.author.name}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
