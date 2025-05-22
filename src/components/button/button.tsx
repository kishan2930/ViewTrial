import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './buttonStyles';

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  style?: object;
}

const Button: React.FC<ButtonProps> = ({children, onPress, style}) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && styles.pressed}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;
