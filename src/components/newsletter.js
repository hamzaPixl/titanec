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
        console.log(t('newsletter.form.success'))
      })
      .catch(() => {
        setFormError({ message: t('newsletter.form.error') })
        console.log(t('newsletter.form.error'))
      })
  }
  return (
    <div className='rounded-3xl text-white bg-primary-600 py-14 px-8 flex flex-col gap-5 items-center text-center justify-between'>
      <div className='text-2xl font-semibold'>{t('newsletter.title')}</div>
      <div className='text-sm font-normal max-w-xl'>{t('newsletter.description')}</div>
      <NewsletterForm formSuccess={formSuccess} handleSubmit={handleSubmit} formError={formError} />
    </div>
  )
}
