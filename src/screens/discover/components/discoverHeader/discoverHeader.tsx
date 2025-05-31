import React, {useState} from 'react';
import {
  Modal,
  Pressable,
  Text,
  TextInput,
  View,
  ScrollView,
  SectionList,
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
  title: string;
  data: DataItem[];
}

// Define the RootStackParamList type for navigation
type RootStackParamList = {
  [Strings.list]: {
    searchText: DataItem;
  };
};

const DiscoverHeader: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState({} as DataItem);
  const [searchResult, setSearchResult] = useState<SearchResultType[]>([]);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onChangeText = async (text: string) => {
    if (text === '') {
      setSearchResult([]);
    }
    if (text.length < 3) {
      return;
    }
    try {
      const {success, data} = await httpService.post<ApiResponse>(
        '/api/pubui/mobile/location/unified-search',
        {
          searchText: text.toLowerCase(),
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

      if (success && Array.isArray(data) && data.length > 0) {
        setSearchResult(filterDataByType(data));
      } else {
        setSearchResult([]);
      }
    } catch (err) {
      // Handle error silently
    } finally {
      // Add any cleanup logic if needed
    }
  };

  const filterDataByType = (data: DataItem[]): SearchResultType[] => {
    const res: SearchResultType[] = [];

    const cityGroup = {title: 'City', data: [] as DataItem[]};
    const stateGroup = {title: 'State', data: [] as DataItem[]};
    const suburbGroup = {title: 'Suburb', data: [] as DataItem[]};
    const projectGroup = {title: 'Projects', data: [] as DataItem[]};
    const streetGroup = {title: 'Street', data: [] as DataItem[]};

    data.forEach(item => {
      if (item.locationType === 'state') {
        stateGroup.data.push(item);
      } else if (item.locationType === 'city') {
        cityGroup.data.push(item);
      } else if (item.locationType === 'suburb') {
        suburbGroup.data.push(item);
      }

      if ('projectSlug' in item) {
        projectGroup.data.push(item);
      }

      if ('streetSlug' in item) {
        streetGroup.data.push(item);
      }
    });

    if (stateGroup.data.length > 0) res.push(stateGroup);
    if (cityGroup.data.length > 0) res.push(cityGroup);
    if (suburbGroup.data.length > 0) res.push(suburbGroup);
    if (projectGroup.data.length > 0) res.push(projectGroup);
    if (streetGroup.data.length > 0) res.push(streetGroup);

    return res;
  };

  const filterItemByType = (item: DataItem) => {
    if ('streetSlug' in item && item.streetAddress) {
      return item.streetAddress;
    }

    return item.displayText;
  };

  const onPressCrossIcon = () => {
    setSelectedItem({} as DataItem);
    setSearchResult([]);
  };

  const onBackModal = () => {
    setIsVisible(!isVisible);
    setSearchResult([]);
    setSelectedItem({} as DataItem);
  };

  const showModal = () => {
    return (
      <Modal
        animationType="slide"
        visible={isVisible}
        onRequestClose={() => onBackModal()}>
        <View style={styles.modalContainer}>
          <View style={styles.searchContainer}>
            <View style={styles.searchBar2}>
              <Pressable
                onPress={() => onBackModal()}
                style={styles.backButton}>
                <Icon name={IconName.leftArrow} size={32} />
              </Pressable>
              {Object.keys(selectedItem).length > 0 ? (
                <View style={styles.selectedItemContainer}>
                  <Text style={styles.selectedItemText} numberOfLines={2}>
                    {filterItemByType(selectedItem)}
                  </Text>
                  <Pressable onPress={() => onPressCrossIcon()} hitSlop={8}>
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
            {searchResult.length > 0 ? showsSearchResults() : null}
          </ScrollView>
        </View>
      </Modal>
    );
  };

  const onSelectItem = (item: DataItem) => {
    setSelectedItem(item);
    setSearchResult([]);
  };

  const showsSearchResults = () => {
    return (
      <SectionList
        sections={searchResult}
        keyExtractor={(item, index) => item._id + index.toString()}
        renderItem={({item, section}) => {
          const displayText = filterItemByType(item);

          return (
            <Pressable
              style={styles.listItemContainer}
              android_ripple={{color: GlobalStyles.colors.searchBarBg}}
              onPress={() => onSelectItem(item)}>
              <Text style={styles.listItem}>{displayText}</Text>
              {section.title === 'Suburb' && (
                <Icon name={IconName.plus} size={35} />
              )}
            </Pressable>
          );
        }}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.listTitle}>{title}</Text>
        )}
      />
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
          <Icon name={IconName.leftArrow} size={32} />
          <Pressable
            style={styles.searchBar}
            onPress={() => onSearchBarPress()}>
            <Icon name={IconName.discover} size={32} />
            {Object.keys(selectedItem).length > 0 ? (
              <View style={styles.selectedItemContainer}>
                <Text style={styles.selectedItemText} numberOfLines={2}>
                  {filterItemByType(selectedItem)}
                </Text>
                <Pressable onPress={() => onPressCrossIcon()} hitSlop={8}>
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
                style={styles.inputField}
                editable={false}
              />
            )}
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
