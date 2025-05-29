import {StyleSheet} from 'react-native';
import {moderateScale, scale, scaleFont, verticalScale} from '@utils/scale';
import {GlobalStyles} from '@constants/styles';

export const styles = StyleSheet.create({
  header: {
    height: verticalScale(45),
    paddingHorizontal: scale(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    borderBottomColor: GlobalStyles.colors.white,
    borderBottomWidth: 2,
  },
  logoContainer: {
    width: scale(120),
    height: '100%',
    justifyContent: 'center',
  },
  agencyLogo: {
    width: scale(100),
    height: verticalScale(25),
    resizeMode: 'contain',
  },
  agentName: {
    color: GlobalStyles.colors.white,
    marginRight: scale(70),
    fontSize: scaleFont(12),
  },
  agentPhotoContainer: {
    borderColor: GlobalStyles.colors.white,
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(35),
    height: moderateScale(70),
    width: moderateScale(70),
    position: 'absolute',
    right: scale(8),
    top: verticalScale(8),
    zIndex: 3,
    overflow: 'hidden',
  },
  agentPhoto: {
    width: moderateScale(70),
    height: moderateScale(70),
  },
  imageGallery: {
    height: verticalScale(250),
    backgroundColor: GlobalStyles.colors.secondary,
  },
  detailsContainer: {
    marginBottom: verticalScale(20),
    padding: moderateScale(16),
    backgroundColor: GlobalStyles.colors.white,
  },
  price: {
    fontSize: scaleFont(20),
    fontWeight: '700',
  },
  address: {
    paddingVertical: verticalScale(4),
    fontSize: scaleFont(16),
    fontWeight: '300',
  },
  propertyTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  propertyType: {
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(2),
    borderRadius: moderateScale(4),
    backgroundColor: GlobalStyles.colors.searchBarBg,
    fontSize: scaleFont(12),
  },
  actionButtons: {
    flexDirection: 'row',
    gap: scale(8),
  },
});
