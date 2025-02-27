import React, { useState } from 'react'
import Layout from '../components/layout'
import ContactForm from '../components/forms/contact'
import { useTranslate } from '../hooks/useTranslate'
import Newsletter from '../components/newsletter'
import injected from '../injected.json'
import Faq from '../components/faq'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
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
      <div className='flex flex-col md:flex-row gap-10 md:gap-4 w-full justify-between items-center text-light-900'>
        <div className='flex flex-col gap-2 text-center md:text-left w-full md:1/2'>
          <p className='text-3xl font-bold'>{t('contact.title')}</p>
          <p className='text-lg font-normal max-w-lg'>{t('contact.description')}</p>
        </div>
        <div className='bg-light-200 text-light-900 p-10 rounded-3xl w-full md:1/2'>
          <ContactForm
            handleSubmit={handleSubmit}
            formSuccess={formSuccess}
            formError={formError}
          />
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-3'>
        <Image
          src='/images/center.jpeg'
          width={450}
          height={100}
          alt='Center'
          className='rounded-3xl w-full md:w-1/2 md:h-96'
        />
        <div className='rounded-3xl bg-light-200 text-light-900 py-10 px-5 flex flex-col gap-4 w-full md:1/2'>
          <h2 className='text-xl font-semibold'>{injected.companyName}</h2>
          <p>{injected.address.address}</p>
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
            <p>{t('center.mapLink')}</p>
            <Image src='/icons/arrow_forward.svg' width={15} height={15} alt='Google maps' />
          </Link>
          <div className='flex flex-col gap-4'>
            <Link
              className='flex flex-row gap-4 font-semibold items-center hover:text-light-600  hover:translate-x-1 transition-transform ease-in-out duration-300'
              href={`mailto:${injected.email}`}
            >
              <Image src='/icons/mail.svg' width={20} height={20} alt='Mail' />
              <p>{injected.email}</p>
            </Link>
            <Link
              className='flex flex-row gap-4 font-semibold items-center hover:text-light-600  hover:translate-x-1 transition-transform ease-in-out duration-300'
              href={`tel:${injected.tel}`}
            >
              <Image src='/icons/phone.svg' width={20} height={20} alt='phone' />
              <p>{injected.tel}</p>
            </Link>
          </div>
        </div>
      </div>

      <Faq />
      <Newsletter />
    </Layout>
  )
}
