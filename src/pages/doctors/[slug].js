import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'
import Newsletter from '../../components/newsletter'
import { useTranslate } from '../../hooks/useTranslate'
import CardDoctor from '../../components/CardDoctor'
import Button from '../../components/button'
import doctors from '../../doctors.json'

export default function DoctorDetail() {
  const router = useRouter()
  const { t } = useTranslate()
  const [doctor, setDoctor] = useState({})

  useEffect(() => {
    if (router.query.slug?.length > 0) {
      const currentDoctor = doctors.find((doctor) => doctor.id === router.query.slug)
      setDoctor(currentDoctor)
    }
  }, [router.query])

  return (
    <Layout>
      {doctor && (
        <div className='flex flex-col gap-10 justify-between items-start p-5'>
          {/* hero */}
          <div className='flex flex-col md:flex-row gap-6 items-start bg-hero-footer bg-center bg-cover min-h-fit p-10 w-full rounded-3xl text-white'>
            <Image
              width={300}
              height={350}
              src={doctor.image}
              alt={`Doctor ${doctor.title}`}
              className='rounded-3xl'
            />
            <div className='flex flex-col gap-2'>
              <h1 className='text-xl md:text-4xl font-bold'>{doctor.title}</h1>
              <div className='font-semibold'>{doctor.role}</div>
              {doctor?.socials && (
                <div className='flex flex-row gap-2 items-center'>
                  {doctor?.socials.map((social) => (
                    <Link key={social.icon} href={social.link}>
                      <Image
                        width={15}
                        height={15}
                        alt='Social icon'
                        src={`/icons/${social.icon}_white.svg`}
                      />
                    </Link>
                  ))}
                </div>
              )}

              <div className='flex flex-col gap-2 items-start'>
                <div className='flex flex-row gap-2 items-center'>
                  <Image
                    width={15}
                    height={15}
                    src={`/icons/mail-primary.svg`}
                    alt={`Email icon`}
                  />
                  <Link
                    className='text-white hover:border-b-primary-600 hover:border-b-2 duration-300 ease-in-out hover:transformation-all pb-1'
                    href={`mailto:${doctor.email}`}
                  >
                    {doctor.email}
                  </Link>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                  <Image
                    width={15}
                    height={15}
                    src={`/icons/phone-primary.svg`}
                    alt={`Phone icon`}
                  />
                  <Link
                    className='text-white hover:border-b-primary-600 hover:border-b-2 duration-300 ease-in-out hover:transformation-all pb-1'
                    href={`tel:${doctor.phone}`}
                  >
                    {doctor.phone}
                  </Link>
                </div>
              </div>

              <Link
                className='flex flex-row gap-1 items-center text-white my-3 bg-primary-600 hover:bg-primary-800 p-4 duration-300 ease-in-out hover:transformation-all rounded-3xl w-fit'
                href={doctor.rdv || 'https://rosa.be/fr/org/org-chebli/'}
              >
                <Image width={25} height={25} alt='Social icon' src={`/icons/bell-white.svg`} />
                {t('doctor.rdv')}
              </Link>
            </div>
          </div>

          {/* specialities */}
          {doctor.specialities && (
            <div className='flex flex-col gap-5 justify-start text-light-900'>
              <h1 className='text-xl md:text-4xl font-bold'>{t('doctor.specialities')}</h1>
              <ul className='list-disc list-inside'>
                {doctor.specialities?.map((speciality) => (
                  <li key={speciality}>{speciality}</li>
                ))}
              </ul>
            </div>
          )}

          {/* services */}
          {doctor.services && (
            <div className='flex flex-col gap-5 justify-start text-light-900'>
              <h1 className='text-xl md:text-4xl font-bold'>{t('doctor.services')}</h1>
              <div className='flex flex-col gap-4'>
                {doctor.services?.map((service) => (
                  <Link
                    key={service.name}
                    href={service.link}
                    className='flex flex-row gap-2 items-center hover:translate-x-1 transition-transform ease-in-out duration-300'
                  >
                    <Image
                      width={45}
                      height={45}
                      src={service.icon}
                      alt={`Arrow icon`}
                      className='bg-primary-600 rounded-full p-1'
                    />
                    <div className='hover:text-primary-600 font-semibold'>{t(service.name)}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* about */}
          <div className='flex flex-col gap-5 justify-start text-light-900'>
            <h1 className='text-xl md:text-4xl font-bold'>{t('doctor.about')}</h1>
            <div className='font-normal flex flex-col justify-start gap-2 max-w-3xl'>
              {doctor.about?.split('\n\n').map((paragraph, i) => (
                <div key={`p${i}`}>{paragraph}</div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className='bg-light-200 p-10 rounded-3xl flex flex-col gap-6'>
        <div className='flex flex-col md:flex-row gap-6 justify-between items-start md:items-center'>
          <h2 className='text-2xl text-light-900'>{t('doctor.more')}</h2>
          <Button
            label={t('doctor.button')}
            link='/doctors'
            className='shadow-md'
            icon={'/icons/members.svg'}
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {doctors.slice(0, 3).map((doctor, index) => (
            <CardDoctor
              key={index}
              role={doctor.role}
              link={`/doctors/${doctor.id}`}
              image={doctor.image}
              title={doctor.title}
              socials={doctor.socials}
            />
          ))}
        </div>
      </div>

      <Newsletter />
    </Layout>
  )
}
