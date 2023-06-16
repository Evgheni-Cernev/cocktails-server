import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 110,
        backgroundColor: '#1A1919',
        borderRadius: 20,
        marginBottom: 10,
        padding: 12,
    },
    imageContainer: {
        position: 'relative',
        height: 100,
        width: '80%',
        overflow: 'hidden',
        marginRight: 25,
        borderRadius: 15,
        alignSelf: 'center',
    },
    image: {alignSelf: 'auto', width: '100%', height: '100%', resizeMode: 'contain', zIndex: 1},
    imageBG: {
        top: '-200%',
        left: '-200%',
        position: 'absolute',
        width: '500%',
        height: '500%',
        resizeMode: 'contain',
    },
    selectSection: {
        width: '50%',
        flexDirection: 'row',
    },
    selectContainer: {
        marginRight: 12,
        flexDirection: 'row',
    },
    select: {
        backgroundColor: '#1C1C1C',
        borderColor: '#5E6006',
        alignSelf: 'center',
        borderWidth: 2,
        width: 27,
        height: 27,
        borderRadius: 50,
    },
    active: {
        backgroundColor: '#BDBF53',
        borderColor: '#5E6006',
        alignSelf: 'center',
        borderWidth: 2,
        width: 27,
        height: 27,
        borderRadius: 50,
    },
    infoSection: {
        width: '50%',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 18,
        textAlign: 'left',
    },
});
