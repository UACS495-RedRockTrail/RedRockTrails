import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

//basic login component
const LoginScreen = () => {
    const [loginText, loginChangeText] = React.useState('');
    const [passwordText, passwordChangeText] = React.useState('');

    return (
      <View>
        <Text>Login Screen</Text>
        <TextInput 
            style={style.inputStyle}
            placeholder="Email Address"
            onChangeText={newText => loginChangeText(newText)}
            defaultValue={loginText}
            keyboardType="default"
        />
        <TextInput 
            style={style.inputStyle}
            placeholder="Password"
            onChangeText={newText => passwordChangeText(newText)}
            defaultValue={passwordText}
            keyboardType="default"
        />
        <Button
            title="Login"
            color = "green"
            //onPress={}
        />
        <Text> {loginText} </Text>
        <Text> {passwordText} </Text>
      </View>
    );
};

const style = StyleSheet.create({
    inputStyle: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
});
  

export default LoginScreen;