import {StyleSheet} from 'react-native';
import {verticalScale, scaleFont} from '@utils/scale';

export const bottomTabStyles = StyleSheet.create({
  navigator: {
    headerShown: false,
    tabBarLabelStyle: {
      fontSize: scaleFont(14),
      fontWeight: '400',
    },
    tabBarStyle: {
      height: verticalScale(70),
    },
    tabBarIconStyle: {
      marginTop: verticalScale(12),
      paddingBottom: verticalScale(4),
    },
  },
});
