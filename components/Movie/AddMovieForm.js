import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    TextInput,
    Text,
} from "react-native";

class AddMovieForm extends Component {
    constructor(props) {
        super(props)
        const formattedDate = props.release_date ? new Date(props.release_date).toISOString().substring(0, 10) : ''
        this.state = {
          name: props.name || '',
          description: props.description || '',
          release_date: formattedDate,
          rating: props.rating || '',
          poster_url: props.poster_url || '',
          openForm: false,
          success: false,
          error: null,
          loading: false
        }
    }

    openMovieForm = () => {
        this.setState({
            openForm: true
        })
    }
    closeMovieForm = () => {
        this.setState({
            openForm: false
        })
    }

    render (){
        return (
        <View style={styles.addMovieContainer}>
            <View>
                <Text style={styles.addMovieFont}>Movie List</Text>
                {!this.state.openForm? (
                    <Button title="Add Movie" onPress={this.openMovieForm}></Button>
                ): null}
            </View>
            {this.state.openForm ? (
                <View>
                    <View style={styles.nameBox}>
                        <Text style={styles.nameText}>Name:</Text>
                        <TextInput
                            placeholder="Title"
                            name={this.state.name}
                            onChangeText={this.movieNameChangedHandler}
                            style={styles.nameInput}
                        />
                    </View>
                    <View style={styles.nameBox}>
                        <Text style={styles.nameText}>Description:</Text>
                        <TextInput
                            placeholder="Description"
                            description={this.state.description}
                            onChangeText={this.movieDescriptionChangedHandler}
                            style={styles.nameInput}
                        />
                    </View>
                    <View style={styles.nameBox}>
                        <Text style={styles.nameText}>Release Date:</Text>
                        <TextInput
                            placeholder="Release Date"
                            release_date={this.state.release_date}
                            onChangeText={this.movieDateChangedHandler}
                            style={styles.nameInput}
                        />
                    </View>
                    <View style={styles.nameBox}>
                        <Text style={styles.nameText}>Rating:</Text>
                        <TextInput
                            placeholder="Rating"
                            rating={this.state.rating}
                            onChangeText={this.movieRatingChangedHandler}
                            style={styles.nameInput}
                        />
                    </View>
                    <View style={styles.nameBox}>
                        <Text style={styles.nameText}>Poster URL:</Text>
                        <TextInput
                            placeholder="Poster URL"
                            poster_url={this.state.poster_url}
                            onChangeText={this.moviePosterChangedHandler}
                            style={styles.nameInput}
                        />
                    </View>
                    <Button title="Submit"></Button>
                    <Button title="Cancel" onPress={this.closeMovieForm}></Button>
                </View>  
            ): null }
         </View>
        )
    }
}

const styles = StyleSheet.create({
    nameBox: {
        marginTop: 20,
        flexDirection: "row",
    },
    nameText:{
        width: "30%",
    },
    nameInput:{
        width: "70%",
    },
    addMovieFont: {
      fontSize: 20,
      fontWeight: "bold"
    },
    addMovieContainer: {
      marginTop: 30,
      marginBottom: 20
    },
})

export default AddMovieForm