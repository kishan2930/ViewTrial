import {Text, View} from 'react-native';
import React from 'react';
import {styles} from '@src/screens/discover/components/list/components/propertyFeatures/propertyFeaturesStyles';
import Icon from '@components/icon/icon';
import {IconName} from '@constants/iconName';
import {scale} from '@utils/scale';

interface PropertyFeaturesProps {
  bed?: number;
  bath?: number;
  car?: number;
  area?: number;
}

const PropertyFeatures: React.FC<PropertyFeaturesProps> = props => {
  const {bed, bath, car, area} = props;
  return (
    <View style={styles.container}>
      {bed && (
        <View style={styles.featureItem}>
          <Icon name={IconName.bed} size={scale(32)} />
          <Text style={styles.featureText}>{bed}</Text>
        </View>
      )}
      {bath && (
        <View style={styles.featureItem}>
          <Icon name={IconName.bath} size={scale(32)} />
          <Text style={styles.featureText}>{bath}</Text>
        </View>
      )}
      {car && (
        <View style={styles.featureItem}>
          <Icon name={IconName.car} size={scale(32)} />
          <Text style={styles.featureText}>{car}</Text>
        </View>
      )}
      {area && (
        <View style={styles.featureItem}>
          <Icon name={IconName.meterSqrt} size={scale(32)} />
          <Text style={styles.featureText}>{area} m²</Text>
        </View>
      )}
    </View>
  );
};

export default PropertyFeatures;
