import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 100,
        height: 50,
        backgroundColor: '#2e2e2e',
    },
    menuItem: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 10,
        marginRight: 10,
    },
    menuItemText: {
        fontSize: 16,
    },
});