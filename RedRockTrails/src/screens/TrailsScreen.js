import react, {useState, useEffect, useDebugValue} from "react";
import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-web";
import SearchBar from "../reusables/SearchBar";
import TrailPreview from "../reusables/TrailPreview";
import trailAPI from "../api/RRTApi";



const TrailsScreen = ({navigation}) => {
  
  // - Trails is used to store all trails returned by API.
  // - FilteredTrails is used to store and display
  //      trails that come up from search bar.
  const [trails, setTrails] = useState([]);
  const [filteredTrails, setFilteredTrail] = useState([]);

  useEffect( () => {
    getTrails()
  }, [])

  // Search Filter
  // - To be honest, I have not idea how this works.
  //     I found it on a youtube video that only played music...
  //     kinda like those old COD Zombies tutorials back in the day.
  function searchFilter(text) {
    if (text) { 
      const newData = trails.filter( (item) => {
        const itemData = item.Name ? item.Name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredTrail(newData);

    } else {
      setFilteredTrail(trails)
    }
  }

  // GET trail details and stores in trails array.
  function getTrails() {
    trailAPI.get('Trails/ListTrails').then(async function(response){
      setTrails(response.data.Trails); // Store trail data in array
      setFilteredTrail(response.data.Trails);
    }).catch(function(error){
      console.log(error)        // Print any errors to console
    })
  }

  // Returns nothing if request for 
  //   trails was denied.
  if (!trails)  {
    return null;
  }

  if (!filteredTrails) {
    return null;
  }
  

  // TrailsScreens.js Display
  return (

    <View style={{ backgroundColor: "rgba(0,200,0,0.1)", flex: 1 }}>
      <View style={style.container}>

        <SearchBar onTermChange={searchFilter}/>
        <FlatList 
          data={filteredTrails}
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
