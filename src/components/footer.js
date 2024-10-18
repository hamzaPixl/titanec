import React from 'react'
import injected from '../injected.json'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslate } from '../hooks/useTranslate'
import Button from './button'

export default function Footer() {
  const { t } = useTranslate()

  return (
    <footer className='bg-black text-white text-sm'>
      <div className={`p-6 w-full max-w-screen-xl mx-auto`}>
        <div className='font-bold leading-normal w-full flex flex-col md:flex-row md:items-center justify-between gap-4'>
          <Link href={'/'} className='w-[182px] h-[56px] md:h-[70px] md:w-[228px] relative'>
            <Image loading='lazy' fill src='/logo.png' alt={`Logo`} />
          </Link>
          <Button message={t('header.appointment')} link={injected.rdv} />
        </div>
      </div>

      <div className='p-6 md:p-8 w-full max-w-screen-xl mx-auto flex flex-col gap-5'>
        <div className='flex flex-col justify-between items-start gap-4 font-normal text-white'>
          <div className='flex gap-2 flex-col items-start'>
            <div className='font-bold'>{injected.description}</div>
            <div className='flex flex-row gap-2 items-center'>
              <div className='text-white font-bold bg-blu p-1'>Tel</div>
              <Link
                className='text-white hover:text-purp hover:translate-x-1 transition-transform ease-in-out duration-300'
                href={`tel:${injected.tel}`}
              >
                {injected.tel}
              </Link>
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <div className='text-white font-bold bg-purp p-1'>Mail</div>
              <Link
                className='text-white hover:text-blu hover:translate-x-1 transition-transform ease-in-out duration-300'
                href={`mailto:${injected.email}`}
              >
                {injected.email}
              </Link>
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <div className='text-white font-bold bg-blu p-1'>Adresse</div>
              <Link
                href={injected.address.url}
                className='text-white hover:text-purp hover:translate-x-1 transition-transform ease-in-out duration-300'
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
            <Link key={index} className='text-white' href={item.link}>
              <Image
                loading='lazy'
                width={20}
                height={20}
                src={`/icons/${item.title}-white.svg`}
                alt={`Social ${item.title} - ${item.link}`}
              />
            </Link>
          ))}
        </div>

        <div className='flex flex-col gap-4 text-white text-sm'>
          <p>{t('footer.politic.1')}</p>
          <p>{t('footer.politic.2')}</p>
          <p>{t('footer.politic.3')}</p>
        </div>
      </div>

      <div className='bg-blu w-full'>
        <div className='p-3 mx-auto font-bold leading-normal max-w-screen-xl flex flex-row gap-4 justify-between items-center text-xs'>
          <div className='flex flex-row items-center gap-2'>
            {injected.sla.map((item, index) => (
              <Link
                key={index}
                className='font-normal hover:font-bold transition-all ease-in-out duration-300 hover:underline hover:underline-offset-8'
                href={item.link}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className='uppercase text-white/50 flex items-center gap-2'>
            Made with love by{' '}
            <Link className='text-white' href={injected.author.url}>
              {injected.author.name}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
