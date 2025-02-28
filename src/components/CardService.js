import Image from 'next/image'
import merge from '../lib/merge'
import Link from 'next/link'

export default function CardService({ title, description, className, children, image, link }) {
  return (
    <Link
      href={link || '/services'}
      className={merge(
        'shadow-lg text-white rounded-3xl flex flex-col gap-5 justify-start text-start items-start p-10 hover:bg-primary-600 bg-light-900 transition-all duration-300 ease-in-out',
        className,
      )}
      onClick={(e) => !link && e.preventDefault()}
    >
      <Image width={50} height={50} alt='Card service' src={image} />
      <h2 className='text-xl font-semibold'>{title}</h2>
      <div className='text-sm font-normal mb-2'>{description}</div>
      {children}
    </Link>
  )
}
