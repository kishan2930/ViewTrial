import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {memo} from 'react';
import {GlobalStyles} from '@constants/styles';
import Icon from '@components/icon/icon';
import {IconName} from '@constants/iconName';
import PropertyFeatures from '@src/screens/discover/components/list/components/propertyFeatures/propertyFeatures';
import {scale, verticalScale, moderateScale, scaleFont} from '@utils/scale';

interface PropertyCardProps {
  property: {
    priceText: string;
    agency?: {
      logoFileName?: string;
      brandColour?: string;
      address?: string;
    };
    agents?: Array<{
      firstName: string;
      lastName: string;
      agentPhotoFileName?: string;
    }>;
    bathrooms?: number;
    bedrooms?: number;
    carparks?: number;
    landSize?: number;
    primaryPropertyType?: string;
  };
}

const PropertyCard: React.FC<PropertyCardProps> = ({property}) => {
  const {
    priceText,
    agency,
    agents = [],
    // images,
    bathrooms,
    bedrooms,
    carparks,
    landSize,
    primaryPropertyType,
  } = property;

  const hasAgents = agents && agents.length > 0;
  const agent = hasAgents ? agents[0] : null;

  const agencyLogoUrl = agency?.logoFileName
    ? `https://resi.uatz.view.com.au/viewstatic/images/listing/376-min/${agency.logoFileName}`
    : undefined;

  const agentPhotoUrl = agent?.agentPhotoFileName
    ? `https://resi.uatz.view.com.au/viewstatic/images/listing/376-min/${agent.agentPhotoFileName}`
    : undefined;

  return (
    <Pressable>
      <View
        style={[
          styles.header,
          {backgroundColor: `#${agency?.brandColour || '000'}`},
        ]}>
        <View style={styles.logoContainer}>
          {agencyLogoUrl && (
            <Image source={{uri: agencyLogoUrl}} style={styles.agencyLogo} />
          )}
        </View>

        {agent ? (
          <Text style={styles.agentName}>
            {`${agent.firstName} ${agent.lastName}`}
          </Text>
        ) : (
          <Text style={styles.agentName}>No agent available</Text>
        )}

        {agentPhotoUrl && (
          <View style={styles.agentPhotoContainer}>
            <ImageBackground
              source={{uri: agentPhotoUrl}}
              style={styles.agentPhoto}
              resizeMode="cover"
            />
          </View>
        )}
      </View>

      <View style={styles.imageGallery}>
        {/* Image carousel would go here */}
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.price}>{priceText || 'Price not available'}</Text>
        <Text style={styles.address}>
          {agency?.address || 'Address not available'}
        </Text>

        <PropertyFeatures
          bed={bedrooms}
          bath={bathrooms}
          car={carparks}
          area={landSize}
        />

        <View style={styles.propertyTypeContainer}>
          <Text style={styles.propertyType}>
            {primaryPropertyType || 'Not specified'}
          </Text>
          <View style={styles.actionButtons}>
            <Icon
              name={IconName.share}
              size={scale(35)}
              svgHeight={scale(35)}
              svgWidth={scale(35)}
            />
            <Icon
              name={IconName.shortList}
              size={scale(35)}
              svgHeight={scale(35)}
              svgWidth={scale(35)}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default memo(PropertyCard);

const styles = StyleSheet.create({
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
