import React from 'react'
import injected from '../injected.json'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslate } from '../hooks/useTranslate'

export default function Footer() {
  const { t } = useTranslate()
  return (
    <footer className='text-black text-sm flex flex-col gap-10 rounded-t-3xl  p-5 md:p-10'>
      <div className='flex flex-col md:flex-row gap-10 md:gap-6 items-start justify-between text-start w-full'>
        <div className='flex flex-col gap-4 justify-start'>
          <Link href={'/'} className='text-4xl'>
            <Image
              loading='lazy'
              width={200}
              height={200}
              src={`/titanec-logo.svg`}
              alt={`Logo ${injected.name}`}
            />
          </Link>
          <div className='max-w-xs font-normal'>{injected.description}</div>
        </div>

        <div className='flex flex-col gap-4'>
          <h3 className='text-2xl text-primary-500'>{t('footer.legal')}</h3>
          <Link
            className='font-normal hover:border-b-primary-600 hover:border-b-2 duration-300 ease-in-out hover:transformation-all pb-1'
            href='/policy/privacy'
          >
            {t('footer.policy')}
          </Link>
          <Link
            className='font-normal hover:border-b-primary-600 hover:border-b-2 duration-300 ease-in-out hover:transformation-all pb-1'
            href='/policy/cookies'
          >
            {t('footer.cookies')}
          </Link>
          <Link
            className='font-normal hover:border-b-primary-600 hover:border-b-2 duration-300 ease-in-out hover:transformation-all pb-1'
            href='/policy/terms'
          >
            {t('footer.terms')}
          </Link>
        </div>

        <div className='flex flex-col gap-5'>
          <div className='flex flex-col justify-between items-start gap-4 font-normal '>
            <h3 className='text-2xl text-primary-500'>{t('footer.informations')}</h3>
            <div className='flex gap-2 flex-col items-start'>
              <div className='flex flex-row gap-2 items-center'>
                <Image
                  loading='lazy'
                  width={15}
                  height={15}
                  src={`/icons/phone.svg`}
                  alt={`Tel icon`}
                />
                <Link
                  className=' hover:border-b-primary-600 hover:border-b-2 duration-300 ease-in-out hover:transformation-all pb-1'
                  href={`tel:${injected.tel}`}
                >
                  {injected.tel}
                </Link>
              </div>
              <div className='flex flex-row gap-2 items-center'>
                <Image
                  loading='lazy'
                  width={15}
                  height={15}
                  src={`/icons/mail.svg`}
                  alt={`Email icon`}
                />
                <Link
                  className=' hover:border-b-primary-600 hover:border-b-2 duration-300 ease-in-out hover:transformation-all pb-1'
                  href={`mailto:${injected.email}`}
                >
                  {injected.email}
                </Link>
              </div>
              <div className='flex flex-row gap-2 items-center'>
                <Image
                  loading='lazy'
                  width={15}
                  height={15}
                  src={`/icons/location.svg`}
                  alt={`Location icon`}
                />
                <Link
                  className=' hover:border-b-primary-600 hover:border-b-2 duration-300 ease-in-out hover:transformation-all pb-1'
                  href={injected.address.url}
                >
                  {injected.address.address}
                </Link>
              </div>
              <div className='flex flex-row gap-2 items-center'>
                <div className=' font-bold bg-purp p-1'>TVA</div>
                <div>{injected.tva}</div>
              </div>
            </div>
          </div>

          <div className='flex flex-row gap-6 items-center'>
            {injected.socials.map((item, index) => (
              <Link key={index} className='' href={item.url}>
                <Image
                  loading='lazy'
                  width={15}
                  height={15}
                  src={`/icons/${item.name}_white.svg`}
                  alt={`Social ${item.title} - ${item.link}`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className='bg-primary-600 w-full h-[2px] rounded-3xl' />

      <div className='font-bold leading-normal flex flex-col md:flex-row gap-4 justify-between md:items-center text-xs w-full'>
        <div className='flex flex-row items-center gap-2'>
          {injected.socials.map((item, index) => (
            <Link
              key={index}
              className='font-normal hover:font-bold transition-all ease-in-out duration-300 hover:underline hover:underline-offset-8'
              href={item.url}
            >
              <Image
                width={15}
                height={15}
                src={`/icons/${item.icon}_white.svg`}
                alt={`Social ${item.name}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
