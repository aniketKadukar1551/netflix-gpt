import { useSelector } from 'react-redux'

import Header from './Header'
import { useNowPlayingMovies } from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from "./SecondaryContainer"
import { useTrendingMovies } from "../Hooks/useTrendingMovies"
import { useTopRatedMovies } from '../Hooks/useTopRatedMovies'
import { useUpComingMovie } from '../Hooks/useUpComingMovie'
import GptSearch from './GptSearch'

const Browse = () => {
  const isSearch = useSelector((store) => {
    return store.gpt?.isGptSearch
  })

  useNowPlayingMovies()
  useTrendingMovies()
  useTopRatedMovies()
  useUpComingMovie()

  return (
    <div>
      <Header isLoggedIn/>
      {
        isSearch ? 
          (<GptSearch></GptSearch>) :
          (
            <>
              <MainContainer></MainContainer>
              <SecondaryContainer></SecondaryContainer>
            </>
          )
      } 
    </div>
  )
}

export default Browse
