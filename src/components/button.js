import Image from 'next/image'
import Link from 'next/link'
import merge from '../lib/merge'

export default function Button({ label, icon, className, imageClassName, link = '/' }) {
  return (
    <Link href={link}>
      <div
        className={merge(
          'flex group flex-row gap-1 items-center p-3 text-md font-medium text-white bg-light-900 hover:bg-primary-600 rounded-3xl shadow-sm hover:translate-x-1 transition-transform ease-in-out duration-300',
          className,
        )}
      >
        {icon && (
          <Image
            width={20}
            height={20}
            alt='Icon button'
            src={icon}
            className={merge(imageClassName)}
          />
        )}
        {label}
      </div>
    </Link>
  )
}
