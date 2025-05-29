import {StyleSheet} from 'react-native';
import {verticalScale, scaleFont} from '@utils/scale';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

export const bottomTabStyles = StyleSheet.create({
  tabBarLabel: {
    fontSize: scaleFont(14),
    fontWeight: '400',
  },
  tabBar: {
    height: verticalScale(70),
  },
  tabBarIcon: {
    marginTop: verticalScale(12),
    paddingBottom: verticalScale(4),
  },
});

export const bottomTabOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarLabelStyle: bottomTabStyles.tabBarLabel,
  tabBarStyle: bottomTabStyles.tabBar,
  tabBarIconStyle: bottomTabStyles.tabBarIcon,
};
