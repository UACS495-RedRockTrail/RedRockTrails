import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

//basic login component
const LoginScreen = () => {
    const [loginText, loginChangeText] = React.useState(null);
    const [passwordText, passwordChangeText] = React.useState(null);

    return (
      <View>
        <Text>Login Screen</Text>
        <TextInput 
            style={styles.inputStyle}
            loginChangeText={loginChangeText}
            value={loginText}
            placeholder="Login"
            keyboardType="default"
        />
        <TextInput 
            style={styles.inputStyle}
            passwordChangeText={passwordChangeText}
            value={passwordText}
            placeholder="Password"
            keyboardType="default"
        />
        <Button
            title="Login"
            color = "green"
            //onPress={}
        />
      </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
});
  

export default LoginScreen;