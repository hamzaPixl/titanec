export default function Burger({ navbarOpen }) {
  return (
    <div className='absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>
      <span
        className={`absolute h-0.5 w-5 bg-light-900 transform transition duration-300 ease-in-out ${
          navbarOpen ? 'rotate-45 delay-200' : '-translate-y-1.5'
        }`}
      ></span>
      <span
        className={`absolute h-0.5 bg-light-900 transform transition-all duration-200 ease-in-out ${
          navbarOpen ? 'w-0 opacity-50' : 'w-5 delay-200 opacity-100'
        }`}
      ></span>
      <span
        className={`absolute h-0.5 w-5 bg-light-900 transform transition duration-300 ease-in-out ${
          navbarOpen ? '-rotate-45 delay-200' : 'translate-y-1.5'
        }`}
      ></span>
    </div>
  )
}
