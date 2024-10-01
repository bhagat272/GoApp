import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import fonts from '../../theme/fonts';

const GradientButton = ({
  text,
  onPress,
  buttonStyle,
  textStyle,
  gradientColors,
  height = 64,
  width,
}) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer]} onPress={onPress}>
      <LinearGradient
        colors={gradientColors || ['#783C25', '#EF7749']}
        style={[styles.gradient, {height, width}, buttonStyle]} // Make sure buttonStyle comes after
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
  },
  gradient: {
    justifyContent: 'center', // Centers the text vertically
    alignItems: 'center', // Centers the text horizontally
    borderRadius: 16, // Default borderRadius (can be overridden)
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: fonts.Montserrat_Medium,
  },
});

export default GradientButton;
