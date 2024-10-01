import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import imagePath from '../../../theme/imagePath';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
export default function OtpScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={imagePath.icon} style={styles.logo} />
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>
        A 6-digit verification code {'\n'} was just sent to ••••••••@gmail.com
      </Text>
      <View style={styles.otpContainer}>
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.resendText}>Resend in: 30 sec</Text>

      {/* Verify button positioned at the bottom */}
      <TouchableOpacity
        style={styles.verifyButton}
        onPress={() => navigation.navigate('ResetPassword')}>
        <LinearGradient
          colors={['#783C25', '#EF7749']}
          style={styles.gradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
          <Text style={styles.verifyButtonText}>Verify</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
