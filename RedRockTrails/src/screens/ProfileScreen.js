import react from "react";
import { StyleSheet, View, Text, Button, ScrollView, Image } from "react-native";
import { React, useState } from "react";
import { SafeAreaView } from "react-native-web";

// const testPerson = {
//   fName: "John",
//   lName: "John",
//   username: "hikingguy882",
//   email: "RealPersonEmail@gmail.com",
//   uri: "https://images.unsplash.com/photo-1605196560547-b2f7281b7355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJhaWx8ZW58MHx8MHx8&w=1000&q=80",
// };

const ProfileScreen = ({route, navigation}) => {
  const { fName, lName, eMail } = route.params;
  const testUri = 'https://images.unsplash.com/photo-1605196560547-b2f7281b7355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJhaWx8ZW58MHx8MHx8&w=1000&q=80';
  // console.log(fName);
  // console.log(lName);
  return (
    <View style={style.container}>
      <ScrollView style={style.scrollView} contentContainerStyle={{justifyContent: 'center', alignItems: 'center',}}>
        <View style={style.paddingView}> 
        </View>
        <View style={style.content}>
          {/* <Text> Profile screen </Text>
          <Text> This is a work in progress </Text> */}
          <Image source={{uri: testUri}} style={style.profilePhoto}/>
          <Text style={style.personText}> {fName} {lName} </Text>
        </View>
        <View style={style.paddingView}> 
        </View>

        <View style={style.content2}> 
          <Text> item 1 </Text>
        
        </View>
        
        <View style={style.paddingView}> 
        </View>

        <View style={style.content2}> 
          <Text> item 2 </Text>
        
        </View>

        {/* <View style={style.content3}> 
          
        </View> */}

        
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(0,200,0,0.1)",
  },
  scrollView: {
    width: "100%",
    
  },
  content:{ //profile image and name
    // flexDirection: "column",
    backgroundColor: "rgba(0,200,0,0.3)",
    //flex: 1,
    height: 250,
    width: 200,
    alignItems: "center",
    borderRadius: 15,
    width: "90%",
    padding:"7%",
  },
  content2:{
    // flexDirection: "column",
    backgroundColor: "white",
    height: 100,
    width: "90%",
    borderRadius: 15,
    //flex: 2,
  },
  content3:{
    //flexDirection: "column",
    backgroundColor: "black",
    height: 300,
    opacity:0,
    //flex: 3,
  },
  paddingView:{
    backgroundColor: "rgba(0,200,0,0.1)",
    height: 20,
    width: "90%",
    opacity: 0,
  },
  profilePhoto:{
    height:150,
    width:150,
    borderRadius:75,
    //position: "absolute",
    alignItems: 'center',
    justifyContent: "center",
    padding: 20,
    borderColor: "green",
    borderWidth: 2,
  },
  personText:{
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    padding: 20,
    color:"white",
    textShadowColor: "black",
    textShadowRadius:2,
  },
});

export default ProfileScreen;
