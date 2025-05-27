import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import Button from '@src/components/button/button';
import Icon from '@src/components/icon/icon';
import MoreListItem from '@src/screens/more/components/moreListItem/moreListItem';
import {styles} from './moreStyles';
import {IconName} from '@constants/iconName';
import {Strings} from '@constants/strings';

const LISTS = [
  {iconName: 'estimate', listName: 'Estimate'},
  {iconName: 'findAgents', listName: 'Find agents'},
  {iconName: 'auction', listName: 'Auction results VIC'},
  {iconName: 'location', listName: 'Location profiles'},
  {iconName: 'advice', listName: 'Advice'},
  {iconName: 'news', listName: 'News'},
  {iconName: 'homeLoans', listName: 'Home loans'},
  {iconName: 'contactUs', listName: 'Contact Us'},
];

const More: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Icon
            name={IconName.viewLogo}
            width={93}
            height={24}
            svgHeight={20}
            svgWidth={70}
          />
        </View>
        <Button>{Strings.signInBtn}</Button>
      </View>
      <View style={styles.lists}>
        {LISTS.map((item, index) => (
          <MoreListItem
            key={index}
            iconName={item.iconName as IconName}
            listName={item.listName}
          />
        ))}
      </View>
      <View style={styles.version}>
        <Text style={styles.versionText}>6.8.3 (460)</Text>
      </View>
    </ScrollView>
  );
};

export default More;
