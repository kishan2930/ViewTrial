import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Images} from '@constants/images';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {styles} from './splashScreenStyles';

const SplashScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('bottomTab');
    }, 3000);
  });

  return (
    <View style={styles.screen}>
      <Image source={Images.splashScreen} style={styles.image} />
    </View>
  );
};

export default SplashScreen;
