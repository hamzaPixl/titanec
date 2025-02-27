import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import Newsletter from '../../components/newsletter'
import { useTranslate } from '../../hooks/useTranslate'
import services from '../../services.json'
import doctors from '../../doctors.json'
import { useRouter } from 'next/router'
import Image from 'next/image'
import CardDoctor from '../../components/CardDoctor'

export default function ServiceDetail() {
  const router = useRouter()
  const { t } = useTranslate()
  const [service, setService] = useState({})
  const [relatedDoctors, setRelatedDoctors] = useState(doctors)

  useEffect(() => {
    if (router.query.slug?.length > 0) {
      const currentService = services.find((service) => service.id === router.query.slug)
      setService(currentService)
      setRelatedDoctors(
        doctors.filter((doctor) => doctor.services.some((s) => s.id === currentService.id)),
      )
    }
  }, [router.query])

  return (
    <Layout>
      {service && (
        <div className='flex flex-col gap-10 justify-between items-start p-5'>
          {/* hero */}
          <div className='flex flex-col gap-6 items-start bg-hero-footer bg-center bg-cover min-h-fit p-10 w-full rounded-3xl text-white'>
            <Image
              width={50}
              height={50}
              src={service.icon}
              alt={`Service ${service.title}`}
              className='rounded-3xl'
            />
            {service.title && <h1 className='text-xl md:text-4xl font-bold'>{t(service.title)}</h1>}
            {service.description && <p className='font-normal'>{t(service.description)}</p>}
          </div>

          {service?.parts?.map((part) => (
            <div className='flex flex-col gap-5 justify-start text-light-900' key={part.title}>
              <h1 className='text-xl md:text-4xl font-bold'>{t(part.title)}</h1>
              <p className='font-normal'>{t(part.description)}</p>
            </div>
          ))}

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {relatedDoctors.map((doctor, index) => (
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
        </div>
      )}

      <Newsletter />
    </Layout>
  )
}
