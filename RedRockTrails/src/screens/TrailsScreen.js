import react, {useState, useEffect, useDebugValue} from "react";
import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-web";
import SearchBar from "../reusables/SearchBar";
import TrailPreview from "../reusables/TrailPreview";
import trailAPI from "../api/RRTApi";
// import axios from "axios"

let hughKaul = {
  name: "Hugh Kaul Trail",
  corridor: "Jones Valley",
  length: "1.90 miles",
  rating: "5 Stars",
  uri: "https://images.unsplash.com/photo-1605196560547-b2f7281b7355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJhaWx8ZW58MHx8MHx8&w=1000&q=80",
};

let kiwanis = {
  name: "Kiwanis Vulcan Trail",
  corridor: "Jones Valley",
  length: "2.28 miles",
  rating: "5 Stars",
  uri: "https://imgs.6sqft.com/wp-content/uploads/2017/01/10140523/hiking-trail.jpg",
};

let watkins = {
  name: "Watkins Brook",
  corridor: "Shades Creek",
  length: "0.49 miles",
  rating: "5 Stars",
  uri: "https://images.unsplash.com/photo-1605196560547-b2f7281b7355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJhaWx8ZW58MHx8MHx8&w=1000&q=80",
};

let clairmont = {
  name: "Clairmont Walking Trail",
  corridor: "Jones Valley",
  length: "0.08 miles",
  rating: "5 Stars",
  uri: "https://imgs.6sqft.com/wp-content/uploads/2017/01/10140523/hiking-trail.jpg",
};

const TrailsScreen = ({navigation}) => {
  
  const [trails, setTrails] = useState([]);

  useEffect( () => {
    getTrails()
  }, [])

  // GET trail details and stores in trails array.
  function getTrails() {
    trailAPI.get('Trails/ListTrails').then(async function(response){
      setTrails(response.data); // Store trail data in array
      console.log(trails);      // Print data to console to insure it's there
    }).catch(function(error){
      console.log(error)        // Print any errors to console
    })
  }

  if (!trails) return null;


  return (

    <View style={{ backgroundColor: "rgba(0,200,0,0.1)", flex: 1 }}>
      <View style={style.container}>

        <SearchBar />
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
          <View style={style.itemContainer}>
            <TrailPreview info={hughKaul} nav={navigation}/>
            <TrailPreview info={kiwanis} nav={navigation}/>
            <TrailPreview info={watkins} nav={navigation}/>
            <TrailPreview info={clairmont} nav={navigation}/>
            <TrailPreview info={clairmont} nav={navigation}/>
            <TrailPreview info={clairmont} nav={navigation}/>
          </View>
        </ScrollView>

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
  },
  itemContainer: {
    flexDirection: "column",
    flex: 1,
  },
});

export default TrailsScreen;

// TODO:
// - Make background color easier on eyes
// - Add scrollability
