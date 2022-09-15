import React from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';
import {
GoogleSignin,
GoogleSigninButton,
statusCodes,
} from 'react-native-google-signin';

const App = () => {
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
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default App;
