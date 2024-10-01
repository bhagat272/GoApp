import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import imagePath from '../../../theme/imagePath';
import styles from './styles';

export default function ResetPassword() {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  // Navigate to AuthScreen with parameters
  const navigateToAuth = isLogin => {
    navigation.navigate('Auth', {isLogin}); // Pass isLogin parameter
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.logoContainer}>
        <Image source={imagePath.icon} style={styles.logo} />
      </View>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.subtitle}>Set a new password for your account.</Text>
      {/* <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <Image source={imagePath.email} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          editable={true}
        />
      </View> */}
      {/* Password Input with Icon and Label */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Image source={imagePath.lock} style={styles.icon} />
          <TextInput
            placeholder="Enter your Password"
            secureTextEntry={!passwordVisible}
            style={styles.input}
          />
          <Text style={styles.label}>Password</Text>
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image source={imagePath.showPassword} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Confirm Password Input with Icon and Label */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Image source={imagePath.lock} style={styles.icon} />
          <TextInput
            placeholder="Confirm your Password"
            secureTextEntry={!confirmPasswordVisible}
            style={styles.input}
          />
          <Text style={styles.label}>Confirm Password</Text>
          <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
            <Image source={imagePath.openEye} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Next button at the bottom */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToAuth(true)}>
        <LinearGradient
          colors={['#783C25', '#EF7749']}
          style={[styles.gradient, {height: 54}]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
          <Text style={styles.buttonText}>Submit</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
 