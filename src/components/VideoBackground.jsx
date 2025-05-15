import { useSelector } from "react-redux"

import { useMovieTrailer } from "../Hooks/useMovieTrailer"

const VideoBackground = ({movieId}) => {
  const movieTrailer = useSelector((store) => {
    return store.nowPlayingMovie?.nowPlayingTrailer
  })

  useMovieTrailer(movieId)

  return (
    <div>
      <iframe 
        className="w-screen aspect-video min-w-6xl"
        src={`https://www.youtube.com/embed/${movieTrailer?.key}?si=R66VBITcl8d5eETv&autoplay=1&mute=1`}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
      </iframe>
    </div>
  )
}

export default VideoBackground
