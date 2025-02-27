import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const merge = (...inputs) => {
  return twMerge(clsx(inputs))
}

export default merge
