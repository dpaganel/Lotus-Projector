import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';
import {
GoogleSignin,
GoogleSigninButton,
statusCodes,
} from 'react-native-google-signin';

class App extends Component {
    state = {
        tweetHandle: ' '
    }
    handleHandle = (text) => {
        this.setState({ tweetHandle: text})
    }
    render (){
        return (
        <View style={styles.container}>
            <Text>LOTUS PROJECTOR</Text>
            <TextInput
                style={{
                height:40,
                borderColor: 'red',
                borderWidth: 1
                }}
                defaultValue="Feed me, Seymore"
                onChangeText = {this.handleHandle}
            />
            <Text>{this.state.tweetHandle}</Text>
        </View>
        )
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})