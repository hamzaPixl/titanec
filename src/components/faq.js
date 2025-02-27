import React from 'react'
import { useTranslate } from '../hooks/useTranslate'
import faqA from '../faq.json'

export default function Faq() {
  const { t } = useTranslate()
  return (
    <div className='text-light-900 w-full flex flex-col gap-10 justify-between items-center text-center'>
      <div className='text-3xl xl:text-4xl font-bold'>{t('faq.title')}</div>
      <div className='max-w-xl text-base'>{t('faq.description')}</div>

      {faqA.map((f, i) => (
        <details
          key={`faq-${i + 1}`}
          className='text-left bg-light-200 w-full rounded-3xl border border-slate-200 bg-none p-7 transition-all duration-300 ease-in-out open:bg-light-900 open:text-white shadow-lg group'
        >
          <summary className='flex flex-row w-full justify-between items-center cursor-pointer list-none text-base font-normal'>
            {f.question}
            <div className='block cursor-pointer p-2 rounded-full bg-light-900 text-light-200 group-open:bg-light-200 group-open:text-light-900 transition-all duration-300 ease-in-out'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='{1.5}'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
              </svg>
            </div>
          </summary>
          <div className='pt-10 text-base text-white flex flex-col gap-2'>
            {f.answer.split('\n').map((p, i) => (
              <p key={`faq-${i + 1}`} className='mb-4'>
                {p}
              </p>
            ))}
          </div>
        </details>
      ))}
    </div>
  )
}
