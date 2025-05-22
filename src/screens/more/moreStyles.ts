import {GlobalStyles} from '@constants/styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.white,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lists: {
    marginTop: 24,
  },
  version: {
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  versionText: {
    fontSize: 18,
    fontWeight: '400',
  },
});
