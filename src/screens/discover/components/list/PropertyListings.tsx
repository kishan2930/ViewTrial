import React, {useEffect, useState} from 'react';
import {FlatList, View, StyleSheet, Text} from 'react-native';
import PropertyCard from './components/propertyCard/propertyCard';
import SkeletonLoading from './components/skeletonLoading/skeletonLoading';
import httpService from '@utils/httpService';
import {GlobalStyles} from '@constants/styles';

interface PropertyListing {
  id: string;
  priceText: string;
  agency: {
    logoFileName: string;
    brandColour: string;
    address: string;
  };
  agents: Array<{
    firstName: string;
    lastName: string;
    agentPhotoFileName: string;
  }>;
  bathrooms: number;
  bedrooms: number;
  carparks: number;
  landSize: number;
  primaryPropertyType: string;
}

interface ApiResponse {
  listings: PropertyListing[];
}

const PropertyListings: React.FC = () => {
  const [properties, setProperties] = useState<PropertyListing[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPropertyListings = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const {success, data} = await httpService.post<{
        success: boolean;
        data: ApiResponse;
      }>(
        '/api/pubui/mobile/listings/search-result-page/listings-by-location',
        {
          saleMethod: ['Sale'],
          page: 1,
          includeSurrounding: true,
          excludeUnderContract: false,
          propertyTypes: [],
          exactBeds: false,
          exactBaths: false,
          exactCars: false,
          features: [],
          locations: [
            {
              state: 'vic',
              suburbNameSlug: 'richmond',
              suburbName: 'RICHMOND',
              postcode: '3121',
            },
          ],
        },
        {
          'x-rev-apikey': '46F42C32-1294-4D13-8B54-EB183BC04FBD',
          'x-mob-app-version': '6.8.2',
        },
      );

      if (success && data.listings) {
        setProperties(data.listings);
      } else {
        setError('Failed to fetch property listings');
      }
    } catch (err) {
      setError('An error occurred while fetching data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPropertyListings();
  }, []);

  if (isLoading) {
    return <SkeletonLoading />;
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={properties}
      renderItem={({item}) => <PropertyCard property={item} />}
      keyExtractor={item => item.id.toString()}
      initialNumToRender={5}
      maxToRenderPerBatch={10}
      windowSize={5}
    />
  );
};

export default PropertyListings;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: GlobalStyles.colors.error,
    fontSize: 16,
  },
});
