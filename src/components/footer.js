import React from 'react'
import injected from '../injected.json'
import Image from 'next/image'
import Link from 'next/link'
import Button from './button'
import { useTranslate } from '../hooks/useTranslate'
import { useRouter } from 'next/router'

export default function Footer() {
  const { t } = useTranslate()
  const { push } = useRouter()
  return (
    <footer className='bg-light-900  bg-hero-footer bg-center bg-cover text-white text-sm flex flex-col gap-20 rounded-t-3xl  p-5 md:p-10'>
      <div className='flex flex-col md:flex-row gap-10 md:gap-6 items-start justify-between text-start w-full'>
        <div className='flex flex-col gap-4 justify-start'>
          <Link href={'/'} className='w-32'>
            <Image width={200} height={150} src='/logo-footer.svg' alt={`Logo`} />
          </Link>
          <div className='max-w-xs font-normal'>{injected.description}</div>
        </div>

        <div className='flex flex-col gap-4'>
          <h3 className='text-2xl'>{t('footer.pages')}</h3>
          {injected.pages.map((item, index) => (
            <Link
              key={index}
              className='font-normal hover:border-b-primary-600 hover:border-b-2 duration-300 ease-in-out hover:transformation-all pb-1'
              href={item.link}
              onClick={(e) => {
                e.preventDefault()
                push(item.link)
              }}
            >
              {t(item.title)}
            </Link>
          ))}
        </div>

        <div className='flex flex-col gap-4'>
          <h3 className='text-2xl'>{t('footer.legal')}</h3>
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
          <div className='flex flex-col justify-between items-start gap-4 font-normal text-white'>
            <div className='flex gap-2 flex-col items-start'>
              <div className='font-bold'>{injected.description}</div>
              <div className='flex flex-row gap-2 items-center'>
                <Image
                  loading='lazy'
                  width={15}
                  height={15}
                  src={`/icons/phone-primary.svg`}
                  alt={`Tel icon`}
                />
                <Link
                  className='text-white hover:border-b-primary-600 hover:border-b-2 duration-300 ease-in-out hover:transformation-all pb-1'
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
                  src={`/icons/mail-primary.svg`}
                  alt={`Email icon`}
                />
                <Link
                  className='text-white hover:border-b-primary-600 hover:border-b-2 duration-300 ease-in-out hover:transformation-all pb-1'
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
                  alt={`location icon`}
                />
                <Link
                  href={injected.address.url}
                  className='text-white hover:border-b-primary-600 hover:border-b-2 duration-300 ease-in-out hover:transformation-all pb-1'
                >
                  {injected.address.address}
                </Link>
              </div>
              <div className='flex flex-row gap-2 items-center'>
                <div className='text-white font-bold bg-purp p-1'>TVA</div>
                <div>{injected.tva}</div>
              </div>
            </div>
          </div>

          <div className='flex flex-row gap-6 items-center'>
            {injected.socials.map((item, index) => (
              <Link key={index} className='text-white' href={item.url}>
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

      <div className='bg-white w-full h-[2px] rounded-3xl' />

      <div className='flex flex-col md:flex-row justify-between md:items-center gap-5'>
        <h3 className='text-3xl font-semibold md:max-w-sm'>{t('footer.slogan')}</h3>
        <Button
          label={t('footer.button')}
          link={injected.rdv}
          icon={'/icons/bell-white.svg'}
          className='bg-primary-600 text-white shadow-md w-fit hover:bg-primary-700'
        />
      </div>

      <div className='bg-white w-full h-[2px] rounded-3xl' />

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
        <div className='flex md:flex-row flex-col gap-2 md:items-center'>
          <div className='uppercase text-white/50 flex items-center gap-2'>
            {t('footer.greetings.dev')}{' '}
            <Link
              className='text-white hover:border-b-primary-600 hover:border-b-2 duration-300 ease-in-out hover:transformation-all pb-1'
              href={injected.author.url}
            >
              {injected.author.name}
            </Link>
          </div>
          <div className='uppercase text-white/50 flex items-center gap-2'>
            {t('footer.greetings.designer')}{' '}
            <Link
              className='text-white hover:border-b-primary-600 hover:border-b-2 duration-300 ease-in-out hover:transformation-all pb-1'
              href={injected.designer.url}
            >
              {injected.designer.name}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
