import React, { useState } from 'react';
import { View, TextInput, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import fonts from '../../theme/fonts';

const InputField = ({
  label,
  placeholder,
  icon,
  value,
  onChangeText,
  secureTextEntry = false,
  inputStyle,
  wrapperStyle,
  labelStyle,
  iconStyle,
  showPasswordToggle = false, // New prop to conditionally show password icon
  onTogglePasswordVisibility,
  showPasswordIcon,
  hidePasswordIcon,
  backgroundColor = '#FFFFFF',
  borderColor = '#F2F2F2',
  borderWidth = 1,
  line = false,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handlePasswordToggle = () => {
    setPasswordVisible(!isPasswordVisible);
    if (onTogglePasswordVisibility) {
      onTogglePasswordVisibility(!isPasswordVisible);
    }
  };

  return (
    <View style={[styles.inputWrapper, { backgroundColor, borderColor, borderWidth }, wrapperStyle]}>
      {icon && <Image source={icon} style={[styles.icon, iconStyle]} />}
      {line && <View style={styles.line} />}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry && !isPasswordVisible} // Conditionally toggle visibility
        style={[styles.input, inputStyle]}
      />
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      {showPasswordToggle && (
        <TouchableOpacity onPress={handlePasswordToggle}>
          <Image
            source={isPasswordVisible ? hidePasswordIcon : showPasswordIcon} // Toggle icons based on state
            style={[styles.icon, styles.passwordIcon, iconStyle]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 16,
    marginVertical: 10,
  },
  label: {
    position: 'absolute',
    left: '10%',
    top: -10,
    fontSize: 14,
    color: '#7E868C',
    paddingHorizontal: 2,
    fontFamily: fonts.Montserrat_Medium,
  },
  input: {
    flex: 1,
    paddingLeft: 30,
    fontFamily: fonts.Montserrat_Medium,
  },
  icon: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  passwordIcon: {
    marginRight: 0,
    width: 25,
    height: 25,
  },
  line: {
    backgroundColor: 'red',
    width: 1,
    height: 20,
    marginRight: 10,
  },
});

export default InputField;
