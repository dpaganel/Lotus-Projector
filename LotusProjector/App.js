import React from 'react';
import { Text, View } from 'react-native';
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
        </View>
    )
}
export default App;
