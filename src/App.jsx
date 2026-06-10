import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies.jsx'
import { searchMovies } from './services/movies.js'
import { useDebouncedCallback } from 'use-debounce'

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede hacer una busqueda vacia')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const searchPreview = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (searchPreview.current === search) return

    try {
      setError(null)
      setLoading(true)
      searchPreview.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { movies, getMovies, loading }
}

function App () {
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search })

  const searchDebounce = useDebouncedCallback(search => {
    getMovies({ search })
  }, 500)

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ search })
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    updateSearch(newSearch)
    searchDebounce(newSearch)
  }

  return (
    <div className='page'>
      <header className='header'>
        <h1>Buscador de películas</h1>
        <form className='header__form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} type='text' />
          <button>Buscar</button>
        </form>
        {error && <p style={{ color: '#f00' }}>{error}</p>}
      </header>
      <main className='main'>
        {
          loading
            ? <p>Cargando ...</p>
            : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
