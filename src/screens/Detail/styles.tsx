import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'black',
    paddingTop: 50,
  },
  textTitle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  textDec: {
    color: 'gray',
    fontSize: 14,
    marginTop: 5,
    paddingHorizontal: 10,
  },
  textContent: {
    color: Colors.lightGray,
    fontSize: 14,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  textread: {
    color: 'blue',
    fontSize: 14,
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
  },
  textAuther: {
    color: 'red',
    fontSize: 18,
    marginTop: 5,
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    marginLeft: '40%',
    fontStyle: 'italic',
  },
  textDate: {
    color: 'green',
    fontSize: 14,
    alignSelf: 'flex-end',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  imageContainer: {width: '100%', height: '30%', marginVertical: 10},
  backIcon: {width: 30, height: 30, margin: 10},
});
export default styles;
