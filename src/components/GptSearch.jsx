import GptSearchEngine from "./GptSearchEngine"
import GptSuggestions from "./GptSuggestions"
import { NETFLIX_COVER_IMAGE } from "../utils/constants"

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img className='w-full' src={NETFLIX_COVER_IMAGE}
        alt='background Image'></img>
      </div>
      <GptSearchEngine></GptSearchEngine>
      <GptSuggestions></GptSuggestions>
    </div>
  )
}

export default GptSearch
