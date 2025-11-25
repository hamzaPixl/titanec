import React from 'react'
import { useTranslate } from '../hooks/useTranslate'
import faqA from '../faq.json'

export default function Faq() {
  const { t } = useTranslate()
  return (
    <div className='w-full flex flex-col gap-8'>
      <div className='text-center mb-4'>
        <h2 className='text-2xl md:text-3xl font-bold text-primary-500 mb-4'>{t('faq.title')}</h2>
        <p className='text-gray-600 max-w-2xl mx-auto'>{t('faq.description')}</p>
      </div>

      <div className='space-y-4'>
        {faqA.map((f, i) => (
          <details
            key={`faq-${i + 1}`}
            className='group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-sm'
          >
            <summary className='flex flex-row w-full justify-between items-center cursor-pointer p-5 text-base font-semibold text-primary-500 list-none'>
              <span className='pr-4'>{f.question}</span>
              <div className='flex-shrink-0 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center group-open:bg-secondary-500 transition-all duration-300'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  className='w-4 h-4 transition-transform duration-300 group-open:rotate-45'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
                </svg>
              </div>
            </summary>
            <div className='px-5 pb-5 text-gray-600 leading-relaxed'>
              {f.answer.split('\n').map((p, idx) => (
                <p key={`faq-answer-${idx}`} className='mb-2 last:mb-0'>
                  {p}
                </p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}
