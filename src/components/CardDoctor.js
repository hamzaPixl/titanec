import Image from 'next/image'
import merge from '../lib/merge'
import Link from 'next/link'

export default function CardDoctor({
  title,
  role,
  className,
  image = '/doctor.png',
  serviceIcon = '/icons/general-white.svg',
  link = '/doctors',
}) {
  return (
    <Link
      href={link}
      className={merge(
        'relative overflow-hidden group text-white transition-all duration-300 ease-in-out shadow-sm hover:shadow-xl rounded-3xl hover:cursor-pointer',
        className,
      )}
    >
      <Image
        width={300}
        height={300}
        alt='Card doctor'
        src={image}
        className='w-full object-cover scale-100 ease-in duration-300 group-hover:scale-125 h-80'
      />
      <div className='flex flex-col gap-2 w-full p-5 bg-light-900 group-hover:bg-primary-600 transform ease-in duration-300 relative inset-0 h-fit'>
        <h2 className='text-2xl font-semibold'>{title}</h2>
        <div className='text-sm font-normal items-center flex flex-row gap-2'>
          <Image
            src={serviceIcon}
            width={35}
            height={35}
            alt='Doctor icon'
            className='bg-primary-600 rounded-md p-1 group-hover:bg-light-900 transform ease-in duration-300'
          />
          <div>{role}</div>
        </div>
      </div>
    </Link>
  )
}
