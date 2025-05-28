import React from 'react';
import {TextInput, View} from 'react-native';
import {IconName} from '@constants/iconName';
import {styles} from './searchBarStyles';
import Icon from '@components/icon/icon';

interface SearchBarProps {
  iconName?: IconName;
  placeHolder?: string;
  onChangeText?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = props => {
  const {iconName, placeHolder, onChangeText} = props;
  return (
    <View style={styles.searchBarContainer}>
      {iconName ? <Icon name={iconName} size={32} /> : null}
      <TextInput
        placeholder={placeHolder}
        style={styles.inputField}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchBar;
