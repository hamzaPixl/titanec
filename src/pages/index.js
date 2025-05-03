import React, { useState } from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'
import Button from '../components/button'
import injected from '../injected.json'
import Hero from '../components/Hero'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslate } from '../hooks/useTranslate'
import CardService from '../components/CardService'
import services from '../services.json'
import Faq from '../components/faq'
import ContactForm from '../components/forms/contact'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const { t } = useTranslate()
  const [formSuccess, setFormSuccess] = useState()
  const [formError, setFormError] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()

    const myForm = event.target
    const formData = new FormData(myForm)
    fetch(`/${router.locale}${router.asPath}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setFormSuccess({ message: t('contact.form.success') })
        console.log(t('contact.form.success'))
      })
      .catch(() => {
        setFormError({ message: t('contact.form.error') })
        console.log(t('contact.form.error'))
      })
  }
  return (
    <Layout>
      <Hero title={t('home.title')} description={t('home.description')} />

      {/* about us */}
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

      {/* contact us */}
      <div className='animate-fade-down animate-twice animate-ease-in-out rounded-3xl  text-light-900 py-10 px-5 flex flex-col md:flex-row gap-6 w-full items-start justify-between'>
        <div className='flex flex-col gap-6 max-w-sm'>
          <h2 className='text-3xl font-semibold'>{t('home.contact.title')}</h2>
          <p className='font-normal'>{t('home.contact.description')} </p>
        </div>

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
      </div>

      {/* services */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 rounded-3xl  text-light-900 py-5 md:py-10 px-5'>
        <div className='flex flex-col gap-6 text-left p-5 bg-light-200 rounded-3xl'>
          <p className='text-3xl font-bold'>{t('services.title')}</p>
          <p className='text-lg font-normal max-w-lg'>{t('services.description')}</p>
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

      {/* contact */}
      <div className='flex flex-col md:flex-row gap-10 md:gap-4 w-full justify-between items-center text-light-900'>
        <div className='flex flex-col gap-2 text-center md:text-left w-full md:1/2'>
          <p className='text-3xl font-bold'>{t('contact.title')}</p>
          <p className='text-lg font-normal max-w-lg'>{t('contact.description')}</p>
        </div>
        <div className='bg-primary-600 text-light-900 p-10 rounded-3xl w-full md:1/2'>
          <ContactForm
            handleSubmit={handleSubmit}
            formSuccess={formSuccess}
            formError={formError}
          />
        </div>
      </div>
      <Faq />
      <Newsletter />
    </Layout>
  )
}
