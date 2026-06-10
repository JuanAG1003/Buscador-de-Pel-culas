import { useRef } from 'react'

function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {
        movies.map(movie => (
          <li className='movie' key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

function NoResult () {
  return (
    <p>No se encontradon películas para esta búsqueda</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  const firstLoading = useRef(true)

  if (firstLoading.current) firstLoading.current = !hasMovies

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : firstLoading.current
        ? ''
        : <NoResult />
  )
}
