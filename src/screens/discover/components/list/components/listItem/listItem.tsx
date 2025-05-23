import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalStyles} from '@constants/styles';
import Icon from '@components/icon/icon';
import {IconName} from '@constants/iconName';

const ListItem: React.FC = () => {
  return (
    <Pressable>
      <View style={styles.cardHeader}>
        <Text>Image</Text>
        <Text style={styles.ownerName}>Name</Text>
        <View style={styles.ownerImage}>
          <Image height={20} width={20} />
        </View>
      </View>
      <View style={styles.cardImages}></View>
      <View style={styles.cardDetails}>
        <Text style={styles.price}>700000</Text>
        <Text style={styles.address}>
          801/1 Dyer Street, Richmand, VIC 3121
        </Text>
        <View style={styles.accomodation}>
          <View style={styles.accomo}>
            <Icon name={IconName.bed} size={32} svgWidth={28} svgHeight={28} />
            <Text>3</Text>
          </View>
          <View style={styles.accomo}>
            <Icon name={IconName.bath} size={32} svgWidth={28} svgHeight={28} />
            <Text>3</Text>
          </View>
          <View style={styles.accomo}>
            <Icon name={IconName.car} size={32} svgWidth={28} svgHeight={28} />
            <Text>3</Text>
          </View>
          <View style={styles.accomo}>
            <Icon
              name={IconName.meterSqrt}
              size={32}
              svgWidth={28}
              svgHeight={28}
            />
            <Text>500 m2</Text>
          </View>
        </View>
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
    fontSize: 18,
    fontWeight: '300',
    // backgroundColor: GlobalStyles.colors.green,
  },
  accomodation: {
    paddingBlock: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    // backgroundColor: GlobalStyles.colors.orange,
  },
  accomo: {
    flexDirection: 'row',
    // backgroundColor: GlobalStyles.colors.pink,
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
