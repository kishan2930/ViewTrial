import React, {useState} from 'react';
import {
  Modal,
  Pressable,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

import Icon from '@components/icon/icon';
import {styles} from './discoverHeaderStyles';
import {IconName} from '@constants/iconName';
import {Strings} from '@constants/strings';
import {GlobalStyles} from '@constants/styles';
import httpService from '@utils/httpService';

interface BaseLocation {
  _id: string;
  locationId?: number; // Only Suburb has this, but kept optional for compatibility
  lgaId: number;
  postcode: string;
  state: string;
  suburbName: string;
  lgaName: string;
  stateFullName: string;
  displayText: string;
  locationType: string;
}

interface SuburbData extends BaseLocation {
  city: string | null;
  cityId: number | null;
  regionId: number | null;
  region: string | null;
  aliasSearchName: string[] | null;
  aliasSuburbs: {name: string; postcode: string}[] | null;
}

interface StreetAddressData extends BaseLocation {
  suburbId: number;
  streetAddressSlug: string;
  numberOfProperties: number;
  streetSlug: string;
  createdAt: string;
  streetName: string;
  suburbSlug: string;
  streetAddress: string;
  streetAbv: string;
  streetNameFirst: string;
  updatedAt: string | null;
  streetTypeCode: string;
}

interface DataItem extends SuburbData, StreetAddressData {}

interface ApiResponse {
  success: boolean;
  data: DataItem[];
}

interface SearchResultType {
  suburb?: string[];
  street?: string[];
}

type RootStackParamList = {
  list: {searchText: string};
};

const DiscoverHeader: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [searchResult, setSearchResult] = useState<SearchResultType>({});
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  const onChangeText = async (text: string) => {
    // setIsLoading(true);
    if (text === '') {
      setSearchResult({});
    }
    try {
      const {success, data} = await httpService.post<ApiResponse>(
        '/api/pubui/mobile/location/unified-search',
        {
          searchText: text.toLocaleLowerCase(),
          scope: {
            excludeLocations: false,
            excludeStreets: false,
            excludeProperties: true,
            excludeProject: false,
            excludeSchool: false,
            locationScope: {
              excludeState: false,
              excludeCity: false,
              excludeLga: false,
              excludeRegion: false,
            },
          },
        },
        {
          'x-rev-apikey': '9594f5d7-be39-482d-aaa6-646dfffd8c15',
          'x-mob-app-version': '6.8.2',
        },
      );

      const result: SearchResultType = {};

      if (success && Array.isArray(data) && data.length > 0) {
        data.forEach(item => {
          if (item.locationType === 'suburb' && item.displayText) {
            if (!result.suburb) result.suburb = [];
            result.suburb.push(item.displayText);
          }

          if (item.streetSlug && item.streetAddress) {
            if (!result.street) result.street = [];
            result.street.push(item.streetAddress);
          }
        });

        setSearchResult(result);
      } else {
        setSearchResult({});
        // setError('No results found');
      }
    } catch (err) {
      // setError('An error occurred while fetching data');
    } finally {
      // setIsLoading(false);
    }
  };

  const onPressCrossIcon = () => {
    setSelectedItem('');
    setSearchResult({});
  };

  const showModal = () => {
    return (
      <Modal
        animationType="slide"
        visible={isVisible}
        onRequestClose={() => {
          setIsVisible(!isVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.searchContainer}>
            <View style={styles.searchBar2}>
              <Pressable
                onPress={() => setIsVisible(!isVisible)}
                style={styles.backButton}>
                <Icon name={IconName.back} size={32} />
              </Pressable>
              {selectedItem ? (
                <View style={styles.selectedItemContainer}>
                  <Text style={styles.selectedItemText}>{selectedItem}</Text>
                  <Pressable onPress={() => onPressCrossIcon()}>
                    <Icon
                      name={IconName.cross}
                      size={35}
                      color={GlobalStyles.colors.white}
                    />
                  </Pressable>
                </View>
              ) : (
                <TextInput
                  placeholder={Strings.searchPlaceHolder}
                  style={styles.searchBarTextInput}
                  onChangeText={text => onChangeText(text)}
                  multiline={true}
                />
              )}
            </View>
            <Pressable
              style={styles.searchButton}
              onPress={() => onSearchPress()}>
              <Icon
                name={IconName.discover}
                size={32}
                color={GlobalStyles.colors.white}
              />
            </Pressable>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.searchResultContainer}>
            {searchResult.suburb &&
              showsSearchResults('Suburb', searchResult.suburb)}
            {searchResult.street &&
              showsSearchResults('Street', searchResult.street)}
          </ScrollView>
        </View>
      </Modal>
    );
  };

  const onSearchPress = () => {
    setIsVisible(!isVisible);
    navigation.navigate(Strings.list, {
      searchText: selectedItem,
    });
  };

  const onSearchBarPress = () => {
    setIsVisible(!isVisible);
    setSearchResult({});
  };

  const onSelectItem = (item: string) => {
    setSelectedItem(item);
    setSearchResult({});
  };

  const showsSearchResults = (title: string, data: string[]) => {
    return (
      <View>
        <Text style={styles.listTitle}>{title}</Text>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <Pressable
                style={styles.listItemContainer}
                android_ripple={{color: GlobalStyles.colors.searchBarBg}}
                onPress={() => onSelectItem(item)}>
                <Text style={styles.listItem}>{item}</Text>
                {title === 'Suburb' && <Icon name={IconName.plus} size={40} />}
              </Pressable>
            );
          }}
          keyExtractor={item => item}
        />
      </View>
    );
  };

  const renderBtn = (title: string, iconName: IconName) => {
    return (
      <Pressable
        style={styles.buttonWrapper}
        android_ripple={{
          color: GlobalStyles.colors.buttonBgRipple,
        }}>
        <Text style={styles.buttonText}>{title}</Text>
        <Icon name={iconName} size={32} />
      </Pressable>
    );
  };

  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.searchBarContainer}>
          <Icon name={IconName.back} size={32} />
          <Pressable
            style={styles.searchBar}
            onPress={() => onSearchBarPress()}>
            <Icon name={IconName.discover} size={32} />
            <TextInput
              placeholder={Strings.searchPlaceHolder}
              style={styles.inputField}
              editable={false}
            />
          </Pressable>
        </View>
        <View style={styles.buttonContainer}>
          {renderBtn(Strings.filters, IconName.filter)}
          {renderBtn(Strings.saveSearch, IconName.shortList)}
        </View>
      </View>
      {isVisible && showModal()}
    </>
  );
};

export default DiscoverHeader;
