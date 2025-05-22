import React from 'react';

import {NavigationProp, ParamListBase} from '@react-navigation/native';
import DiscoverHeader from './components/discoverHeader/discoverHeader';
import TopTabScreens from '@navigations/topTabs';

interface DiscoverProps {
  navigation: NavigationProp<ParamListBase>;
}

const Discover: React.FC<DiscoverProps> = () => {
  return (
    <>
      <DiscoverHeader />
      <TopTabScreens />
    </>
  );
};

export default Discover;
