// SkeletonLoading.tsx
import React from 'react';
import {ViewStyle} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkeletonLoading: React.FC = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item style={styles.card}>
        {/* Image */}
        <SkeletonPlaceholder.Item style={styles.image} />

        {/* Text lines below image */}
        <SkeletonPlaceholder.Item style={styles.textWrapper}>
          <SkeletonPlaceholder.Item style={styles.priceLine} />
          <SkeletonPlaceholder.Item style={styles.addressLine} />
          <SkeletonPlaceholder.Item style={styles.iconLine} />
          <SkeletonPlaceholder.Item style={styles.categoryLine} />
        </SkeletonPlaceholder.Item>

        {/* Action icons */}
        <SkeletonPlaceholder.Item style={styles.iconWrapper}>
          <SkeletonPlaceholder.Item style={styles.icon} />
          <SkeletonPlaceholder.Item style={styles.icon} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

const styles: {[key: string]: ViewStyle} = {
  card: {
    marginBottom: 24,
  },
  image: {
    height: 180,
    borderRadius: 8,
    width: '100%',
  },
  textWrapper: {
    marginTop: 12,
  },
  priceLine: {
    width: '40%',
    height: 14,
    borderRadius: 4,
  },
  addressLine: {
    marginTop: 6,
    width: '80%',
    height: 14,
    borderRadius: 4,
  },
  iconLine: {
    marginTop: 6,
    width: '70%',
    height: 14,
    borderRadius: 4,
  },
  categoryLine: {
    marginTop: 6,
    width: '30%',
    height: 14,
    borderRadius: 4,
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
    gap: 8,
  },
  icon: {
    width: 32,
    height: 32,
    borderRadius: 6,
  },
};

export default SkeletonLoading;
