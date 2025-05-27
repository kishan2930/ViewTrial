import {Text, TextInput, View} from 'react-native';
import React from 'react';
import Icon from '@components/icon/icon';
import {styles} from './discoverHeaderStyles';
import {IconName} from '@constants/iconName';
import {Strings} from '@constants/strings';

const renderBtn = (title: string, iconName: IconName) => {
  return (
    <View style={styles.buttonWrapper}>
      <Text style={styles.buttonText}>{title}</Text>
      <Icon name={iconName} size={32} />
    </View>
  );
};

const DiscoverHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.searchBarContainer}>
        <Icon name={IconName.back} size={32} />
        <View style={styles.input}>
          <Icon name={IconName.discover} size={32} />
          <TextInput
            placeholder={Strings.searchPlaceHolder}
            style={styles.inputField}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {renderBtn(Strings.filters, IconName.filter)}
        {renderBtn(Strings.saveSearch, IconName.shortList)}
      </View>
    </View>
  );
};

export default DiscoverHeader;
