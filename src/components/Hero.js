import { useTranslate } from '../hooks/useTranslate'
import merge from '../lib/merge'
import injected from '../injected.json'
import Button from './button'
import Link from 'next/link'

export default function Hero({ title, description, className }) {
  const { t } = useTranslate()

  return (
    <div
      className={merge(
        'relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700',
        className,
      )}
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-0 left-0 w-72 h-72 bg-secondary-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute bottom-0 right-0 w-72 h-72 bg-secondary-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 flex flex-col gap-6 justify-center items-center text-center py-16 md:py-24 px-6 md:px-12'>
        <span className='text-secondary-400 font-semibold text-sm uppercase tracking-widest'>
          {t('home.subtitle')}
        </span>

        <h1 className='text-2xl md:text-4xl font-bold text-white max-w-3xl leading-tight'>
          {title}
        </h1>

        <p className='text-base md:text-lg text-gray-300 max-w-2xl'>
          {description}
        </p>

        <div className='flex flex-col sm:flex-row gap-4 mt-4'>
          <Button
            label={t('header.button')}
            link={injected.rdv}
            className='bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-6 py-3'
          />
          <Link
            href={`tel:${injected.tel}`}
            className='flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 rounded-full px-6 py-3 font-medium hover:bg-white/20 transition-all duration-200'
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
            </svg>
            {injected.tel}
          </Link>
        </div>

        {/* Stats */}
        <div className='flex flex-wrap justify-center gap-8 md:gap-12 mt-8 pt-8 border-t border-white/10 w-full'>
          <div className='text-center'>
            <p className='text-2xl md:text-3xl font-bold text-secondary-400'>
              {new Date().getFullYear() - injected.foundedYear}+
            </p>
            <p className='text-gray-400 text-sm'>Années d&apos;expérience</p>
          </div>
          <div className='text-center'>
            <p className='text-2xl md:text-3xl font-bold text-secondary-400'>
              {injected.clients?.length || 5}+
            </p>
            <p className='text-gray-400 text-sm'>Clients partenaires</p>
          </div>
          <div className='text-center'>
            <p className='text-2xl md:text-3xl font-bold text-secondary-400'>24/7</p>
            <p className='text-gray-400 text-sm'>Dépannage urgent</p>
          </div>
        </div>
      </div>
    </div>
  )
}
