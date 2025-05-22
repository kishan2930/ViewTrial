import {StyleSheet} from 'react-native';
import {GlobalStyles} from '@constants/styles';

export const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    paddingBlock: 6,
    paddingInline: 16,
    backgroundColor: GlobalStyles.colors.primary,
  },
  buttonText: {
    color: GlobalStyles.colors.secondary,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary,
    borderRadius: 6,
  },
});
