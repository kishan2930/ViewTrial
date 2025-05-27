import {StyleSheet} from 'react-native';
import {GlobalStyles} from '@constants/styles';
import {moderateScale, scale, scaleFont} from '@utils/scale';

export const styles = StyleSheet.create({
  headerContainer: {
    padding: moderateScale(16),
    backgroundColor: GlobalStyles.colors.white,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
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
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
    gap: scale(16),
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(8),
    backgroundColor: GlobalStyles.colors.buttonBg,
    padding: moderateScale(8),
    borderRadius: moderateScale(8),
  },
  buttonText: {
    textAlign: 'center',
    fontSize: scaleFont(16),
    fontWeight: '400',
    color: GlobalStyles.colors.black,
  },
});
