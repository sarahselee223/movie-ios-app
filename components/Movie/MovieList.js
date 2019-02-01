import React from "react";
import {
    StyleSheet,
    FlatList,
    View,
    Modal,
    Button
} from "react-native";
import MovieItem from './MovieItem'
import AddMovieForm from './AddMovieForm'

const MovieList = props => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.openMovieModal}
    >
      <View style={styles.modalContainer}>
        <AddMovieForm
          fetchMovies={props.fetchMovies}/>
        <FlatList
          style={styles.listContainer}
          data={props.movies}
          renderItem={(movie) => (
           <MovieItem
             poster_url={movie.item.poster_url}
             movieName={movie.item.name}
             release_date={movie.item.release_date}
             rating={movie.item.rating}
             id={movie.item.id}
             description={movie.item.description}
             deleteMovie={props.deleteMovie}
             updateMovie={props.updateMovie}
           /> 
          )}
        />
        <View>
          {/* <Button title="Delete" color="red" onPress={props.onItemDeleted} /> */}
          <Button title="Close" onPress={props.closeMovieModal} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({

  listContainer: {
    marginBottom: 50,
    width: "100%",
  },
  modalContainer: {
    margin: 22,
    marginBottom: 100,
    paddingRight: 15,
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  
});

export default MovieList