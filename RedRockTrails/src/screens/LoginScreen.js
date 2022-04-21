import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";



class LoginScreen extends Component{

  state= {
    login: '',
    password: '',
    validLogin: true,
    loginchecked: false,
    statement: '',
  };
  loginTest(){
    const testCreds = {
      testLogin: 'ABC',
      testPassword: 'ABC',
    };
    if(testCreds.testLogin === this.state.login && testCreds.testPassword === this.state.password){
      this.setState({statement: 'Correct Login'});
      //this will navigate to trail screen
    }
    else{
      this.setState({statement: 'Incorrect Login'});
    }
  }
  render(){
    return (
      <View style={style.screenView}>
        <Text style={style.textInputStyle}> Login </Text>
        <TextInput 
            style={style.inputStyle}
            placeholder="Email Address"
            onChangeText={login => this.setState({login})}
            defaultValue={this.state.login}
            keyboardType="default"
        />
        <TextInput 
            style={style.inputStyle}
            placeholder="Password"
            onChangeText={password => this.setState({password})}
            defaultValue={this.state.password}
            keyboardType="default"
        />
        <Button
            title="Login"
            color = "green"
            onPress={() => this.loginTest()}
        />
        <Button
            title="Continue as Guest"
            color = "green"
            onPress={() => this.props.navigation.navigate("Main")}
        />
        <Text> {this.state.statement} </Text>
        <Text> {this.state.login} </Text>
        <Text> {this.state.password} </Text>
      </View>
    );
  }
}



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