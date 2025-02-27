import Image from 'next/image'
import merge from '../lib/merge'

export default function CardWhyUs({ title, description, className, children, image }) {
  return (
    <div
      className={merge(
        'flex flex-col gap-5 justify-start items-start text-light-900 transition-all duration-300 ease-in-out bg-light-200 shadow-lg rounded-3xl',
        className,
      )}
    >
      <div className='flex flex-col gap-2 w-full p-8 rounded-t-3xl'>
        <h2 className='text-3xl font-semibold text-primary-600'>{title}</h2>
        <p className='text-base font-normal'>{description}</p>
      </div>
      {image && (
        <Image
          width={250}
          height={450}
          alt='Card why us'
          src={image}
          className='rounded-b-3xl w-full'
        />
      )}
      {children}
    </div>
  )
}
