
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    imageContainer: {
        position: 'relative',
        height: 135,
        width: '50%',
        overflow: 'hidden',
        marginRight: 25,
        borderRadius: 15,
        alignSelf: 'center',
        backgroundColor: "#828080"
    },
    image: { alignSelf: 'auto', width: '100%', height: '100%', resizeMode: 'contain' },
});