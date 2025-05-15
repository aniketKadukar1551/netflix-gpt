import { IMAGE_CDN } from "../utils/constants"

const MovieCard = ({poster_path}) => {
  return (
    <div className="flex-shrink-0">
      <img className="h-[25rem] rounded-xl" src={IMAGE_CDN+poster_path} alt="Movie Card" />
    </div>
  )
}

export default MovieCard
