import React, {useEffect, useRef} from 'react';
import {View, Animated, ScrollView} from 'react-native';
import {styles} from './skeletonLoadingStyles';

const SkeletonLoading: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0.6,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [fadeAnim]);

  const renderSkeletonItem = () => {
    return (
      <Animated.View style={[styles.skeletonContainer, {opacity: fadeAnim}]}>
        <View style={styles.imageContainer} />
        <View style={styles.contentContainer}>
          <View style={styles.line} />
          <View style={[styles.line, {width: '75%'}]} />
          <View style={[styles.line, {width: '65%'}]} />
          <View style={styles.lastRowContainer}>
            <View style={styles.shortLine} />
            <View style={styles.boxesContainer}>
              <View style={styles.box} />
              <View style={styles.box} />
            </View>
          </View>
        </View>
      </Animated.View>
    );
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}>
      {renderSkeletonItem()}
      {renderSkeletonItem()}
    </ScrollView>
  );
};

export default SkeletonLoading;
