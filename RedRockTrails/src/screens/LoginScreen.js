import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

//basic login component
const LoginScreen = () => {
  const [loginText, loginChangeText] = React.useState('');
  const [passwordText, passwordChangeText] = React.useState('');

  return (
    <View style={style.screenView}>
      <Text style={style.textInputStyle}> Login </Text>
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
  screenView: {
    backgroundColor: "rgba(0,200,0,0.1)",
    flex: 1,
  },
  inputStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 20,
    backgroundColor: "white",
  },
  textInputStyle: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "Helvetica-Bold",
    padding: 40,
    color:"black",
  },
});
  

export default LoginScreen;