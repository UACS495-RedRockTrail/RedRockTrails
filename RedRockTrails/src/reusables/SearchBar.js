import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={style.backgroundStyle}>
      <Feather name="search" style={style.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={style.inputStyle}
        placeholder="Search"
        onEndEditing={onTermSubmit}
        value={term}
        onChangeText={onTermChange}
      />
    </View>
  );
};

const style = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "palegreen",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    fontSize: 18,
    flex: 1,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
