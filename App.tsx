import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
// import StackNavigation from '@navigations/stackNavigation';
import BottomTabsScreens from '@navigations/bottomTab';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabsScreens />
    </NavigationContainer>
  );
};

export default App;
