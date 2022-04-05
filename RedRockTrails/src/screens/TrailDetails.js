import { StyleSheet, View, Text, ScrollView, Image } from "react-native";

const summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const TrailDetails = ({route, navigation}) => {
    const {info} = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: info.uri }} style={styles.image } />
                <Text style={styles.imageText}> {info.name} </Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.summary}>{summary}</Text>
                <Text>Trail Name: {info.name} </Text>
            </View>
            
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        flexDirection: "column",

        backgroundColor: "#B9A394",

    },
    imageContainer: {
        flex: 1,

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
    infoContainer: {
        flex: 2,
        padding: 10,
        marginBottom: "5%",
        borderRadius: 10,
        backgroundColor: "grey",

        
    },
    summary: {
        color: "white",
        fontFamily: "Helvetica",
        fontSize: 15,
    }
})

export default TrailDetails;