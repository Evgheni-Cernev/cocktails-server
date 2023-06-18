import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  friendItem: {
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  friendItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#737500',
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#828080',
  },
  select: {
    backgroundColor: '#1C1C1C',
    borderColor: '#5E6006',
    alignSelf: 'center',
    borderWidth: 2,
    width: 27,
    height: 27,
    borderRadius: 50,
  },
  active: {
    backgroundColor: '#BDBF53',
    borderColor: '#5E6006',
    alignSelf: 'center',
    borderWidth: 2,
    width: 27,
    height: 27,
    borderRadius: 50,
  },
});
