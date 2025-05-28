import {StyleSheet} from 'react-native';
import {GlobalStyles} from '@constants/styles';
import {moderateScale, scale, scaleFont, verticalScale} from '@utils/scale';

export const styles = StyleSheet.create({
  headerContainer: {
    padding: moderateScale(16),
    backgroundColor: GlobalStyles.colors.white,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.searchBarBg,
    borderRadius: moderateScale(8),
    padding: moderateScale(6),
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(8),
  },
  inputField: {
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
  modalContainer: {
    padding: verticalScale(16),
    backgroundColor: GlobalStyles.colors.white,
  },
  searchBar2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: moderateScale(6),
    borderRadius: moderateScale(8),
    backgroundColor: GlobalStyles.colors.searchBarBg,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: scale(8),
  },
  backButton: {
    padding: moderateScale(6),
  },
  searchBarTextInput: {
    flex: 1,
    fontSize: scaleFont(16),
    color: GlobalStyles.colors.black,
  },
  searchButton: {
    padding: moderateScale(12),
    borderRadius: moderateScale(8),
    backgroundColor: GlobalStyles.colors.primary,
  },
  searchResultContainer: {
    marginTop: moderateScale(14),
    marginLeft: moderateScale(14),
    marginBottom: 50,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: scaleFont(16),
    color: GlobalStyles.colors.error,
  },
  listTitle: {
    fontSize: scaleFont(14),
    marginBlock: verticalScale(16),
    color: GlobalStyles.colors.black,
    fontWeight: '700',
  },
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItem: {
    marginLeft: scale(10),
    marginBlock: verticalScale(16),
    fontSize: scaleFont(14),
    color: GlobalStyles.colors.black,
  },
  selectedItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(8),
    backgroundColor: GlobalStyles.colors.primary,
    padding: moderateScale(8),
    borderRadius: moderateScale(8),
  },
  selectedItemText: {
    fontSize: scaleFont(16),
    color: GlobalStyles.colors.white,
  },
});
