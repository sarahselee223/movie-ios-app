import axios from 'axios'
const API_URL = 'http://localhost:5000'

// Movies Routes
export function getMovies() {
  return axios.get(`${API_URL}/movies`)
}

export async function getMovieById(id) {
  const movieRes = await axios.get(`${API_URL}/movies/${id}`)
  const actorsRes = await axios.get(`${API_URL}/movies/${id}/actors`)
  const movie = movieRes.data
  movie.actors = actorsRes.data
  return movie
}

export function createMovie(movie) {
  return axios.post(`${API_URL}/movies`, movie)
}

export function updateMovie(id, movie) {
  return axios.put(`${API_URL}/movies/${id}`, movie)
}

export function deleteMovie(id) {
  return axios.delete(`${API_URL}/movies/${id}`)
}

export function addActorToMovie(movieId, actorId, role) {
  return axios.patch(`${API_URL}/movies/${movieId}/actors/add`, { actorId: parseInt(actorId), role })
}

export function removeActorFromMovie(movieId, actorId, role) {
  return axios.patch(`${API_URL}/movies/${movieId}/actors/remove`, { actorId: parseInt(actorId), role })
}

// export function addActorsToMovie(id, actors) {
//   const actorRequests = actors.map(a => axios.patch(`${API_URL}/movies/${id}/actors/add`, {actorId: a, role: '...'}))
//   return Promise.all(actorRequests)
// }

// Actors Routes
export function getActors() {
  return axios.get(`${API_URL}/actors`)
}

export async function getActorById(id) {
  const actorRes = await axios.get(`${API_URL}/actors/${id}`)
  const moviesRes = await axios.get(`${API_URL}/actors/${id}/movies`)
  const actor = actorRes.data
  actor.movies = moviesRes.data
  return actor
}

export function createActor(actor) {
  return axios.post(`${API_URL}/actors`, actor)
}

export function updateActor(id, actor) {
  return axios.put(`${API_URL}/actors/${id}`, actor)
}

export function deleteActor(id) {
  return axios.delete(`${API_URL}/actors/${id}`)
}

// The Movie DB Routes
export async function getRandomMovie() {
  const latest = await tmdbLatest()
  const randomId = Math.floor((Math.random() * latest.data.id) + 1)
  return axios.get(`https://api.themoviedb.org/3/movie/${randomId}?api_key=${process.env.REACT_APP_TMDB_ID}`)
}

export function tmdbLatest() {
  return axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_TMDB_ID}`)
}