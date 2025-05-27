import {GlobalStyles} from '@constants/styles';
import {scaleFont, verticalScale} from '@utils/scale';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.white,
    padding: verticalScale(16),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lists: {
    marginTop: verticalScale(24),
  },
  version: {
    marginTop: verticalScale(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  versionText: {
    fontSize: scaleFont(18),
    fontWeight: '400',
  },
});
