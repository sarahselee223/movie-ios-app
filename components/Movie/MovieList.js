import React from "react";
import {
    StyleSheet,
    FlatList,
    View,
    Modal,
    Button,
    TouchableOpacity,
    Text,
    Image
} from "react-native";
import MovieItem from './MovieItem'

const MovieList = props => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.openMovieModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.addMovieContainer}>
          <Text style={styles.addMovieFont}>Movie List</Text>
          <Button title="Add Movie"></Button>
        </View>
        <FlatList
          style={styles.listContainer}
          data={props.movies}
          renderItem={(movie) => (
           <MovieItem
             poster_url={movie.item.poster_url}
             movieName={movie.item.name}
             release_date={movie.item.release_date}
             rating={movie.item.rating}
             description={movie.item.description}
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
  addMovieFont: {
    fontSize: 20,
    fontWeight: "bold"
  },
  addMovieContainer: {
    marginTop: 30,
    marginBottom: 20
  },
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