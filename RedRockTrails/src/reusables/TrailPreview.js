import react from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const TrailPreview = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    source={{uri: props.info.uri}}
                    style={styles.image}/>
            </View>
            <View style={styles.previewContainer}>
                <Text style={styles.previewText}>Name: {props.info.name}</Text>
                <Text style={styles.previewText}>Trail Lenght: {props.info.length}</Text>
                <Text style={styles.previewText}>Rating: {props.info.rating}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "20%",

        flexDirection: 'row',
        marginHorizontal: 15,
        marginVertical: 10,

        borderRadius: 5,
        backgroundColor: 'grey',

        // Gives Component a "elevated" look
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.6,
        shadowRadius: 2,  
        elevation: 5 // Used for Android
    },
    imageContainer: {
        flex: 1,
        backgroundColor: 'grey',

        padding: 5,
        borderRadius: 15,
    },
    image: {
        flex: 1,
        borderRadius: 10,
    },
    previewContainer: {
        flex: 1.5,
        justifyContent: 'center',

        marginVertical: 10,
        marginRight: 5,
        paddingLeft: 5,

        borderRadius: 10,
        backgroundColor: '#19535F',
    },
    previewText: {
        paddingBottom: 5,
        color: 'black',
    }

});

export default TrailPreview;