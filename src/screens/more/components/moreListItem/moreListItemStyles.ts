import {GlobalStyles} from '@constants/styles';
import {scale, scaleFont, verticalScale} from '@utils/scale';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: scale(12),
    paddingVertical: verticalScale(14),
  },
  list: {
    fontSize: scaleFont(16),
    fontWeight: '400',
    color: GlobalStyles.colors.black,
  },
});
