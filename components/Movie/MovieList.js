import React from "react";
import { StyleSheet, FlatList, View, Modal, Button, TouchableOpacity, Text } from "react-native";

const MovieList = props => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.openMovieModal}
    >
      <View style={styles.modalContainer}>
        <FlatList
          style={styles.listContainer}
          data={props.movies}
          renderItem={(movie) => (
            <TouchableOpacity>
              <View style={styles.listItem}>
                <Text style={styles.titleStyle}>{movie.item.name}</Text>
              </View>
            </TouchableOpacity>
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
    marginTop: 200,
    width: "100%",
  },
  modalContainer: {
    margin: 22,
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee", 
    flexDirection: "row",
    alignItems: "center"
  },
  titleStyle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28,
    color: "black" 
  }
});

export default MovieList