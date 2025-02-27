import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useTranslate } from '../../hooks/useTranslate'

export default function NewsletterForm({ formSuccess, handleSubmit, formError }) {
  const router = useRouter()
  const { t } = useTranslate()
  return (
    <form
      method='POST'
      onSubmit={handleSubmit}
      netlify-honeypot='bot-field'
      data-netlify='true'
      action={router.pathname}
      name='newsletter'
    >
      <div className='flex flex-col gap-2 md:flex-row justify-between'>
        <input type='hidden' name='form-name' value='newsletter' />
        <p className='hidden'>
          <label>
            Don’t fill this out if you’re human: <input name='bot-field' />
          </label>
        </p>
        <div className='bg-white rounded-3xl p-2 flex flex-col md:flex-row gap-1'>
          <input
            type='email'
            name='email'
            placeholder={t('newsletter.email')}
            className='rounded-3xl border-2 bg-white text-light-900 focus:border-white focus:ring-white border-white placeholder:text-gray'
          />
          <button
            type='submit'
            className='bg-light-900 hover:bg-primary-600 text-white rounded-3xl flex flex-row gap-2 items-center px-4 py-2 hover:translate-x-1 transition-transform ease-in-out duration-300'
          >
            {t('newsletter.submit')}
            <Image
              src='/icons/arrow_forward_white.svg'
              width={15}
              height={15}
              alt='Arrow forward'
            />
          </button>
        </div>
      </div>
      {formSuccess && (
        <div className='mt-2 bg-white px-4 py-2 rounded-3xl text-green-500 transition-all'>
          {formSuccess.message}
        </div>
      )}
      {formError && (
        <div className='mt-2 bg-white px-4 py-2 rounded-3xl text-red-500 transition-all'>
          {formError.message}
        </div>
      )}
    </form>
  )
}
