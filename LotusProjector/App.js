import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, View, Button } from 'react-native';
import { fetchUser } from './UserFetch.js';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

var fetched_user = {};
var fetched_username;
var fetched_name;
var fetched_tweets;

//// Google Authentication
//GoogleSignin.configure({
//    webClientId: "283064631131-jrq1obuhn753lc2q0oeht5ecpb5l86i5.apps.googleusercontent.com",
//});

//const signInWithGoogle = async () => {
//    // Get user's ID token
//    const {idToken} = await GoogleSignin.signIn();
//    // Create Google credential with token
//    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//    // Sign in with the Google credential
//    const user_sign_in = auth().signInWithCredential(googleCredential);
//    user_sign_in.then((user) => {
//        console.log(user);
//    })
//    .catch((error) => {
//        console.log(error);
//    })
//}

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
                defaultValue=""
                onChangeText = {this.handleHandle}
            />
            <Button
                title="Check Account"
                color="red"

                onPress={this.handleClick}
            />
            <Text style = {styles.container}>username:</Text>
            <Text style = {result_styles.container}>{this.state.username}</Text>
            <Text style = {styles.container}>name:</Text>
            <Text style = {result_styles.container}>{this.state.name}</Text>
            <Text style = {styles.container}>tweet count:</Text>
            <Text style = {result_styles.container}>{this.state.tweets} tweets</Text>
        </View>

        )
    }
    // Comments can't be placed in a render block
    // The below commented Button element used to be in the render block for Google Authentication
    //            <Button
    //                title="Sign in with Google"
    //                onPress={signInWithGoogle}
    //            />
}

export default App;
// This style sheet lets us quickly choose what text looks like.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'black',
        color:'red',
        fontWeight:'bold',
        fontSize: 20
    }
})

const result_styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    }
})

