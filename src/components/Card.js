import Image from 'next/image'
import merge from '../lib/merge'

export default function Card({ title, description, className, children, image }) {
  return (
    <div
      className={merge(
        'bg-primary-600 shadow-lg text-white rounded-3xl flex flex-col gap-5 justify-start items-start p-8 max-w-xs',
        className,
      )}
    >
      {image && <Image width={50} height={50} alt='Card image' src={image} />}
      <h2 className='text-xl font-semibold'>{title}</h2>
      <p className='text-sm font-normal mb-2'>{description}</p>
      {children}
    </div>
  )
}
