import React from "react";
import { StyleSheet, Button, View,  } from "react-native";

const FrontPage = props => {
  return (
    <View style={styles.buttonsContainer}>
      <View style={styles.buttonContainer}>
        <Button
          onPress={props.onPressButtonMovies}
          title="Movies"
          color="white"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={props.onPressButtonActors}
          title="Actors"
          color="white"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonsContainer:{
        flex: 1,
        marginTop: 180,
        flexDirection: "row",
        alignSelf: "center"
      },
      buttonContainer:{
        margin: 30,
    }
  });

export default FrontPage