import { Children } from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";

const summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const parking = "On road near trailhead"
const amenities = "Benches, Lighting, Picnic Tables, Safety Fencing"

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
                <Image source={{ uri: info.uri }} style={styles.image } />
                <Text style={styles.imageText}> {info.name} </Text>
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
        top: "85%",
        right: 0,
        left: 0,
        bottom: 0,

        color: "#FFFFFF",
        fontSize: 25,
        fontFamily: "Helvetica-Bold",

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