import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1C1C1C',
        paddingHorizontal: 13,
        borderRadius: 30,
        marginBottom: 20
    },
    input: {
        width: '100%',
        color: '#828080',
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: 15,
    },
    container: {
        justifyContent: 'space-between',
        backgroundColor: '#1A1919',
        borderRadius: 30,
        marginBottom: 8,
        padding: 15,
        display: 'flex',
        flexDirection: 'row',
    },
});
