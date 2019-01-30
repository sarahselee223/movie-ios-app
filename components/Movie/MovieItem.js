import React from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image
} from "react-native";

const MovieItem = props => {
    return (
        <TouchableOpacity>
            <View style={styles.listItem}>
                <View style={styles.imageBox}>
                  <Image source={{uri: props.poster_url}} style={styles.placeImage} />
                </View>
                <View style={styles.textBox}>
                <Text style={styles.titleStyle}>
                  {props.movieName}{"\n"}
                    <Text style={styles.contentStyle} numberOfLines={10}>
                    {"\n"}{props.rating}{"\n"}{props.release_date.slice(0,10)}{"\n"}
                    </Text>
                </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  imageBox: {
    width: '40%',
  },
  textBox: {
    width: '60%',
    padding: 10,
  },
  placeImage: {
    height: 200
  },
  listItem: {
    flex:1,
    marginBottom: 15,
    padding: 15,
    backgroundColor: "#eee", 
    flexDirection: "row",
    alignItems: "center",
    flexWrap:'wrap'
  },
  titleStyle: {
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 10,
    fontSize: 20,
    color: "black",
    width: "60%"
  },
  contentStyle: {
    fontWeight: "bold",
    textAlign: "left",
    flexWrap: "wrap",
    marginLeft: 10,
    fontSize: 15,
    color: "black" 
  }
})

export default MovieItem