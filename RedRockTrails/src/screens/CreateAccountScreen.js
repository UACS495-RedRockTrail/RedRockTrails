import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

//basic login component
const CreateAccountScreen = () => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [emailAddress, setEmailAddress] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    //const [passwordText, passwordChangeText] = React.useState(null);
    

    return (
      <View style={style.screenView}>
        <Text>Create Account</Text>
        <TextInput 
            style={style.inputStyle}
            placeholder="First Name"
            onChangeText={newText => setFirstName(newText)}
            defaultValue={firstName}
            keyboardType="default"
        />
        <TextInput 
            style={style.inputStyle}
            placeholder="Last Name"
            onChangeText={newText => setLastName(newText)}
            defaultValue={lastName}
            keyboardType="default"
        />
        <TextInput 
            style={style.inputStyle}
            placeholder="Email Address"
            onChangeText={newText => setEmailAddress(newText)}
            defaultValue={emailAddress}
            keyboardType="default"
        />
        <TextInput 
            style={style.inputStyle}
            placeholder="Password"
            onChangeText={newText => setPassword(newText)}
            defaultValue={password}
            keyboardType="default"
        />
        <Button
            title="Create Account"
            color = "green"
            //onPress={}
        />
        <Text> {firstName} </Text>
        <Text> {lastName} </Text>
        <Text> {emailAddress} </Text>
        <Text> {password} </Text>
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
      padding: 10,
    },
});
  

export default CreateAccountScreen;