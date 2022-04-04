import React, { Component } from "react";
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

class CreateEvent extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      date: "",
      time: "",
      image: "",
      location: "",
      mode: "date",
      show: false,
    };
    console.log(this.props.locationV);
  }
  updateValue(text, field) {
    if (field == "title") {
      this.setState({
        title: text,
      });
    }
    if (field == "date") {
      this.setState({
        date: text,
      });
    }
    if (field == "time") {
      this.setState({
        time: text,
      });
    }
    if (field == "image") {
      this.setState({
        image: text,
      });
    }
    if (field == "location") {
      this.setState({
        location: text,
      });
    }
  }
  submit() {
    let collection = {};
    collection.title = this.state.title;
    collection.date = this.state.date;
    console.warn(collection);

    //perform axios post request
  }
  setDate = (event, dateV) => {
    console.log({ dateV });
    let fDate =
      dateV.getMonth() + 1 + "/" + dateV.getDate() + "/" + dateV.getFullYear();
    this.updateValue(fDate, "date");
  };
  setTime = (event, timeV) => {
    let fTime = timeV.getHours() + ":" + timeV.getMinutes();
    this.updateValue(fTime, "time");
  };
  render() {
    return (
      <View style={{ backgroundColor: "rgba(0,200,0,0.1)", flex: 1 }}>
        <View style={StyleSheet.container}>
          <Text>Hello</Text>
          <TextInput
            placeholder="Event Title"
            style={StyleSheet.input}
            onChangeText={(text) => this.updateValue(text, "title")}
          />

          <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode={"date"}
            is24Hour={true}
            display="default"
            onChange={this.setDate}
          />
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode={"time"}
            is24Hour={true}
            display="default"
            onChange={this.setTime}
          />

          <SelectDropdown
            data={this.locations}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
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
          />

          <TouchableOpacity onPress={() => this.submit()} style={style.button}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    position: "absolute",
    height: "84.5%",
    width: "100%",
    justifyContent: "center",
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

export default CreateEvent;
