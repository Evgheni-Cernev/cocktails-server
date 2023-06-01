import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    info: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    name: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        textAlign: 'left',
        letterSpacing: 0.07,
        color: '#FFFFFF',
    },
    devider: {
        marginVertical: 17,
        width: '100%',
        height: 1,
        backgroundColor: '#828080',
    },
    tag: {
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        textAlign: 'left',
        letterSpacing: 0.07,
        color: '#828080',
    },
});