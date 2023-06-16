import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    imageContainer: {
        position: 'relative',
        height: 300,
        width: '100%',
        overflow: 'hidden',
        marginHorizontal: 'auto',
        marginBottom: 15,
        borderRadius: 15,
        alignSelf: 'center',
        backgroundColor: "#252525"
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    ingridientsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',

    },
    itemImage: {
        alignSelf: 'auto', width: '100%', height: '100%', resizeMode: 'contain'
    },
    container: {
        flex: 1,
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#1c1c1c',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    image: {
        resizeMode: 'contain',
        margin: 10,
        width: 50,
        height: 50,
        borderRadius: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginVertical: 8,
        color: '#fff',
    },
    text: {
        fontSize: 16,
        fontWeight: '400',
        color: '#fff',
    },
    list: {
        marginVertical: 8,
        color: '#fff',
    },
    listItem: {
        color: '#fff',
    },

    contentContainer: {
        backgroundColor: '#252525',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 30,
        marginBottom: 15
    }
});
