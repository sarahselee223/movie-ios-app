import React from 'react';
import { StyleSheet, Button, View, ImageBackground } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./assets/movie.jpg')} style={styles.backgroundImage}>
          <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Movies"
              color="white"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Actors"
              color="white"
            />
          </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage : {
    width: '100%', 
    height: '100%', 
    flex: 1,
  },
  buttonsContainer:{
    flex: 1,
    marginTop: 200,
    flexDirection: "row",
    alignSelf: "center"
    // justifyContent: "space-between",
  },
  buttonContainer:{
    margin: 20,
  }
});
