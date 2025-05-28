import {GlobalStyles} from '@constants/styles';
import {moderateScale, scale, scaleFont} from '@utils/scale';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  searchBarContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.searchBarBg,
    borderRadius: moderateScale(8),
    paddingInline: scale(12),
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(8),
  },
  inputField: {
    flex: 1,
    fontSize: scaleFont(16),
  },
});
