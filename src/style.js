import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'Roboto',
    marginVertical: 30,
  },
  inputBlock: {
    width: '90%',
    marginVertical: 30,
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    height: 55,
    alignItems: 'center',
  },
  invalidInput: {
    borderRadius: 5,
    borderColor: 'red',
    borderWidth: 1,
    padding: 10,
    height: 55,
    alignItems: 'center',
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
  button: {
    width: '90%',
    backgroundColor: '#58E218',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    borderRadius: 5,
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
