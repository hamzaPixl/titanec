import React from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'
import Button from '../components/button'
import CardDoctor from '../components/CardDoctor'
import CardWhyUs from '../components/CardWhyUs'
import injected from '../injected.json'
import Hero from '../components/Hero'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslate } from '../hooks/useTranslate'
import CardService from '../components/CardService'
import services from '../services.json'
import doctors from '../doctors.json'

export default function Home() {
  const { t } = useTranslate()
  return (
    <Layout>
      <Hero title={t('home.title')} description={t('home.description')} />
      {/* about us */}
      <div className='flex flex-col md:flex-row gap-4 items-center text-light-900'>
        <div className='flex flex-col gap-6 text-left bg-light-200 p-10 rounded-3xl'>
          <span className='text-xs font-semibold text-primary-600'>{t('home.about.span')}</span>
          <p className='text-3xl font-bold'>{t('home.about.title')}</p>
          <p className='text-lg font-normal max-w-lg'>{t('home.about.description')}</p>
          <Button
            label={t('home.about.button')}
            link={injected.rdv}
            icon={'/icons/bell-white.svg'}
            className='shadow-md w-fit'
          />
        </div>
        <Image
          src='/images/center.jpeg'
          width={450}
          height={100}
          alt='About'
          className='rounded-3xl w-full md:h-[420px]'
        />
      </div>

      {/* contact us */}
      <div className='animate-fade-down animate-twice animate-ease-in-out rounded-3xl bg-light-200 text-light-900 py-10 px-5 flex flex-col md:flex-row gap-6 w-full items-start'>
        <div className='flex flex-col gap-6 max-w-sm'>
          <h2 className='text-3xl font-semibold'>{t('home.contact.title')}</h2>
          <p className='font-normal'>{t('home.contact.description')} </p>
        </div>

        <div className='flex flex-col justify-start gap-3 max-w-sm h-full'>
          <div className='bg-light-900 rounded-full p-3 max-w-fit'>
            <Image src='/icons/map-primary.svg' width={25} height={25} alt='center icon' />
          </div>
          <p className='font-semibold text-primary-600'>{t('home.contact.visit')}</p>
          <p className='font-normal'>{injected.address.address}</p>
          <Link
            href={injected.address.url}
            className='flex flex-row gap-2 items-center hover:font-semibold hover:translate-x-1 transition-transform ease-in-out duration-300'
          >
            <Image src='/metro.svg' width={25} height={25} alt='metro' />
            <p>{t('home.contact.metro')}</p>
          </Link>
          <Link
            className='flex flex-row gap-2 items-center text-light-600 font-semibold  hover:translate-x-1 transition-transform ease-in-out duration-300'
            href={injected.address.url}
          >
            <p>{t('home.contact.map')}</p>
            <Image src='/icons/arrow_forward.svg' width={15} height={15} alt='Google maps' />
          </Link>
        </div>

        <div className='flex flex-col justify-start gap-5 max-w-sm h-full'>
          <div className='flex flex-col md:flex-row justify-start gap-10 max-w-sm h-full'>
            <div className='flex flex-col justify-start gap-3 max-w-sm h-full'>
              <div className='bg-light-900 rounded-full p-3 max-w-fit'>
                <Image src='/icons/phone-primary.svg' width={20} height={20} alt='phone' />
              </div>
              <p className='font-semibold text-primary-600'>{t('home.contact.phone')}</p>
              <Link
                className='font-semibold flex flex-row gap-4 items-center text-light-600  hover:translate-x-1 transition-transform ease-in-out duration-300'
                href={`tel:${injected.tel}`}
              >
                <p>{injected.tel}</p>
              </Link>
            </div>

            <div className='flex flex-col justify-start gap-3 max-w-sm h-full'>
              <div className='bg-light-900 rounded-full p-3 max-w-fit'>
                <Image src='/icons/mail-primary.svg' width={20} height={20} alt='mail' />
              </div>
              <p className='font-semibold text-primary-600'>{t('home.contact.email')}</p>
              <Link
                className='font-semibold flex flex-row gap-4 items-center text-light-600  hover:translate-x-1 transition-transform ease-in-out duration-300'
                href={`mailto:${injected.email}`}
              >
                <p>{injected.email}</p>
              </Link>
            </div>
          </div>
          <div className='flex flex-col gap-4 justify-start pt-5 border-t-2 border-light-900 font-normal'>
            <div className='bg-light-900 rounded-full p-3 max-w-fit'>
              <Image src='/icons/time.svg' width={20} height={20} alt='time' />
            </div>
            <p className='font-semibold text-primary-600'>{t('home.contact.opening')}</p>
            <div className='flex flex-row gap-2 items-center'>
              <p className='font-bold'>{t('home.contact.opening.span.week')}</p>
              <p>{t('home.contact.opening.week')}</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <p className='font-bold'>{t('home.contact.opening.span.weekEnd')}</p>
              <p>{t('home.contact.opening.weekEnd')}</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <p className='font-bold'>{t('home.contact.opening.span.weekEnd2')}</p>
              <p>{t('home.contact.opening.weekEnd2')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* values */}
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-5'>
          <div className='flex flex-col gap-1 text-left'>
            <span className='text-xs text-primary-600 font-semibold'>{t('home.values.span')}</span>
            <h2 className='text-4xl text-light-900 font-semibold'>{t('home.values.title')}</h2>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <CardWhyUs title={t('home.value1.title')} description={t('home.value1.description')} />
          <CardWhyUs title={t('home.value2.title')} description={t('home.value2.description')} />
          <CardWhyUs title={t('home.value3.title')} description={t('home.value3.description')} />
        </div>
      </div>

      {/* services */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 rounded-3xl bg-light-200 text-light-900 py-5 md:py-10 px-5'>
        <div className='flex flex-col gap-6 text-left p-5'>
          <p className='text-3xl font-bold'>{t('services.title')}</p>
          <p className='text-lg font-normal max-w-lg'>{t('services.description')}</p>
          <Button
            label={t('services.button')}
            link='/services'
            icon={'/icons/bell-white.svg'}
            className='shadow-md w-fit'
          />
        </div>
        {services.map((service, index) => (
          <CardService
            key={index}
            link={service.link}
            image={service.icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </div>

      {/* team */}
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-5'>
          <div className='flex flex-col gap-1 text-left'>
            <span className='text-xs text-primary-600 font-semibold'>{t('home.team.span')}</span>
            <h2 className='text-2xl text-light-900 font-semibold'>{t('home.team.title')}</h2>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {doctors.map((doctor, index) => (
            <CardDoctor
              key={index}
              role={doctor.role}
              link={`/doctors/${doctor.id}`}
              image={doctor.image}
              title={doctor.title}
              socials={doctor.socials}
              serviceIcon={doctor.services[0].icon}
            />
          ))}
        </div>
      </div>

      <Newsletter />
    </Layout>
  )
}
