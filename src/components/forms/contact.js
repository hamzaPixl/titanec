import React from 'react'
import { useTranslate } from '../../hooks/useTranslate'
import { useRouter } from 'next/router'
import merge from '../../lib/merge'

export default function ContactForm({ formSuccess, handleSubmit, formError, darkMode }) {
  const router = useRouter()
  const { t } = useTranslate()

  const inputClasses = darkMode
    ? 'bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-secondary-400 focus:ring-secondary-400'
    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-secondary-500 focus:ring-secondary-500'

  const labelClasses = darkMode ? 'text-white/90' : 'text-gray-700'

  return (
    <div className='gap-4 flex flex-col justify-between items-left text-base font-normal w-full'>
      {formSuccess && (
        <div className='bg-green-500/20 border border-green-500 rounded-lg text-green-100 p-4 text-center text-sm'>
          {formSuccess.message}
        </div>
      )}
      {formError && (
        <div className='bg-red-500/20 border border-red-500 rounded-lg text-red-100 p-4 text-center text-sm'>
          {formError.message}
        </div>
      )}
      <form
        method='POST'
        onSubmit={handleSubmit}
        name='contact'
        netlify-honeypot='bot-field'
        action={router.pathname}
        data-netlify='true'
        className='flex flex-col gap-4'
      >
        <input type='hidden' name='form-name' value='contact' />
        <p className='hidden'>
          <label>
            Don&apos;t fill this out if you&apos;re human: <input name='bot-field' />
          </label>
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='flex flex-col gap-1'>
            <label className={merge('font-medium text-sm', labelClasses)}>
              {t('contact.form.firstName')}
            </label>
            <input
              type='text'
              name='firstName'
              required
              className={merge(
                'border rounded-lg px-4 py-2.5 text-sm transition-colors duration-200 focus:outline-none focus:ring-2',
                inputClasses
              )}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className={merge('font-medium text-sm', labelClasses)}>
              {t('contact.form.lastName')}
            </label>
            <input
              type='text'
              name='lastName'
              required
              className={merge(
                'border rounded-lg px-4 py-2.5 text-sm transition-colors duration-200 focus:outline-none focus:ring-2',
                inputClasses
              )}
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='flex flex-col gap-1'>
            <label className={merge('font-medium text-sm', labelClasses)}>
              {t('contact.form.phone')}
            </label>
            <input
              type='tel'
              name='phone'
              className={merge(
                'border rounded-lg px-4 py-2.5 text-sm transition-colors duration-200 focus:outline-none focus:ring-2',
                inputClasses
              )}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className={merge('font-medium text-sm', labelClasses)}>
              {t('contact.form.email')}
            </label>
            <input
              type='email'
              name='email'
              required
              className={merge(
                'border rounded-lg px-4 py-2.5 text-sm transition-colors duration-200 focus:outline-none focus:ring-2',
                inputClasses
              )}
            />
          </div>
        </div>

        <div className='flex flex-col gap-1'>
          <label className={merge('font-medium text-sm', labelClasses)}>
            {t('contact.form.message')}
          </label>
          <textarea
            name='message'
            rows={3}
            required
            className={merge(
              'border rounded-lg px-4 py-2.5 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 resize-none',
              inputClasses
            )}
          ></textarea>
        </div>

        <button
          type='submit'
          className={merge(
            'mt-2 font-semibold rounded-lg px-6 py-2.5 text-sm flex items-center justify-center gap-2 transition-all duration-200',
            darkMode
              ? 'bg-secondary-500 hover:bg-secondary-600 text-white'
              : 'bg-primary-500 hover:bg-primary-600 text-white'
          )}
        >
          {t('contact.form.send')}
          <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
          </svg>
        </button>
      </form>
    </div>
  )
}
