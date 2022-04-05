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

const CreateEventScreen = () => {
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

  submit = () => {
    let collection = {};
    collection.title = title;
    collection.date = date;
    console.warn(collection);

    //perform axios post request
  };
  setDateV = (event, dateV) => {
    let fDate =
      dateV.getMonth() + 1 + "/" + dateV.getDate() + "/" + dateV.getFullYear();
    setDate(fDate);
  };
  setTimeV = (event, timeV) => {
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
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ backgroundColor: "rgba(0,200,0,0.1)", flex: 1 }}>
      <View style={style.container}>
        <Text>Hello</Text>
        <TextInput
          placeholder="Event Title"
          style={StyleSheet.input}
          onChangeText={(text) => setTitle(text)}
        />

        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={"date"}
          is24Hour={true}
          display="default"
          onChange={setDateV}
        />
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={"time"}
          is24Hour={true}
          display="default"
          onChange={setTimeV}
        />
        <SelectDropdown
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
          defaultButtonText={"Select Location: "}
        />
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image == null && (
          <Image
            source={require("../../assets/camera.png")}
            style={{ width: 200, height: 200 }}
          />
        )}
        {image != null && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}

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
  button: {
    backgroundColor: "green",
    height: 40,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
  },
});

export default CreateEventScreen;
