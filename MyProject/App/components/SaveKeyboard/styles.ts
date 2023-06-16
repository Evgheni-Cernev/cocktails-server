import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  },
  closeButton: {
    width: 39,
    backgroundColor: '#6A6A6A',
    height: 4,
  },
  keyboardInputContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#252525',
  },
  keyboardInput: {
    width: '100%',
    borderWidth: 1,
    paddingLeft: 10,
    fontSize: 14,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 30,
    borderColor: '#6A6A6A',
    marginVertical: 15
  },

  icon: {
    marginRight: 29,
  },

  devider: {
    marginVertical: 17,
    width: '100%',
    height: 1,
    backgroundColor: '#828080',
  },
  deviderKeyboard: {
    width: '100%',
    height: 1,
    backgroundColor: '#828080',
},
});