import merge from '../lib/merge'

export default function CardService({ title, description, className, children, variant }) {
  const isHighlight = variant === 'highlight'

  return (
    <div
      className={merge(
        'group relative overflow-hidden rounded-xl flex flex-col gap-4 justify-start text-start items-start p-6 transition-all duration-300 ease-in-out cursor-default',
        isHighlight
          ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg'
          : 'bg-gray-50 hover:bg-primary-500 shadow-sm hover:shadow-md',
        className,
      )}
    >
      {/* Icon */}
      <div className={merge(
        'w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300',
        isHighlight
          ? 'bg-white/20'
          : 'bg-primary-500/10 group-hover:bg-white/20'
      )}>
        <svg
          className={merge(
            'w-5 h-5',
            isHighlight ? 'text-white' : 'text-primary-500 group-hover:text-white'
          )}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
        </svg>
      </div>

      <div>
        <h3 className={merge(
          'text-lg font-bold mb-2',
          isHighlight ? 'text-white' : 'text-primary-500 group-hover:text-white'
        )}>
          {title}
        </h3>
        <p className={merge(
          'text-sm leading-relaxed',
          isHighlight ? 'text-white/90' : 'text-gray-600 group-hover:text-white/90'
        )}>
          {description}
        </p>
      </div>

      {children}
    </div>
  )
}
