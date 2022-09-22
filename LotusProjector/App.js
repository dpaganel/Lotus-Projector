import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, View, Button } from 'react-native';
import {
GoogleSignin,
GoogleSigninButton,
statusCodes,
} from 'react-native-google-signin';
import { fetchUser } from './UserFetch.js';

var fetched_user = {};
var fetched_username;
var fetched_name;
var fetched_tweets;

class App extends Component {
    // Create states that will eventually be replaced by user input and returned objects from
    // Twitter API
    state = {
        tweetHandle: ' ',
        handleFinal: ' ',
        username: ' ',
        name: ' ',
        tweets: ' '
    }

    handleHandle = (text) => {
        this.setState({ tweetHandle: text})
    }
    finishHandle = (text) => {
        this.setState({handleFinal:this.state.tweetHandle})
    }

    handleClick = async () => {
        fetched_user = await fetchUser(this.state.tweetHandle)
        fetched_username = fetched_user.data.username
        fetched_name = fetched_user.data.name
        fetched_tweets = fetched_user.data.public_metrics.tweet_count
        console.log(fetched_username)
        console.log(fetched_user.data.username)
        this.setState({username: fetched_username})
        this.setState({name: fetched_name})
        this.setState({tweets: fetched_tweets})
    }

    /*The first text view is just the current working title. The Text input is where
    * the user can input the handle, which modifies variable tweetHandle
    * when the button is pressed, the variable handleFinal takes the current value of
    * tweetHandle, so we'll input handleFinal into the twitter API search
    */
    render (){
        return (
        <View style={styles.container}>
            <Text style = {styles.container}>LOTUS PROJECTOR</Text>
            <TextInput
                style={{
                height:40,
                borderColor: 'red',
                borderWidth: 1,
                color:'red'
                }}
                defaultValue="Enter twitter handle"
                onChangeText = {this.handleHandle}
            />
            <Button
                title="Check"
                color="red"
                onPress={this.handleClick}
            />
            <Text style = {styles.container}>username: {this.state.username} </Text>
            <Text style = {styles.container}>name: {this.state.name} </Text>
            <Text style = {styles.container}>tweet count: {this.state.tweets} tweets</Text>
        </View>

        )
    }
    // Comments can't be placed in a render block
}

export default App;
// This style sheet lets us quickly choose what text looks like.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'black',
        color:'white',
        fontWeight:'bold'
    }
})

