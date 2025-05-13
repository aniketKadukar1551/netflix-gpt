import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = ({isLoggedIn}) => {
  const navigate = useNavigate()

  const handleSignOut = () => {
    navigate("/")
  }

  return (
    <div className={isLoggedIn ? 'absolute w-full bg-gradient-to-b from-black z-10 flex justify-between h-36' : 'absolute w-full bg-gradient-to-b from-black z-10'}>
      <img className='h-20 pl-[21rem] max-xl:pl-[0rem] max-xl:h-14 md:h-20 lg:h-24' 
      src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
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
