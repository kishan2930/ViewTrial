import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PropertyListings from '../screens/discover/components/list/PropertyListings';
import Inspections from '../screens/discover/components/inspections/inspections';
import Auction from '../screens/discover/components/auction/auction';
import {GlobalStyles} from '@constants/styles';
import {Strings} from '@constants/strings';
import {scaleFont} from '@utils/scale';

const TopTabs = createMaterialTopTabNavigator();

const TopTabScreens: React.FC = () => {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: GlobalStyles.colors.primary,
        tabBarInactiveTintColor: GlobalStyles.colors.black,
        tabBarLabelStyle: {
          fontSize: scaleFont(16),
          fontWeight: '400',
        },
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.searchBarBg,
          paddingBlock: 8,
        },
        tabBarIndicatorStyle: {
          height: 4,
        },
      }}>
      <TopTabs.Screen
        name={Strings.list}
        component={PropertyListings}
        options={{
          title: Strings.List,
        }}
      />
      <TopTabs.Screen
        name={Strings.inspections}
        component={Inspections}
        options={{
          title: Strings.Inspections,
        }}
      />
      <TopTabs.Screen
        name={Strings.auction}
        component={Auction}
        options={{
          title: Strings.Auction,
        }}
      />
    </TopTabs.Navigator>
  );
};

export default TopTabScreens;
