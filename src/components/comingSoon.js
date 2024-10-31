import Image from 'next/image'
import Link from 'next/link'
import { useTranslate } from '../hooks/useTranslate'
import injected from '../injected.json'

export function ComingSoon() {
  const { t } = useTranslate()
  return (
    <div className='p-5 md:p-10 flex flex-col gap-16 justify-center items-center text-xs md:text-base text-secondary-950'>
      <Image className='' loading='lazy' width={500} height={500} src='/logo.svg' alt='Logo' />
      <div className='mt-10 text-white text-3xl font-bold bg-secondary-950 rounded-md p-4 shadow-md flex flex-row gap-2'>
        <p>{t('home.comingSoon.title')}</p>
        <p className='text-primary-600'>{t('home.comingSoon.span')}</p>
      </div>
      <p className='text-xl font-bold text-secondary-950 max-w-lg text-center'>
        {t('home.comingSoon.description')}
      </p>
      <div className='flex flex-col gap-4 items-center text-sm font-bold'>
        <div className='flex flex-col items-center gap-2 text-center'>
          <Image
            loading='lazy'
            width={24}
            height={24}
            src='/icons/phone-primary.svg'
            alt='Icon tel'
          />
          <Link
            className='hover:text-primary-600 hover:translate-y-1 transition-transform ease-in-out duration-300'
            href={`tel:${injected.tel}`}
          >
            {injected.tel}
          </Link>
        </div>
        <div className='flex flex-col items-center gap-2 text-center'>
          <Image
            loading='lazy'
            width={24}
            height={24}
            src='/icons/location.svg'
            alt='Icon address'
          />
          <Link
            href={injected.address.url}
            className='hover:text-primary-600 hover:translate-y-1 transition-transform ease-in-out duration-300 max-w-sm'
          >
            {injected.address.address}
          </Link>
        </div>
        <div className='flex flex-col items-center gap-2 text-center'>
          <Image
            loading='lazy'
            width={24}
            height={24}
            src='/icons/mail-primary.svg'
            alt='Icon mail'
          />
          <Link
            className='hover:text-primary-600 hover:translate-y-1 transition-transform ease-in-out duration-300'
            href={`mailto:${injected.email}`}
          >
            {injected.email}
          </Link>
        </div>
      </div>
      <Image
        className='hover:animate-spin hover:animate-once hover:animate-ease-in hover:animate-alternate'
        loading='lazy'
        width={50}
        height={50}
        src='/iconic.svg'
        alt='Iconic'
      />
    </div>
  )
}
