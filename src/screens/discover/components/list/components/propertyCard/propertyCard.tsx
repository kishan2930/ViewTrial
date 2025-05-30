import React from 'react';
import {Image, ImageBackground, Pressable, Text, View} from 'react-native';
import Icon from '@components/icon/icon';
import {IconName} from '@constants/iconName';
import PropertyFeatures from '../propertyFeatures/propertyFeatures';
import {scale} from '@utils/scale';
import {styles} from './propertyCardStyles';
import CarouselImages from './carouselImages/carouselImages';
import {GlobalStyles} from '@constants/styles';

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
    images?: Array<{
      sequence: number;
      caption?: string | null;
      url: string;
    }>;
  };
}

const PropertyCard: React.FC<PropertyCardProps> = ({property}) => {
  const {
    priceText,
    agency,
    agents = [],
    images = [],
    bathrooms,
    bedrooms,
    carparks,
    landSize,
    primaryPropertyType,
  } = property;

  const hasAgents = agents && agents.length > 0;
  const agent = hasAgents ? agents[0] : null;

  const BASEIMGURL =
    'https://resi.uatz.view.com.au/viewstatic/images/listing/376-min/';

  const agencyLogoUrl = agency?.logoFileName
    ? `${BASEIMGURL}${agency.logoFileName}`
    : undefined;

  const agentPhotoUrl = agent?.agentPhotoFileName
    ? `${BASEIMGURL}${agent.agentPhotoFileName}`
    : undefined;

  return (
    <Pressable>
      <View
        style={[
          styles.header,
          {
            backgroundColor: `#${
              agency?.brandColour || GlobalStyles.colors.transparentBlack
            }`,
          },
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
        {images.length > 0 && (
          <CarouselImages images={images} baseImageUrl={BASEIMGURL} />
        )}
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

export default PropertyCard;
