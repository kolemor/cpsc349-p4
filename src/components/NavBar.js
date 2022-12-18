import { Link } from 'react-router-dom'
import pb from '../pocketBase'

const Nav = ({ loggedIn, setLoggedIn }) => {
  return (
    <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div className='relative flex items-center justify-between'>
        <div className='flex items-center'>
          <Link
            to='/'
            aria-label='Company'
            title='Company'
            className='inline-flex items-center mr-8'
          >
            <svg
              className='w-8 text-mint-100'
              viewBox='0 0 24 24'
              strokeLinejoin='round'
              strokeWidth='2'
              strokeLinecap='round'
              strokeMiterlimit='10'
              stroke='currentColor'
              fill='none'
            >
              <rect x='3' y='1' width='7' height='12'></rect>
              <rect x='3' y='17' width='7' height='6'></rect>
              <rect x='14' y='1' width='7' height='6'></rect>
              <rect x='14' y='11' width='7' height='12'></rect>
            </svg>
            <span className='ml-2 text-xl font-bold tracking-wide text-slate-100 uppercase'>
              Gyst
            </span>
          </Link>
          <ul className='flex items-center hidden space-x-8 lg:flex'>
            {loggedIn && (
              <li>
                <Link
                  to='/home'
                  className='font-medium tracking-wide text-slate-100 transition-colors duration-200 hover:text-mint-100'
                >
                  Home
                </Link>
              </li>
            )}
            <li>
              <a
                href='/#features'
                aria-label='Our product'
                title='Our product'
                className='font-medium tracking-wide text-slate-100 transition-colors duration-200 hover:text-mint-100'
              >
                Features
              </a>
            </li>
            <li>
              <Link
                to='/about'
                aria-label='About us'
                title='About us'
                className='font-medium tracking-wide text-slate-100 transition-colors duration-200 hover:text-mint-100'
              >
                About us
              </Link>
            </li>
          </ul>
        </div>
        <ul className='flex items-center hidden space-x-8 lg:flex'>
          {loggedIn ? (
            <li>
              <Link
                className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-mint-900 transition duration-200 rounded shadow-md bg-mint-100 hover:bg-mint-50 focus:shadow-outline focus:outline-none'
                to='/'
                onClick={() => {
                  pb.authStore.clear()
                  setLoggedIn(pb.authStore.isValid)
                }}
              >
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link
                  to='/login'
                  aria-label='Sign in'
                  title='Sign in'
                  className='font-medium tracking-wide text-slate-100 transition-colors duration-200 hover:text-mint-100'
                >
                  Log in
                </Link>
              </li>
              <li>
                <Link
                  to='/signup'
                  className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-mint-900 transition duration-200 rounded shadow-md bg-mint-100 hover:bg-mint-50 focus:shadow-outline focus:outline-none'
                  aria-label='Sign up'
                  title='Sign up'
                >
                  Sign up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Nav
