import React, { useState, useEffect } from "react";
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
import RRTApi from "../api/RRTApi";

const CreateEventScreen = (props) => {
  const [locationV, setLocationV] = useState([]);

  function getTrails() {
    RRTApi.get("Trails/ListTrails")
      .then(async function (response) {
        setLocationV(response.data.Trails); // Store trail data in array
        var tempV = [];
        for (let x in response.data.Trails) {
          tempV.push(response.data.Trails[x].Name);
        }
        setLocationV(tempV);
      })
      .catch(function (error) {
        console.log(error); // Print any errors to console
      });
  }
  useEffect(() => {
    getTrails();
  }, []);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [dateTimeTemp, setDateTimeTemp] = useState(new Date());

  const submit = () => {
    //objects are not null do the following two    FIXME
    //perform axios post request
    //iprops.navigation.goBack();
    console.log(title, date, time, location);
    if (
      image != "" &&
      title != "" &&
      date != "" &&
      time != "" &&
      location != ""
    ) {
      RRTApi.post("ContentExplorer/CreateExplorer", {
        Title: String(title),
        Date: date,
        Time: time,
        Location: location,
        Image:
          "https://pbs.twimg.com/media/D_Hs9C-WkAA8gtz?format=jpg&name=4096x4096",
        AccountId: 3,
        Description: "",
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error.response.data);
        });
      props.navigation.navigate("EngageScreen");
    }
  };
  const setDateV = (event, dateV) => {
    let fDate =
      dateV.getMonth() + 1 + "/" + dateV.getDate() + "/" + dateV.getFullYear();
    setDate(fDate);
    setDateTimeTemp(dateV);
  };
  const setTimeV = (event, timeV) => {
    let fTime = timeV.getHours() + ":" + timeV.getMinutes();
    setTime(fTime);
    setDateTimeTemp(timeV);
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
            value={dateTimeTemp}
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
            value={dateTimeTemp}
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
          {image == "" && (
            <Image
              source={require("../../assets/camera.png")}
              style={{ width: 200, height: 200, alignSelf: "center" }}
            />
          )}
          {image != "" && (
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
