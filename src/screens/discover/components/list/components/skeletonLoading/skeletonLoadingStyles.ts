import {StyleSheet, Dimensions} from 'react-native';
import {GlobalStyles} from '@constants/styles';
import {scale, verticalScale, moderateScale} from '@utils/scale';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: scale(8),
  },
  scrollContent: {
    padding: scale(8),
    paddingBottom: verticalScale(16),
  },
  skeletonContainer: {
    backgroundColor: GlobalStyles.colors.white,
    borderRadius: moderateScale(8),
    marginBottom: verticalScale(16),
    overflow: 'hidden',
    width: width - scale(16),
  },
  imageContainer: {
    height: verticalScale(180),
    backgroundColor: GlobalStyles.colors.secondary,
  },
  contentContainer: {
    padding: moderateScale(12),
  },
  line: {
    height: verticalScale(16),
    width: '60%',
    backgroundColor: GlobalStyles.colors.secondary,
    borderRadius: moderateScale(4),
    marginBottom: verticalScale(12),
  },
  lastRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shortLine: {
    height: verticalScale(16),
    width: '40%',
    backgroundColor: GlobalStyles.colors.secondary,
    borderRadius: moderateScale(4),
  },
  boxesContainer: {
    flexDirection: 'row',
  },
  box: {
    height: verticalScale(32),
    width: scale(32),
    backgroundColor: GlobalStyles.colors.secondary,
    borderRadius: moderateScale(4),
    marginLeft: scale(8),
  },
});
