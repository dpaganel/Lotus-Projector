import React from 'react';
import { Text,TextInput, View } from 'react-native';
import {
GoogleSignin,
GoogleSigninButton,
statusCodes,
} from 'react-native-google-signin';

const App = () => {
    return (
        <View
            style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
            }}>
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
export default App;
