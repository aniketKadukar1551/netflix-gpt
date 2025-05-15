import { useSelector } from "react-redux"

import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies = useSelector((store) => {
    return store.nowPlayingMovie
  })

  if (!movies) return

  return (
    <div className="bg-black">
      <div className="mt-[-16rem] scale-z-5 pb-[5rem]">
        <MovieList title={"Now Playing"} movies={movies?.nowPlaying}></MovieList>
        <MovieList title={"Trending"} movies={movies?.trendingMovie}></MovieList>
        <MovieList title={"Popular"} movies={movies}></MovieList>
        <MovieList title={"Upcoming Movies"} movies={movies}></MovieList>
        <MovieList title={"Top Rated"} movies={movies}></MovieList>
      </div>
      
    </div>
  )
}

export default SecondaryContainer
