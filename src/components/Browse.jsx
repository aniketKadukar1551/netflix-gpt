import Header from './Header'
import { useNowPlayingMovies } from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from "./SecondaryContainer"
import { useTrendingMovies } from "../Hooks/useTrendingMovies"

const Browse = () => {
  useNowPlayingMovies()
  useTrendingMovies()

  return (
    <div>
      <Header isLoggedIn/>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
    </div>
  )
}

export default Browse
