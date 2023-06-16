import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        paddingHorizontal: 0,
        backgroundColor: '#000000',
    },
    headerContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    icon: {
        marginRight: 29,
    },
    title: {
        maxWidth: 250,
        color: '#fff',
        fontWeight: '700',
        fontSize: 38,
    },
    devider: {
        marginVertical: 17,
        width: '100%',
        height: 1,
        backgroundColor: '#828080',
    },
});