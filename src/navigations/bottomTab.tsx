import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Discover from '@screens/discover/discover';
import MyAccount from '@screens/myAccount/myAccount';
import Shortlist from '@screens/shortlist/shortlist';
import More from '@screens/more/more';
import Icon from '@components/icon/icon';
import {IconName} from '@constants/iconName';
import {Strings} from '@constants/strings';
import {bottomTabOptions} from './bottomTabStyles';

const BottomTabs = createBottomTabNavigator();

const BottomTabsScreens: React.FC = () => {
  return (
    <BottomTabs.Navigator screenOptions={bottomTabOptions}>
      <BottomTabs.Screen
        name={Strings.discover}
        component={Discover}
        options={{
          title: Strings.Discover,
          tabBarIcon: ({color}) => (
            <Icon name={IconName.discover} size={32} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name={Strings.shortlist}
        component={Shortlist}
        options={{
          title: Strings.Shortlist,
          tabBarIcon: ({color}) => (
            <Icon name={IconName.shortList} size={32} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name={Strings.myAccount}
        component={MyAccount}
        options={{
          title: Strings.MyAccount,
          tabBarIcon: ({color}) => (
            <Icon name={IconName.myAccount} size={32} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name={Strings.more}
        component={More}
        options={{
          title: Strings.More,
          tabBarIcon: ({color}) => (
            <Icon name={IconName.more} size={32} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomTabsScreens;
