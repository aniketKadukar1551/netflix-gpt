import { useSelector } from "react-redux"

import languageData from "../utils/languageContants"
 
const GptSearchEngine = () => {
  const lang = useSelector(store => store.config.language)

  const handleOnSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="flex justify-center">
      <form className="mt-[20%] grid grid-cols-12 bg-black/80 w-2xl h-[10rem] rounded-lg min-w-sm" onSubmit={handleOnSubmit}>
        <input type="text" placeholder={languageData[lang]?.searchPlaceholder} className="col-span-9 text-black bg-white my-12 ml-9 pl-6 rounded-l-lg" />
        <button className="bg-red-700 col-span-3 my-12 mr-9 rounded-r-lg cursor-pointer" >{languageData[lang]?.search}</button>
      </form>
    </div>
  )
}

export default GptSearchEngine
