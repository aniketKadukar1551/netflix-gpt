import MovieCard from "./MovieCard"

const MovieList = ({title, movies}) => {
  console.log(movies)

  return (
    <div>
      <div className="pl-16 mb-[4rem]">
        <h1 className="text-4xl pb-4 text-white">{title}</h1>
        <div className="flex overflow-x-scroll space-x-7">
          {
            movies.map((movie) => {
              return <MovieCard key={movie?.id} poster_path={movie?.poster_path}></MovieCard>
            })
          }
        </div>
      </div>
      
    </div>
  )
}

export default MovieList
