import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  login: {
    padding: 8,
  },
  forgot: {
    marginTop: 12,
  },
  labelStyle: {
    fontSize: 12,
  },
  textInputContainer: {
    width: '100%',
    backgroundColor: '#e3e3e3',
    paddingBottom: 20,
  },
  textInputContainerDark: {
    width: '100%',
    backgroundColor: '#5a5007',
    paddingBottom: 20,
  },
  textInputStyle: {
    alignItems: 'flex-end',
    textAlign: 'right',
    paddingHorizontal: 10,
    marginTop: 60,
    width: '100%',
    fontSize: 35,
    color: '#092e71',
  },
  textInputStyleDark: {
    alignItems: 'flex-end',
    textAlign: 'right',
    paddingHorizontal: 10,
    marginTop: 60,
    width: '100%',
    color: 'white',
    fontSize: 35,
  },

  oprContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  oprView: {
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: '#092e71',
    justifyContent: 'center',
    alignItems: 'center',
  },
  oprViewDark: {
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: '#f6dd98',
    justifyContent: 'center',
    alignItems: 'center',
  },
  operatorStyleDark: {
    color: 'white',
    fontSize: 30,
  },
  operatorStyle: {
    fontSize: 30,
    color: 'white',
  },
});

export default styles;
