import {Dimensions, StyleSheet} from 'react-native';
import {scale} from '@utils/scale';
import {GlobalStyles} from '@constants/styles';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: scale(250),
  },
  imageContainer: {
    width,
    // height: scale(250),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  arrowButton: {
    position: 'absolute',
    top: '50%',
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
    backgroundColor: GlobalStyles.colors.transparentBlack,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{translateY: -scale(20)}],
  },
  leftArrow: {
    left: scale(10),
  },
  rightArrow: {
    right: scale(10),
  },
});
