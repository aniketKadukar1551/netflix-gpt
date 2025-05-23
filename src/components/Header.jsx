import { useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'

import { NETFLIX_LOGO_IMAGE } from '../utils/constants'
import { changeIsGptSearch } from "../utils/gptSlice"
import { GiFastBackwardButton } from "react-icons/gi";
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from "../utils/configSlice"

const Header = ({isLoggedIn}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isSearch = useSelector((store) => {
    return store.gpt?.isGptSearch
  })

  const handleSignOut = () => {
    navigate("/")
  }

  const handleOnClickSearchButton = () => {
    dispatch(changeIsGptSearch())
  }

  const handleOnChangeLanguage = (event) => {
    dispatch(changeLanguage(event.target.value))
  }

  return (
    <div className={isLoggedIn ? 'absolute w-full bg-gradient-to-b from-black z-10 flex justify-between h-36' : 'absolute w-full bg-gradient-to-b from-black z-10'}>
      <img className={isLoggedIn ? 'h-20 pl-[3.5em] max-xl:pl-[0rem] max-xl:h-14 md:h-20 lg:h-24' : 'h-20 pl-[21rem] max-xl:pl-[0rem] max-xl:h-14 md:h-20 lg:h-24'} 
      src={ NETFLIX_LOGO_IMAGE }
      alt='logo'></img>
      {
        isLoggedIn && 
        <div className='flex justify-center mr-16'>
          { 
            isSearch &&
            <select className='bg-gray-500 my-[3.4rem] px-10 rounded-4xl cursor-pointer appearance-none' onChange={handleOnChangeLanguage}>
              {
                SUPPORTED_LANGUAGES.map(lang => <option className='bg-gray-300' 
                  key={lang.identifier} value={lang?.identifier}>{lang?.language}</option>)
              }
            </select> 
          }
          <button className='bg-purple-500 my-[3.4rem] px-11 ml-[0.9rem] rounded-4xl cursor-pointer' onClick={handleOnClickSearchButton}>
            {isSearch ? <GiFastBackwardButton className='text-xl'/> : <FaSearch /> }
          </button>
          <button type='button' className='text-black my-[3.4rem] ml-[0.9rem] mr-[3.4rem] px-5 rounded-4xl bg-white cursor-pointer min-w-[103px]' onClick={handleSignOut}>Sign Out</button>
        </div>
      }
    </div>
  )
}

export default Header
