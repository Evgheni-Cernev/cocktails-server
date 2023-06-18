import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  reaction: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '30%',
    backgroundColor: '#000',
    opacity: 0.5,
  },
  deviderVertical: {
    borderRadius: 1,
    backgroundColor: '#000',
    height: 20,
    width: 1,
    opacity: 0.5,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#737500',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#828080',
  },
  buttonContainer: {
    paddingHorizontal: 60,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: '#828080',
  },
});
