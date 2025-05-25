import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './accommodationStyles';
import Icon from '@components/icon/icon';
import {IconName} from '@constants/iconName';

interface AccommodationProps {
  bed: number;
  bath: number;
  car: number;
  area: string;
}

const Accommodation: React.FC<AccommodationProps> = props => {
  const {bed, bath, car, area} = props;
  return (
    <View style={styles.accomodation}>
      {bed && (
        <View style={styles.accomo}>
          <Icon name={IconName.bed} size={32} />
          <Text>3</Text>
        </View>
      )}
      {bath && (
        <View style={styles.accomo}>
          <Icon name={IconName.bath} size={32} />
          <Text>3</Text>
        </View>
      )}
      {car && (
        <View style={styles.accomo}>
          <Icon name={IconName.car} size={32} />
          <Text>3</Text>
        </View>
      )}
      {area && (
        <View style={styles.accomo}>
          <Icon name={IconName.meterSqrt} size={32} />
          <Text>500 m2</Text>
        </View>
      )}
    </View>
  );
};

export default Accommodation;
