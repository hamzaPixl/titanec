import React, { useState } from 'react'
import { useTranslate } from '../hooks/useTranslate'
import NewsletterForm from './forms/newsletter'
import { useRouter } from 'next/router'

export default function Newsletter() {
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
        setFormSuccess({ message: t('newsletter.form.success') })
      })
      .catch(() => {
        setFormError({ message: t('newsletter.form.error') })
      })
  }

  return (
    <div className='relative overflow-hidden rounded-2xl bg-gradient-to-r from-secondary-600 to-secondary-500 py-12 px-6 md:px-8'>
      {/* Background decoration */}
      <div className='absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2'></div>
      <div className='absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2'></div>

      <div className='relative z-10 flex flex-col gap-5 items-center text-center max-w-xl mx-auto'>
        <h2 className='text-xl md:text-2xl font-bold text-white'>{t('newsletter.title')}</h2>
        <p className='text-white/90 text-sm'>{t('newsletter.description')}</p>
        <div className='w-full max-w-md'>
          <NewsletterForm formSuccess={formSuccess} handleSubmit={handleSubmit} formError={formError} />
        </div>
      </div>
    </div>
  )
}
