import {StyleSheet} from 'react-native';
import {GlobalStyles} from '@constants/styles';

export const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
    backgroundColor: GlobalStyles.colors.white,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.searchBarBg,
    borderRadius: 8,
    paddingInline: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  inputField: {
    flex: 1,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 16,
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: GlobalStyles.colors.buttonBg,
    padding: 8,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: GlobalStyles.colors.black,
  },
});
