import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#000000',
    flex: 1,
    paddingHorizontal: 10,
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#000000',
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  sendContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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

  imageContainer: {
    position: 'relative',
    height: 55,
    width: 55,
    borderRadius: 100,
    alignSelf: 'center',
    overflow: 'hidden',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#5E6006',
    marginRight: 20,
    // backgroundColor: "#828080"
  },
  image: {
    alignSelf: 'auto',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  cardContainer: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
  },

  buttonContainer: {
    paddingHorizontal: 60,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: '#828080',
    marginTop: 'auto',
    
  },
});
