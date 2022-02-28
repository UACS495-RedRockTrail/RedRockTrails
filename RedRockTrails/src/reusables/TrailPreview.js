import react from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-web";

const TrailPreview = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    source={{uri: props.info.uri}}
                    style={styles.image}/>
            </View>
            <View style={styles.previewContainer}>
                <Text style={styles.previewTitle}>{props.info.name}</Text>
                <Text style={styles.previewText}>{props.info.corridor}</Text>
                <Text style={styles.previewText}>Length: {props.info.length} {'\u25CF'} {props.info.rating}</Text>
                {/* <Text style={styles.previewText}>Rating: {props.info.rating}</Text> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "30%",

        flexDirection: 'column',
        marginHorizontal: 15,
        marginTop: 20,

        borderRadius: 10,
        backgroundColor: '#B9A394',

        // Gives Component a "elevated" look
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.6,
        shadowRadius: 2,  
        elevation: 5 // Used for Android
    },
    imageContainer: {
        flex: 2,
        padding: 0,
        margin: 0,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
    image: {
        flex: 1,
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10,

    },
    previewContainer: {
        flex: 0.3,
        justifyContent: 'center',

        marginRight: 5,
        paddingLeft: 10,

        borderRadius: 10,


    },
    previewTitle: {
        color: '#FFF',
        fontSize: 20,
        color: '#432534',
        fontFamily: 'Helvetica-Bold',

    },
    previewText: {
        paddingTop: 5,
        color: 'black',

        fontFamily: 'Helvetica',
        fontSize: 15,
    }

});

export default TrailPreview;

// TODO:
// - Change Color scheme of component
// - Make previewText Style more clean