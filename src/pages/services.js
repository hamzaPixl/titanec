import React from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'
import Hero from '../components/Hero'
import CardService from '../components/CardService'
import { useTranslate } from '../hooks/useTranslate'
import services from '../services.json'

export default function Services() {
  const { t } = useTranslate()
  return (
    <Layout>
      <Hero title={t('services.title')} description={t('services.description')} />
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        {services.map((service, index) => (
          <CardService
            key={index}
            link={service.link}
            image={service.icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </div>
      <Newsletter />
    </Layout>
  )
}
