import React from 'react'
import Layout from '../components/layout'
import Button from '../components/button'
import { useTranslate } from '../hooks/useTranslate'
import Container from '../components/container'
import injected from '../injected.json'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const { t } = useTranslate()
  return (
    <Layout>
      <div className='w-full bg-[image:url(/images/gallery3.jpg)] bg-cover bg-center bg-no-repeat relative h-[485px] items-center hidden md:flex'>
        <div className='text-white h-full w-full flex flex-col gap-4 items-center justify-center p-6 bg-black/70'>
          <div className='max-w-screen-xl mx-auto flex flex-col gap-4'>
            <Button message={t('header.appointment')} link={injected.rdv} />
            <div className='flex flex-row gap-10 justify-between items-center text-center'>
              <Link className='bg-white p-4 rounded-md' href={injected.socials[0].link}>
                <Image
                  loading='lazy'
                  width={25}
                  height={25}
                  className='cursor-pointer hover:scale-110 transform transition-transform duration-300'
                  src={`/icons/${injected.socials[0].title}.svg`}
                  alt={`Social ${injected.socials[0].title} - ${injected.socials[0].link}`}
                />
              </Link>
              <Link className='bg-white p-4 rounded-md' href={injected.socials[1].link}>
                <Image
                  loading='lazy'
                  width={25}
                  height={25}
                  className='cursor-pointer hover:scale-110 transform transition-transform duration-300'
                  src={`/icons/${injected.socials[1].title}.svg`}
                  alt={`Social ${injected.socials[1].title} - ${injected.socials[1].link}`}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='flex md:hidden relative overflow-hidden'>
        <div
          dangerouslySetInnerHTML={{
            __html: `<video autoplay loop muted playsinline>
      <source src="/images/hero.mp4" type="video/mp4" />
      Votre brower ne supporte pas la vidéo
</video>`,
          }}
        />
        <div className='absolute top-0 left-0 w-full h-full flex flex-col gap-4 items-center justify-center p-6 bg-black/40'>
          <Button message={t('header.appointment')} link={injected.rdv} />
          <div className='flex flex-row gap-10 justify-between items-center text-center'>
            <Link className='text-black bg-white p-4 rounded-md' href={injected.socials[0].link}>
              <Image
                loading='lazy'
                width={25}
                height={25}
                className='cursor-pointer hover:scale-110 transform transition-transform duration-300'
                src={`/icons/${injected.socials[0].title}.svg`}
                alt={`Social ${injected.socials[0].title} - ${injected.socials[0].link}`}
              />
            </Link>
            <Link className='text-black bg-white p-4 rounded-md' href={injected.socials[1].link}>
              <Image
                loading='lazy'
                width={25}
                height={25}
                className='cursor-pointer hover:scale-110 transform transition-transform duration-300'
                src={`/icons/${injected.socials[1].title}.svg`}
                alt={`Social ${injected.socials[1].title} - ${injected.socials[1].link}`}
              />
            </Link>
          </div>
        </div>
      </div>

      <Container id='#services'>
        <div className='text-white flex flex-col gap-4 justify-center items-center text-center'>
          <div className='text-2xl font-bold p-2 border-b-4 border-b-purp border-r-4 border-r-blu rounded-lg'>
            {t('home.services.title')}
          </div>
          <div className='text-base max-w-xl animate-fade-right animate-once animate-delay-200'>
            {t('home.services.description')}
          </div>
        </div>
        <div className='flex md:flex-row flex-col gap-6'>
          <Image
            className='rounded-md bg-purp p-2 animate-fade animate-once animate-delay-200'
            loading='lazy'
            width={300}
            height={300}
            src='/images/gallery12.jpg'
            alt='Image'
          />
          <Image
            className='rounded-md bg-blu p-2 animate-fade animate-once animate-delay-200'
            loading='lazy'
            width={300}
            height={300}
            src='/images/gallery13.jpg'
            alt='Image'
          />
        </div>
      </Container>

      <Container>
        <div className='bg-white p-6 rounded-lg max-w-xl flex flex-col gap-4 justify-center text-center flex-wrap text-black text-xl animate-fade-down animate-once animate-delay-200'>
          {t('home.description')}
        </div>
      </Container>

      <Container id='#team'>
        <div className='text-white flex flex-col justify-center text-center items-center gap-4'>
          <div className='text-2xl font-bold p-2 border-b-4 border-b-purp border-l-4 border-l-blu rounded-lg'>
            {t('home.team.title')}
          </div>
          <div className='text-base max-w-xl animate-fade-left animate-once animate-delay-200'>
            {t('home.team.description')}
          </div>
        </div>
        <div className='flex flex-row gap-4 justify-center items-center flex-wrap'>
          <div className='bg-white p-6 group items-center flex flex-col md:flex-row gap-4 hover:bg-transparent hover:transition-all hover:duration-300 duration-300'>
            <Image
              loading='lazy'
              width={300}
              height={300}
              className='rounded-md border-purp border-4'
              src='/images/isma.jpg'
              alt='Image'
            />
            <div className='flex flex-col gap-4 max-w-xs text-black group-hover:text-white transition-all duration-300 ease-in-out'>
              <p className='font-bold text-xl'>
                {t('team.ismael.name')} - <span className='text-purp'>{t('team.ismael.blaz')}</span>
              </p>
              <p className='animate-fade-down animate-once animate-delay-200'>
                {t('team.ismael.description')}
              </p>
            </div>
          </div>
          <div className='bg-white p-6 group items-center flex flex-col md:flex-row gap-4 hover:bg-transparent hover:transition-all hover:duration-300 duration-300'>
            <div className='flex flex-col gap-4 max-w-xs text-black group-hover:text-white transition-all duration-300 ease-in-out'>
              <p className='font-bold text-xl'>
                {t('team.wyatt.name')} - <span className='text-blu'>{t('team.wyatt.blaz')}</span>
              </p>
              <p className='animate-fade-up animate-once animate-delay-200'>
                {t('team.wyatt.description')}
              </p>
            </div>
            <Image
              loading='lazy'
              width={300}
              height={300}
              className='rounded-md border-blu border-4'
              src='/images/wyatt.jpg'
              alt='Image'
            />
          </div>
        </div>
      </Container>

      <Container id='#gallery'>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          <div className='grid gap-4'>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='/images/gallery1.jpg'
                alt='gallery image'
                loading='lazy'
                width={300}
                height={300}
              />
            </div>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='/images/gallery7.jpg'
                alt='gallery image'
                loading='lazy'
                width={300}
                height={300}
              />
            </div>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='/images/gallery5.jpg'
                alt='gallery image'
                loading='lazy'
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className='grid gap-4'>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='/images/gallery6.jpg'
                alt='gallery image'
                loading='lazy'
                width={300}
                height={300}
              />
            </div>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='/images/gallery4.jpg'
                alt='gallery image'
                loading='lazy'
                width={300}
                height={300}
              />
            </div>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='/images/gallery8.jpg'
                alt='gallery image'
                loading='lazy'
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className='grid gap-4'>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='/images/gallery11.jpg'
                alt='gallery image'
                loading='lazy'
                width={300}
                height={300}
              />
            </div>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='/images/gallery3.jpg'
                alt='gallery image'
                loading='lazy'
                width={300}
                height={300}
              />
            </div>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='/images/gallery10.jpg'
                alt='gallery image'
                loading='lazy'
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className='grid gap-4 md:hidden'>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='/images/gallery9.jpg'
                alt='gallery image'
                loading='lazy'
                width={300}
                height={300}
              />
            </div>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='/images/gallery12.jpg'
                alt='gallery image'
                loading='lazy'
                width={300}
                height={300}
              />
            </div>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='/images/gallery2.jpg'
                alt='gallery image'
                loading='lazy'
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </Container>

      <Container id='#contact'>
        <div className='flex flex-col md:flex-row'>
          <div className='bg-white p-5 md:p-10 flex flex-col gap-4 justify-center items-left text-xs md:text-base'>
            <div className='text-2xl font-bold text-black'>{t('home.contact.title')}</div>
            <div className='text-base text-black max-w-sm mb-2'>
              {t('home.contact.description')}
            </div>
            <div className='flex gap-2 text-center'>
              <Image
                loading='lazy'
                width={24}
                height={24}
                src='/icons/phone-primary.svg'
                alt='Icon tel'
              />
              <Link
                className='text-black hover:text-purp hover:translate-x-1 transition-transform ease-in-out duration-300'
                href={`tel:${injected.tel}`}
              >
                {injected.tel}
              </Link>
            </div>
            <div className='flex gap-2 text-center'>
              <Image
                loading='lazy'
                width={24}
                height={24}
                src='/icons/mail-primary.svg'
                alt='Icon mail'
              />
              <Link
                className='text-black hover:text-purp hover:translate-x-1 transition-transform ease-in-out duration-300'
                href={`mailto:${injected.email}`}
              >
                {injected.email}
              </Link>
            </div>
            <div className='flex gap-2 text-center'>
              <Image
                loading='lazy'
                width={24}
                height={24}
                src='/icons/location.svg'
                alt='Icon address'
              />
              <Link
                href={injected.address.url}
                className='text-black hover:text-purp hover:translate-x-1 transition-transform ease-in-out duration-300'
              >
                {injected.address.address}
              </Link>
            </div>
          </div>
          <div className='bg-blu p-5 md:p-10 flex flex-col gap-4 justify-center items-left'>
            <div className='flex flex-row gap-2'>
              <Image loading='lazy' width={24} height={24} src='/icons/time.svg' alt='Image' />
              <div className='text-2xl font-bold text-white'>{t('home.horaire.title')}</div>
            </div>
            <div className='text-white flex flex-row gap-2'>
              <h3>Lundi :</h3>
              <p>Fermé</p>
            </div>
            <div className='text-white flex flex-row gap-2 font-bold'>
              <h3>Mardi :</h3>
              <p>10h - 20h</p>
            </div>
            <div className='text-white flex flex-row gap-2 font-bold'>
              <h3>Mercredi :</h3>
              <p>10h - 20h</p>
            </div>
            <div className='text-white flex flex-row gap-2 font-bold'>
              <h3>Jeudi :</h3>
              <p>10h - 20h</p>
            </div>
            <div className='text-white flex flex-row gap-2 font-bold'>
              <h3>Vendredi :</h3>
              <p>10h - 20h</p>
            </div>
            <div className='text-white flex flex-row gap-2 font-bold'>
              <h3>Samedi :</h3>
              <p>10h - 15h</p>
            </div>
            <div className='text-white flex flex-row gap-2'>
              <h3>Dimanche :</h3>
              <p>Fermé</p>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
