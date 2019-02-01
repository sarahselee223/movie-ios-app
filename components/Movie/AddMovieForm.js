import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    TextInput,
    Text,
    TouchableHighlight,
} from "react-native";
import { createMovie } from '../../api'
import CalendarPicker from 'react-native-calendar-picker';

class AddMovieForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
          name: props.name || '',
          description: props.description || '',
          release_date: props.release_date || '',
          rating: props.rating || '',
          poster_url: props.poster_url || '',
          openForm: false,
          success: false,
          error: null,
          loading: false,
          dateOpen: false,
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
    handleDate = () => {
        this.setState({
            dateOpen: !this.state.dateOpen
        })
    }
    setDate=(newDate)=>{
        this.setState({release_date: newDate})
    }
    handleSubmit = async(e) => {
        e.preventDefault()
        const { name, description, release_date, rating, poster_url } = this.state
        const newMovie = {
            name,
            description,
            rating,
            release_date,
            poster_url: poster_url 
        }
        try {
           await createMovie(newMovie)
            this.setState({
                name: '',
                description: '',
                release_date: '',
                rating: '',
                poster_url: '',
                success: true,
                error: null,
                openForm: false,
                dateOpen: false,
              })
            props.fetchMovies()
            }
            
        catch (error) {
            this.setState({
              success: false,
              error: 'Could not create movie.'
            })
        }
    }

    render (){
        return (
        <View style={styles.addMovieContainer}>
            <View>
                {this.state.openForm? (
                    <Text style={styles.addMovieFont}>Add Movie</Text>
                ): <Text style={styles.addMovieFont}>Movie List</Text>}
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
                        <TouchableHighlight
                            onPress={this.handleDate}>
                        <Text>Release Date</Text>
                        </TouchableHighlight>
                    </View>
                    {this.state.dateOpen? (
                        <CalendarPicker
                            onDateChange={this.setDate}
                        />
                    ): null}
                
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
                        <Button title="Submit" onPress={this.handleSubmit}></Button>
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
    dateButton:{
        fontSize: 10,
        color: "grey"
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