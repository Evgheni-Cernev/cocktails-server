import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    filterContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 16,
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1C1C1C',
        paddingHorizontal: 13,
        borderRadius: 30,
        marginRight: 10,
    },
    input: {
        width: '100%',
        marginLeft: 13,
        color: '#828080',
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: 15,
    },
});
