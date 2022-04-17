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


const TrailsScreen = ({navigation}) => {
  
  const [trails, setTrails] = useState([]);

  useEffect( () => {
    getTrails()
  }, [])

  // GET trail details and stores in trails array.
  function getTrails() {
    trailAPI.get('Trails/ListTrails').then(async function(response){
      setTrails(response.data); // Store trail data in array
      
    }).catch(function(error){
      console.log(error)        // Print any errors to console
    })
  }

  if (!trails) return null;
  
  return (

    <View style={{ backgroundColor: "rgba(0,200,0,0.1)", flex: 1 }}>
      <View style={style.container}>

        <SearchBar />
        <FlatList 
          data={trails.Trails}
          keyExtractor={ (item) => item.Id}
          renderItem={( {item} ) => (
            <TrailPreview info={item} nav={navigation} />
          )}
        />

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
