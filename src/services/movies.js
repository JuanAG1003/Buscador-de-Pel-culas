const API_KEY = '5b2fdbe3'
// import { Search } from '../mocks/with-result.json'

export async function searchMovies ({ search }) {
  try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const { Search } = await response.json()

    return Search?.map(movie => ({
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      id: movie.imdbID
    }))
  } catch (error) {
    throw new Error(`Error searching movies: ${error.message}`)
  }
}
