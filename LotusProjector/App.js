import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, View, Button } from 'react-native';
import {
GoogleSignin,
GoogleSigninButton,
statusCodes,
} from 'react-native-google-signin';
import { fetchUser } from './UserFetch.js';

var user = {
    username: ' '
}

class App extends Component {
    state = {
        tweetHandle: ' ',
        handleFinal: ' '
    }

    handleHandle = (text) => {
        this.setState({ tweetHandle: text})
    }
    finishHandle = (text) => {
        this.setState({handleFinal:this.state.tweetHandle})
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
                defaultValue="Feed me, Seymore"
                onChangeText = {this.handleHandle}
            />
            <Button
                title="Investigate"
                color="red"
                onPress={() => user.username = fetchUser(this.state.tweetHandle).username}
                
            />
            <Text style = {styles.container}>username: { user.username } </Text>
            <Text style = {styles.container}>name:</Text>
            <Text style = {styles.container}>tweets:</Text>
        </View>
        )
    }
    //Comments can't be placed in a render block
}

export default App;
//This style sheet lets us quickly choose what text looks like.
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

