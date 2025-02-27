import React from 'react'
import Layout from '../../components/layout'
import Newsletter from '../../components/newsletter'
import { useTranslate } from '../../hooks/useTranslate'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

export default function PolicyDetail() {
  const router = useRouter()
  const { t } = useTranslate()

  return (
    <Layout>
      <div className='flex flex-col gap-10 justify-between items-center w-full'>
        <h1 className='text-center text-xl md:text-4xl font-bold text-light-900'>
          {t(`policy.${router.query.slug}.title`)}
        </h1>
        <p className='text-center text-light-900'>{t(`policy.${router.query.slug}.description`)}</p>
        <Link href={'/'} className='w-32'>
          <Image width={200} height={150} src='/logo.svg' alt={`Logo`} />
        </Link>
      </div>
      <Newsletter />
    </Layout>
  )
}
