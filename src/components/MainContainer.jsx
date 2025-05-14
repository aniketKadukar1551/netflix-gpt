import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"
import { useSelector } from "react-redux"

const MainContainer = () => {
  const movies = useSelector((store) => {
    return store.nowPlayingMovie?.nowPlaying
  })

  if(!movies) return

  const {original_title, overview} = movies[0]

  return (
    <div>
        <VideoTitle movie_title={original_title} description={overview}></VideoTitle>
        <VideoBackground></VideoBackground>
    </div>
  )
}

export default MainContainer
