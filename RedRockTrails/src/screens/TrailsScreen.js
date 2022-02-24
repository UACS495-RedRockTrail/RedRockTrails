import react from "react";
import { StyleSheet, View, Text } from "react-native";
import SearchBar from "../reusables/SearchBar";
import TrailPreview from "../reusables/TrailPreview";

let trail1 = {
  name: 'Trail1',
  length: '10 miles',
  rating: '5 Stars',
  uri: 'https://images.unsplash.com/photo-1605196560547-b2f7281b7355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJhaWx8ZW58MHx8MHx8&w=1000&q=80',
};

let trail2 = {
  name: 'Trail1',
  length: '50 miles',
  rating: '5 Stars',
  uri: 'https://imgs.6sqft.com/wp-content/uploads/2017/01/10140523/hiking-trail.jpg',
};


const TrailsScreen = () => {
  return (
    <View style={{flex: 1,}}>
      <SearchBar />
      <TrailPreview info={trail1}/>
      <TrailPreview info={trail2}/>
    </View>
  );
};

const style = StyleSheet.create({});

export default TrailsScreen;
