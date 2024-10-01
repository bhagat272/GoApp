import React from 'react';
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
 export default function ForgotPassword() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Image
            source={imagePath.backButtonImage}
            style={styles.backButtonImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={imagePath.icon} style={styles.logo} />
      </View>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>
        Enter your registered email address {'\n'} to receive OTP
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <Image source={imagePath.email} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          editable={true}
        />
      </View>

      {/* Next button at the bottom */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('OtpScreen')}>
        <LinearGradient
          colors={['#783C25', '#EF7749']}
          style={[styles.gradient, {height: 54}]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
          <Text style={styles.buttonText}>Next</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
