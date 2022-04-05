import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import SelectDropdown from "react-native-select-dropdown";
import * as ImagePicker from "expo-image-picker";

const CreateEventScreen = (props) => {
  const locationV = [
    "Trail1",
    "Trail2",
    "Trail3",
    "Trail4",
    "Trail5",
    "Trail6",
  ];
  const [title, setTitle] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);

  const submit = () => {
    let collection = {};
    collection.title = title;
    collection.date = date;

    console.warn(collection);

    //objects are not null do the following two    FIXME
    //perform axios post request
    //iprops.navigation.goBack();
  };
  const setDateV = (event, dateV) => {
    let fDate =
      dateV.getMonth() + 1 + "/" + dateV.getDate() + "/" + dateV.getFullYear();
    setDate(fDate);
  };
  const setTimeV = (event, timeV) => {
    let fTime = timeV.getHours() + ":" + timeV.getMinutes();
    setTime(fTime);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    //SET image uri here setImage(uri) FIXME

    /*const data = new FormData();
  
  data.append("uploadFile", {
    name: filename,
    type: filetype,
    uri:
      Platform.OS === "android"
        ? fileuri
        : fileuri.replace("file://", "")
  });
 var url = uploadDoc

  axios.post(url, data, {headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
    Authorization: authToken

  }})
  .then((res) => {
   
  })
  .catch((err) => {
   
  })*/
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ backgroundColor: "rgba(0,200,0,0.1)", flex: 1 }}>
      <View style={style.container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={style.titleText}>Event Title:</Text>
          <TextInput
            placeholder="Red Rock Marathon"
            style={style.input}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={style.titleText}>Event Date:</Text>
          <DateTimePicker
            style={style.dateTimeStyle}
            testID="dateTimePicker"
            value={new Date()}
            mode={"date"}
            is24Hour={true}
            display="default"
            onChange={setDateV}
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={style.titleText}>Event Time:</Text>
          <DateTimePicker
            style={style.dateTimeStyle}
            testID="dateTimePicker"
            value={new Date()}
            mode={"time"}
            is24Hour={true}
            display="default"
            onChange={setTimeV}
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={style.titleText}>Event Location:</Text>
          <View style={{ marginLeft: 15 }}>
            <SelectDropdown
              buttonStyle={{
                backgroundColor: "rgba(0,200,0,0.1)",
                borderRadius: 12,
              }}
              dropdownStyle={{
                backgroundColor: "lightgrey",
                borderRadius: 12,
              }}
              data={locationV}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                setLocation(selectedItem);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
              defaultButtonText={"Trail "}
            />
          </View>
        </View>
        <View>
          <Button
            title="Select an image from camera roll"
            onPress={pickImage}
            color="green"
          />
          {image == null && (
            <Image
              source={require("../../assets/camera.png")}
              style={{ width: 200, height: 200, alignSelf: "center" }}
            />
          )}
          {image != null && (
            <Image
              source={{ uri: image }}
              style={{
                width: 200,
                height: 200,
                alignSelf: "center",
                borderColor: "lightgreen",
                borderRadius: 15,
                borderWidth: 5,
              }}
            />
          )}
        </View>
        <TouchableOpacity onPress={() => submit()} style={style.button}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    position: "absolute",
    height: "84.5%",
    width: "100%",
    justifyContent: "space-around",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
  input: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#B9A394",
  },
  button: {
    backgroundColor: "green",
    height: 40,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
  },
  dateTimeStyle: {
    height: 50,
    width: 150,
    justifyContent: "space-evenly",
  },
});

export default CreateEventScreen;
