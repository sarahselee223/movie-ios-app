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
    handleChange = (name, value) => {
        this.setState({ ...this.state, [name]: value })
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
                        <Text style={styles.nameText}>Movie Name</Text>
                        <TextInput
                            placeholder="Movie Name"
                            onChangeText={(val)=>this.handleChange('name', val)}
                            style={styles.nameInput}
                        />
                    </View>
                    <View style={styles.nameBox}>
                        <Text style={styles.nameText}>Description</Text>
                        <TextInput
                            placeholder="Description"
                            onChangeText={(val)=>this.handleChange('description', val)}
                            style={styles.nameInput}
                        />
                    </View>
                    <View style={styles.nameBox}>
                        <Text style={styles.nameText}>Release Date</Text>
                        <TextInput
                            placeholder="Release Date"
                            onChangeText={(val)=>this.handleChange('release_date', val)}
                            style={styles.nameInput}
                        />
                    </View>
                    <View style={styles.nameBox}>
                        <Text style={styles.nameText}>Rating</Text>
                        <TextInput
                            placeholder="Rating"
                            onChangeText={(val)=>this.handleChange('rating', val)}
                            style={styles.nameInput}
                        />
                    </View>
                    <View style={styles.nameBox}>
                        <Text style={styles.nameText}>Poster URL</Text>
                        <TextInput
                            placeholder="Poster URL"
                            onChangeText={(val)=>this.handleChange('poster_url', val)}
                            style={styles.nameInput}
                        />
                    </View>
                    <View style={styles.submitButton}>
                        <Button title="Submit"></Button>
                        <Button title="Cancel" onPress={this.closeMovieForm}></Button>
                    </View>
                </View>  
            ): null }
         </View>
        )
    }
}

const styles = StyleSheet.create({
    nameBox: {
        marginTop: 30,
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
    submitButton: {
      marginTop: 30,
      marginBottom: 20
    }

})

export default AddMovieForm