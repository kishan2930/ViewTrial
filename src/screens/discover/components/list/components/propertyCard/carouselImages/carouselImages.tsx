import React, {useState} from 'react';
import {View, Image, TouchableOpacity, FlatList, ViewToken} from 'react-native';
import Icon from '@components/icon/icon';
import {IconName} from '@constants/iconName';
import {scale} from '@utils/scale';
import {GlobalStyles} from '@constants/styles';
import {styles} from './carouselImagesStyles';

interface CarouselItem {
  sequence: number;
  caption?: string | null;
  url: string;
}
interface CarouselImagesProps {
  images: CarouselItem[];
  baseImageUrl?: string;
}

type ViewableItemsChanged = {
  viewableItems: Array<ViewToken>;
  changed: Array<ViewToken>;
};

const CarouselImages: React.FC<CarouselImagesProps> = ({
  images,
  baseImageUrl,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = React.useRef<FlatList<CarouselItem>>(null);

  const goToNextImage = () => {
    if (activeIndex < images.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: activeIndex + 1,
        animated: true,
      });
      setActiveIndex(activeIndex + 1);
    }
  };

  const goToPrevImage = () => {
    if (activeIndex > 0) {
      flatListRef.current?.scrollToIndex({
        index: activeIndex - 1,
        animated: true,
      });
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleViewableItemsChanged = React.useRef(
    ({viewableItems}: ViewableItemsChanged) => {
      if (viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index || 0);
      }
    },
  ).current;

  const renderItem = ({item}: {item: CarouselItem}) => {
    const imageUrl = `${baseImageUrl}${item.url}`;
    return (
      <View style={styles.imageContainer}>
        <Image
          source={{uri: imageUrl}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    );
  };

  const showLeftArrow = activeIndex > 0;
  const showRightArrow = activeIndex < images.length - 1;

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        keyExtractor={item => item.sequence.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
      />

      {showLeftArrow && (
        <TouchableOpacity
          style={[styles.arrowButton, styles.leftArrow]}
          onPress={goToPrevImage}
          activeOpacity={0.7}>
          <Icon
            name={IconName.back}
            size={scale(24)}
            svgHeight={scale(24)}
            svgWidth={scale(24)}
            color={GlobalStyles.colors.white}
          />
        </TouchableOpacity>
      )}

      {showRightArrow && (
        <TouchableOpacity
          style={[styles.arrowButton, styles.rightArrow]}
          onPress={goToNextImage}
          activeOpacity={0.7}>
          <Icon
            name={IconName.discover}
            size={scale(24)}
            svgHeight={scale(24)}
            svgWidth={scale(24)}
            color={GlobalStyles.colors.white}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CarouselImages;
