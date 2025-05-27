import {StyleSheet} from 'react-native';
import {GlobalStyles} from '@constants/styles';
import {scale, verticalScale, scaleFont} from '@utils/scale';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(4),
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(12),
  },
  featureItem: {
    flexDirection: 'row',
  },
  featureText: {
    fontSize: scaleFont(14),
    color: GlobalStyles.colors.black,
  },
});
