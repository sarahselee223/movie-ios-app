import React from 'react';
import { StyleSheet, View, ImageBackground, Modal } from 'react-native';
import FrontPage from './components/FrontPage'
import MovieList from './components/Movie/MovieList'
import { getMovies, getActors, deleteMovie} from './api'

export default class App extends React.Component {
  
  state = {
    movies: [],
    actors: [],
    openMovieModal: false,
    openActorModal: false,
    selectedMovie: null,
    selectedActor: null,
  }

  componentDidMount() {
    this.fetchMovies()
    this.fetchActors()
  }

  fetchMovies = async () => {
    const { data } = await getMovies()
    this.setState({ movies: data })
  }

  fetchActors = async () => {
    const { data } = await getActors()
    this.setState({ actors: data })
  }

  deleteMovie = async (id) => {
    try{
      await deleteMovie(id)
      this.fetchMovies()
    }
    catch(e){
      console.warn(e)
    }
  }


  onPressButtonMovies = () => {  
    this.setState({
      openMovieModal: true
    })
  }

  onPressButtonActors = () => {
    console.warn(this.state.actors)
  }

  closeMovieModal = () => {
    this.setState({
      openMovieModal:false
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./assets/movie.jpg')} style={styles.backgroundImage}>
          <MovieList
            movies={this.state.movies}
            openMovieModal={this.state.openMovieModal}
            closeMovieModal={this.closeMovieModal}
            fetchMovies={this.fetchMovies}
            deleteMovie={this.deleteMovie}
            updateMovie={this.updateMovie}
          />
          <FrontPage 
            onPressButtonMovies={this.onPressButtonMovies}
            onPressButtonActors={this.onPressButtonActors}/>
        </ImageBackground>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage : {
    width: '100%', 
    height: '100%', 
    flex: 1,
  },
  
});
