import React from 'react'
import { useRouter } from 'next/router'
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
      <div className='flex flex-col gap-3'>
        <input type='hidden' name='form-name' value='newsletter' />
        <p className='hidden'>
          <label>
            Don&apos;t fill this out if you&apos;re human: <input name='bot-field' />
          </label>
        </p>
        <div className='flex flex-col sm:flex-row gap-2'>
          <input
            type='email'
            name='email'
            required
            placeholder={t('newsletter.email')}
            className='flex-1 rounded-lg px-4 py-2.5 text-sm bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30'
          />
          <button
            type='submit'
            className='bg-white hover:bg-gray-100 text-secondary-600 font-semibold rounded-lg px-6 py-2.5 text-sm transition-colors duration-200'
          >
            {t('newsletter.submit')}
          </button>
        </div>
      </div>
      {formSuccess && (
        <div className='mt-3 bg-white/20 px-4 py-2 rounded-lg text-white text-sm text-center'>
          {formSuccess.message}
        </div>
      )}
      {formError && (
        <div className='mt-3 bg-red-500/20 px-4 py-2 rounded-lg text-white text-sm text-center'>
          {formError.message}
        </div>
      )}
    </form>
  )
}
