import React, { Component } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
//import { React } from "react";

//edit screen not settings



class SettingsScreen extends Component{

  state= {
    firstName: 'John',
    lastName: 'John',
    emailAddress: 'HikingGuy882@gmail.com',
    infoUpdated: false,
  };
  onUpdate(){
    this.props.navigation.navigate({
      name:'ProfileScreen',
      params:{fName: this.state.firstName, lName: this.state.lastName, eMail: this.state.emailAddress},
      merge: true,
    });
  }
  renderUpdateButton(){
    if(this.state.infoUpdated){
      return (
        <View>
          <Button
            onPress={() => this.onUpdate()}
            title="Update Information"
            color="green"
           />
        </View>
      );
    }
    return null;
  }
  handleChange(name, value){
    this.setState({
      [name]: value,
      infoUpdated: true,
    });
  }
  render(){
    return (
      <View style={style.screenView}>
        <View style={style.container}>
          <Text style={style.textInputStyle}> Personal Information </Text>
          <TextInput 
              style={style.inputStyle}
              placeholder="First Name"
              onChangeText={(text) => this.handleChange('firstName', text)}
              defaultValue={this.state.firstName}
              keyboardType="default"
          />
          <TextInput 
              style={style.inputStyle}
              placeholder="First Name"
              onChangeText={(text) => this.handleChange('lastName', text)}
              defaultValue={this.state.lastName}
              keyboardType="default"
          />
          <TextInput 
              style={style.inputStyle}
              placeholder="First Name"
              onChangeText={(text) => this.handleChange('emailAddress', text)}
              defaultValue={this.state.emailAddress}
              keyboardType="default"
          />
          {this.renderUpdateButton()}
        
        </View>
      </View>
    );
  }
}


const style = StyleSheet.create({
  screenView: {
    backgroundColor: "rgba(0,200,0,0.1)",
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 10,
    position: "absolute",
    height: "84.5%",
    width: "100%",
  },
  inputStyle: {
    height: 40,
    margin: 8,
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 20,
    backgroundColor: "white",
  },
  textInputStyle: {
    paddingLeft: 10,
    fontSize: 18,
    paddingBottom: 5,
    fontFamily: "Helvetica-Bold",
    color:"black",
  },
});

export default SettingsScreen;