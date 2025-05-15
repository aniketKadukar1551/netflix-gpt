import Header from './Header'
import { useNowPlayingMovies } from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from "./SecondaryContainer"
import { useTrendingMovies } from "../Hooks/useTrendingMovies"
import { useTopRatedMovies } from '../Hooks/useTopRatedMovies'
import { useUpComingMovie } from '../Hooks/useUpComingMovie'

const Browse = () => {
  useNowPlayingMovies()
  useTrendingMovies()
  useTopRatedMovies()
  useUpComingMovie()

  return (
    <div>
      <Header isLoggedIn/>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
    </div>
  )
}

export default Browse
