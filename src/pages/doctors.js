import React from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'
import Hero from '../components/Hero'
import CardDoctor from '../components/CardDoctor'
import { useTranslate } from '../hooks/useTranslate'
import doctors from '../doctors.json'

export default function Doctors() {
  const { t } = useTranslate()
  return (
    <Layout>
      <Hero title={t('doctors.title')} description={t('doctors.description')} />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {doctors.map((doctor, index) => (
          <CardDoctor
            key={index}
            role={doctor.role}
            link={`/doctors/${doctor.id}`}
            image={doctor.image}
            title={doctor.title}
            socials={doctor.socials}
            serviceIcon={doctor.services[0].icon}
          />
        ))}
      </div>
      <Newsletter />
    </Layout>
  )
}
