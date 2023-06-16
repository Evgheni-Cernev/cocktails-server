import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#000000', flex: 1, paddingHorizontal: 0,
    },
    wrapper: {
        flex: 1,
        backgroundColor: '#000000',
    },
    bookIcon: {
        marginHorizontal: '32%',
    },
    headerContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
    },
    bookContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1C1C1C',
        borderColor: '#5E6006',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 40,
        width: 55,
        height: 55,
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
    buttonsContainer: {
        display: 'flex',
        position: 'relative',
        backgroundColor: 'transparent',
        borderRadius: 3,
        overflow: 'hidden',
    },
    deviderKeyboard: {
        width: '100%',
        height: 1,
        backgroundColor: '#828080',
    },
});