import {StyleSheet} from 'react-native';

export const bottomTabStyles = StyleSheet.create({
  navigator: {
    headerShown: false,
    tabBarLabelStyle: {
      fontSize: 14,
      fontWeight: '400',
    },
    tabBarStyle: {
      height: '10%',
    },
    tabBarIconStyle: {
      marginTop: 12,
      paddingBottom: 4,
    },
  },
});
