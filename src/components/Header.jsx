import { useNavigate } from 'react-router-dom'

import { NETFLIX_LOGO_IMAGE } from '../utils/constants'

const Header = ({isLoggedIn}) => {
  const navigate = useNavigate()

  const handleSignOut = () => {
    navigate("/")
  }

  return (
    <div className={isLoggedIn ? 'absolute w-full bg-gradient-to-b from-black z-10 flex justify-between h-36' : 'absolute w-full bg-gradient-to-b from-black z-10'}>
      <img className='h-20 pl-[21rem] max-xl:pl-[0rem] max-xl:h-14 md:h-20 lg:h-24' 
      src={ NETFLIX_LOGO_IMAGE }
      alt='logo'></img>
      {
        isLoggedIn && 
        <div className='flex justify-center mr-16'>
          <button type='button' className='text-black m-[3.4rem] px-5 rounded-4xl bg-white cursor-pointer' onClick={handleSignOut}>Sign Out</button>
        </div>
      }
    </div>
  )
}

export default Header
