import {Text, View} from 'react-native';
import React from 'react';
import Icon from '@components/icon/icon';
import {styles} from './moreListItemStyles';
import {IconName} from '@constants/iconName';

interface MoreListItemProps {
  iconName: IconName;
  listName: string;
}

const MoreListItem: React.FC<MoreListItemProps> = ({iconName, listName}) => {
  return (
    <View style={styles.listItem}>
      <Icon name={iconName} size={32} />
      <Text style={styles.list}>{listName}</Text>
    </View>
  );
};

export default MoreListItem;
