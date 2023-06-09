import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
      marginHorizontal: 10,
    },
    bookContainer: {
      display: 'flex',
      marginTop: 5,
      alignSelf: 'center',
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
  
    keyboardSaveContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#252525',
      paddingHorizontal: 26,
      paddingBottom: 17,
      paddingTop: 10,
    },
    closeButtonContainer: {
      paddingVertical: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#252525',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    closeButton: {
      width: 39,
      backgroundColor: '#6A6A6A',
      height: 4,
      borderRadius: 2,
    },
    keyboardInputContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: '#252525',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    keyboardInput: {
      width: '90%',
      height: 35,
      borderWidth: 1,
      borderColor: '#1D1D1D',
      borderStyle: 'solid',
      borderRadius: 5,
      paddingLeft: 10,
      fontSize: 14,
      color: '#828080',
    },
  });