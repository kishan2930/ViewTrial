import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalStyles} from '@constants/styles';
import Icon from '@components/icon/icon';
import {IconName} from '@constants/iconName';
import Accommodation from '../accommodation/accommodation';

const ListItem: React.FC = () => {
  return (
    <Pressable>
      <View style={styles.cardHeader}>
        <Text>Image</Text>
        <Text style={styles.ownerName}>Name</Text>
        <View style={styles.ownerImage}>
          <Image />
        </View>
      </View>
      <View style={styles.cardImages}></View>
      <View style={styles.cardDetails}>
        <Text style={styles.price}>700000</Text>
        <Text style={styles.address}>
          801/1 Dyer Street, Richmand, VIC 3121
        </Text>
        <Accommodation bed={3} bath={3} car={3} area="500 m2" />
        <View style={styles.category}>
          <Text style={styles.categoryType}>House</Text>
          <View style={styles.cardIcons}>
            <Icon
              name={IconName.share}
              size={35}
              svgHeight={35}
              svgWidth={35}
            />
            <Icon
              name={IconName.shortList}
              size={35}
              svgHeight={35}
              svgWidth={35}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  cardHeader: {
    height: 45,
    paddingInline: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    backgroundColor: GlobalStyles.colors.yellow,
  },
  ownerName: {
    marginRight: 70,
  },
  ownerImage: {
    borderColor: GlobalStyles.colors.white,
    borderWidth: 2,
    borderRadius: '50%',
    height: 70,
    width: 70,
    position: 'absolute',
    right: 8,
    top: 8,
    zIndex: 3,
    backgroundColor: GlobalStyles.colors.lightBlue,
  },
  cardImages: {
    height: 250,
    backgroundColor: GlobalStyles.colors.pink,
  },
  cardDetails: {
    padding: 16,
    backgroundColor: GlobalStyles.colors.white,
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    // backgroundColor: GlobalStyles.colors.yellow,
  },
  address: {
    paddingBlock: 4,
    fontSize: 16,
    fontWeight: '300',
    // backgroundColor: GlobalStyles.colors.green,
  },

  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: GlobalStyles.colors.lightBlue,
  },
  categoryType: {
    // padding: 6,
    paddingInline: 8,
    paddingBlock: 2,
    borderRadius: 4,
    backgroundColor: GlobalStyles.colors.searchBarBg,
  },
  cardIcons: {
    flexDirection: 'row',
    gap: 8,
  },
});
