import React, { useState } from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'
import Button from '../components/button'
import injected from '../injected.json'
import Hero from '../components/Hero'
import Link from 'next/link'
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
      })
      .catch(() => {
        setFormError({ message: t('contact.form.error') })
      })
  }

  const electricServices = services.filter(s => s.category === 'electric')
  const infraServices = services.filter(s => s.category === 'infra')
  const supportServices = services.filter(s => s.category === 'support')

  return (
    <Layout>
      <Hero title={t('home.title')} description={t('home.description')} />

      {/* About Us Section */}
      <section id="about" className='flex flex-col lg:flex-row gap-12 items-center'>
        <div className='flex flex-col gap-5 lg:w-1/2'>
          <span className='text-sm font-semibold text-secondary-500 uppercase tracking-wider'>
            {t('home.about.span')}
          </span>
          <h2 className='text-2xl md:text-3xl font-bold text-primary-500'>
            {t('home.about.title')}
          </h2>
          <p className='text-gray-600 leading-relaxed'>
            {t('home.about.description')}
          </p>
          <Button
            label={t('home.about.button')}
            link={injected.rdv}
            className='bg-primary-500 hover:bg-primary-600 text-white w-fit'
          />
        </div>
        <div className='lg:w-1/2'>
          <div className='relative'>
            <div className='absolute -top-4 -left-4 w-20 h-20 bg-secondary-500 rounded-xl opacity-20'></div>
            <img
              src='/images/about_us.png'
              className='rounded-2xl shadow-xl w-full object-cover'
              alt='Équipe Titanec'
            />
            <div className='absolute -bottom-4 -right-4 w-24 h-24 bg-primary-500 rounded-xl opacity-10'></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className='text-center mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold text-primary-500 mb-4'>
            {t('services.title')}
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            {t('services.description')}
          </p>
        </div>

        {/* Electric Services */}
        <div className='mb-10'>
          <h3 className='text-lg font-semibold text-secondary-500 mb-6 flex items-center gap-3'>
            <span className='w-8 h-1 bg-secondary-500 rounded'></span>
            {t('services.subtitle.electric')}
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {electricServices.map((service, index) => (
              <CardService
                key={index}
                title={t(service.title)}
                description={t(service.description)}
              />
            ))}
          </div>
        </div>

        {/* Infrastructure Services */}
        <div className='mb-10'>
          <h3 className='text-lg font-semibold text-secondary-500 mb-6 flex items-center gap-3'>
            <span className='w-8 h-1 bg-secondary-500 rounded'></span>
            {t('services.subtitle.infra')}
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {infraServices.map((service, index) => (
              <CardService
                key={index}
                title={t(service.title)}
                description={t(service.description)}
              />
            ))}
          </div>
        </div>

        {/* Support Services */}
        <div>
          <h3 className='text-lg font-semibold text-secondary-500 mb-6 flex items-center gap-3'>
            <span className='w-8 h-1 bg-secondary-500 rounded'></span>
            {t('services.subtitle.support')}
          </h3>
          <div className='grid grid-cols-1 gap-6'>
            {supportServices.map((service, index) => (
              <CardService
                key={index}
                title={t(service.title)}
                description={t(service.description)}
                variant="highlight"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers">
        <div className='bg-gradient-to-r from-secondary-600 to-secondary-500 rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row gap-8 items-center'>
          <div className='lg:w-2/3'>
            <h2 className='text-2xl md:text-3xl font-bold text-white mb-4'>
              {t('home.careers.title')}
            </h2>
            <p className='text-white/90 mb-6'>
              {t('home.careers.description')}
            </p>
            <div className='flex flex-wrap gap-3 mb-6'>
              <span className='bg-white/20 text-white px-4 py-2 rounded-full text-sm'>
                {t('home.careers.benefits.1')}
              </span>
              <span className='bg-white/20 text-white px-4 py-2 rounded-full text-sm'>
                {t('home.careers.benefits.2')}
              </span>
              <span className='bg-white/20 text-white px-4 py-2 rounded-full text-sm'>
                {t('home.careers.benefits.3')}
              </span>
            </div>
            <Button
              label={t('home.careers.button')}
              link={`mailto:${injected.email}?subject=Candidature`}
              className='bg-white text-secondary-600 hover:bg-gray-100 w-fit'
            />
          </div>
          <div className='lg:w-1/3 flex justify-center'>
            <div className='w-28 h-28 bg-white/20 rounded-full flex items-center justify-center'>
              <svg className='w-14 h-14 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className='flex flex-col lg:flex-row gap-12'>
        <div className='lg:w-1/2'>
          <h2 className='text-2xl md:text-3xl font-bold text-primary-500 mb-4'>
            {t('home.contact.title')}
          </h2>
          <p className='text-gray-600 mb-8'>
            {t('home.contact.description')}
          </p>

          <div className='space-y-4'>
            <Link
              href={`tel:${injected.tel}`}
              className='flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors'
            >
              <div className='w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0'>
                <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                </svg>
              </div>
              <div>
                <p className='font-semibold text-primary-500'>{t('home.contact.phone')}</p>
                <p className='text-gray-600'>{injected.tel}</p>
              </div>
            </Link>

            <Link
              href={`mailto:${injected.email}`}
              className='flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors'
            >
              <div className='w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0'>
                <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
              </div>
              <div>
                <p className='font-semibold text-primary-500'>{t('home.contact.email')}</p>
                <p className='text-gray-600'>{injected.email}</p>
              </div>
            </Link>

            <Link
              href={injected.address.url}
              target='_blank'
              className='flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors'
            >
              <div className='w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0'>
                <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                </svg>
              </div>
              <div>
                <p className='font-semibold text-primary-500'>{t('home.contact.location')}</p>
                <p className='text-gray-600 text-sm'>{injected.address.address}</p>
              </div>
            </Link>
          </div>
        </div>

        <div className='lg:w-1/2'>
          <div className='bg-primary-500 p-6 md:p-8 rounded-2xl'>
            <h3 className='text-xl font-bold text-white mb-2'>
              {t('contact.title')}
            </h3>
            <p className='text-gray-300 mb-6 text-sm'>
              {t('contact.description')}
            </p>
            <ContactForm
              handleSubmit={handleSubmit}
              formSuccess={formSuccess}
              formError={formError}
              darkMode={true}
            />
          </div>
        </div>
      </section>

      <Faq />

      <Newsletter />
    </Layout>
  )
}
