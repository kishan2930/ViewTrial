import {GlobalStyles} from '@constants/styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 12,
    paddingVertical: 14,
  },
  list: {
    fontSize: 16,
    fontWeight: '400',
    color: GlobalStyles.colors.black,
  },
});
