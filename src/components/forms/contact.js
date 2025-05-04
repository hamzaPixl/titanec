import React from 'react'
import { useTranslate } from '../../hooks/useTranslate'
import { useRouter } from 'next/router'

export default function ContactForm({ formSuccess, handleSubmit, formError }) {
  const router = useRouter()
  const { t } = useTranslate()
  return (
    <div className='text-primary-900 gap-4 flex flex-col justify-between items-left text-base font-normal w-full'>
      {formSuccess && (
        <div className='transition-all text-lg bg-green-500 rounded-3xl text-white p-10'>
          {formSuccess.message}
        </div>
      )}
      {formError && (
        <div className='transition-all text-lg bg-red-500 rounded-3xl text-white p-10'>
          {formError.message}
        </div>
      )}
      {
        <form
          method='POST'
          onSubmit={handleSubmit}
          name='contact'
          netlify-honeypot='bot-field'
          action={router.pathname}
          data-netlify='true'
        >
          <div className='flex flex-col justify-between gap-4 w-full pb-10'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4 w-full'>
              <div className='flex flex-col gap-2 justify-start w-full'>
                <input type='hidden' name='form-firstName' value='contact' />
                <p className='hidden'>
                  <label>
                    Don’t fill this out if you’re human: <input name='bot-field' />
                  </label>
                </p>
                <label className='font-normal'>{t('contact.form.firstName')}</label>
                <input
                  type='text'
                  name='firstName'
                  className='border-2 focus:border-light-600 focus:ring-light-border-light-600 border-light-600 ring-white rounded-3xl'
                />
              </div>
              <div className='flex flex-col gap-2 justify-start w-full'>
                <input type='hidden' name='form-lastName' value='contact' />
                <label className='font-normal'>{t('contact.form.lastName')}</label>
                <input
                  type='text'
                  name='lastName'
                  className='border-2 focus:border-light-600 focus:ring-light-border-light-600 border-light-600 ring-white rounded-3xl'
                />
              </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4 w-full'>
              <div className='flex flex-col gap-2 justify-start w-full'>
                <input type='hidden' name='form-phone' value='contact' />
                <label className='font-normal'>{t('contact.form.phone')}</label>
                <input
                  type='text'
                  name='phone'
                  className='border-2 focus:border-light-600 focus:ring-light-border-light-600 border-light-600 ring-white rounded-3xl'
                />
              </div>
              <div className='flex flex-col gap-2 justify-start w-full'>
                <input type='hidden' name='form-email' value='contact' />
                <label className='font-normal'>{t('contact.form.email')}</label>
                <input
                  type='email'
                  name='email'
                  className='border-2 focus:border-light-600 focus:ring-light-border-light-600 border-light-600 ring-white rounded-3xl'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2 justify-start w-full'>
              <label className='font-normal'>{t('contact.form.message')}</label>
              <textarea
                name='message'
                className='border-2 focus:border-light-600 focus:ring-light-border-light-600 border-light-600 ring-white rounded-3xl'
              ></textarea>
            </div>
          </div>
          <button
            type='submit'
            className='text-white bg-primary-600 hover:shadow-lg rounded-3xl flex flex-row gap-2 items-center px-4 py-2 hover:translate-x-1 transition-transform ease-in-out duration-300'
          >
            {t('contact.form.submit')}
          </button>
        </form>
      }
    </div>
  )
}
