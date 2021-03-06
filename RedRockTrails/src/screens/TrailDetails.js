import { Children } from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";

const summary = "This greenway runs along the former Birmingham Mineral Railroad grade on the north face of Red Mountain, offering views of Vulcan, the world’s largest cast iron statue from below, and amazing views of downtown Birmingham and Jones Valley from above. The new western half of the trail is completed and continues along the Mineral Railroad bed to Greensprings Highway. This second mile is crushed stone.";
const parking = "A new parking lot is available on Richard Arrington Boulevard under the Vulcan Statue where the trail meets the road. The lot is open from dawn to dusk, and the gate closes at night."
const amenities = "Trash cans, benches, and bathrooms available at Vulcan Park and Museum"

// Simple component to create title for information
const Title = (props) => {
    return (
        <Text style={{
            fontWeight: 'bold', 
            textDecorationLine: 'underline',
            marginBottom: 5,
        }}>
            {props.children}
        </Text>
    )
}

// Trail Detail component
const TrailDetails = ({route, navigation}) => {
    const {info} = route.params;

    return (
        <View style={styles.container}>

            {/* Container for "Image" and has "Image" style */}
            <View style={styles.imageContainer}>
                <Image source={{ uri: "https://imgs.6sqft.com/wp-content/uploads/2017/01/10140523/hiking-trail.jpg" }} style={styles.image } />
                <Text style={styles.imageText}> {info.Name} </Text>
            </View>
            
            {/* Container for "Summary" and summary text for the trail */}
            <View style={styles.summaryContainer}>
                <Title>Route Narrative</Title>
                <Text style={styles.text}>{summary}</Text>
            </View>

            {/* Container for "additional information" */}
            {/* The individul information items (Length, Corridor, etc.) */}
            <View style={styles.infoContainer}>
                <View style={styles.info}>
                    <Title>Parking</Title>
                    <Text style={styles.text}>{parking}</Text>
                </View>
                <View style={styles.info}>
                    <Title>Amenities</Title>
                    <Text style={styles.text}> {amenities} </Text>
                </View>
            </View>
            
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        paddingBottom: 120,

        flexDirection: "column",

        backgroundColor: "#B9A394",

    },
    imageContainer: {
        flex: 1.2,

        borderRadius: 5,
        borderColor: "black",
        borderWidth: 2,

        marginBottom: 10,

        // Gives elevated look
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 5, // Used for Android
    }, 
    image: {
        flex: 1,

    },
    imageText: {
        position: 'absolute',
        textAlign: "center",
        alignSelf: "flex-start",

        top: "85%",
        right: 0,
        left: 0,
        bottom: 0,

        color: "#FFFFFF",
        fontSize: 25,
        fontFamily: "Helvetica-Bold",

        backgroundColor: "rgba(50, 50, 50, 0.85)",

        

    },
    summaryContainer: {
        flex: 1,
        padding: 10,
        marginBottom: 0,

        borderRadius: 10,
        backgroundColor: "grey",

    },
    text: {
        color: "white",
        fontFamily: "Helvetica",
        fontSize: 15,
    },
    infoContainer: {
        flex: 1.2,
        flexDirection: 'row',
        justifyContent: 'space-between',

        marginVertical: 5,
  
    },
    info: {
        flex: 1,
        padding: 10,
        margin: 5,

        borderRadius: 10,
        backgroundColor: "grey",
        
    },


    title: {
        fontWeight: "bold",
        textDecorationLine: "underline",
        marginBottom: 5,
    }
})

export default TrailDetails;