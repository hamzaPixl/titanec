import { useTranslate } from '../hooks/useTranslate'
import merge from '../lib/merge'
import injected from '../injected.json'
import Button from './button'
import { useEffect, useRef } from 'react'

export default function Hero({ title, description, className }) {
  const { t } = useTranslate()
  const heroRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY
        heroRef.current.style.backgroundPositionY = `-${scrollPosition * 1.5}px`
        heroRef.current.style.transition =
          'background-position transform transition duration-300 ease-in-out'
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={heroRef}
      className={merge(
        'text-black rounded-3xl flex flex-col gap-5 justify-center items-center text-center py-24 px-10 w-full bg-light-200',
        className,
      )}
    >
      <h2 className='text-4xl font-semibold text-primary-600'>{title}</h2>
      <Button
        label={t('header.button')}
        link={injected.rdv}
        className='bg-secondary-400 hover:text-white text-primary-900 shadow-md w-fit hover:bg-primary-700'
      />
      <div className='text-2xl font-normal max-w-xl'>{description}</div>
    </div>
  )
}
