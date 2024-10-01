import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import imagePath from '../../theme/imagePath';
import fonts from '../../theme/fonts';

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>
        Enter your login details to {'\n'} access your account
      </Text>

      {/* Email Input with Icon and Label */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Image source={imagePath.email} style={styles.icon} />
          <View style={{backgroundColor: 'green', width: 1, height: 20}} />

          <TextInput placeholder="Enter your Email" style={styles.input} />
          <Text style={styles.label}>Email</Text>
        </View>
      </View>

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

      <View style={styles.row}>
        <TouchableOpacity
          onPress={toggleCheckbox}
          style={styles.checkboxContainer}>
          <Image
            style={styles.checkbox}
            source={isChecked ? imagePath.checkgreen : imagePath.check}
          />
        </TouchableOpacity>
        <Text style={styles.rememberMeText}>Remember me</Text>
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate('ForgotPassword')} // Corrected onPress navigation
        >
          Forgot Password?
        </Text>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <LinearGradient
          colors={['#783C25', '#EF7749']}
          style={[styles.gradient, {height: 64}]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.guestButton}
        onPress={() => navigation.navigate('WelcomeScreen')}>
        <Text style={styles.buttonText}>GUEST USER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  title: {
    fontSize: 24,
    color: '#111B34',
    marginBottom: 10,
    fontFamily: fonts.Montserrat_SemiBold,
  },
  subtitle: {
    fontSize: 14,
    color: '#7E868C',
    marginBottom: 5,
    textAlign: 'center', // Centered subtitle text
    fontFamily: fonts.Montserrat_Regular,
  },
  inputContainer: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  inputWrapper: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  label: {
    position: 'absolute',
    left: '10%',
    top: -10,
    fontSize: 14,
    color: '#7E868C',
    paddingHorizontal: 2,
    fontFamily: fonts.Montserrat_SemiBold,
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Adjusted for better layout
    width: '100%',
    marginTop: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 22,
    height: 22,
    marginRight: 5,
  },
  rememberMeText: {
    fontSize: 14,
    color: '#7E868C',
    // marginLeft: 6,
    fontFamily: fonts.Montserrat_Medium,
  },
  linkText: {
    textDecorationLine: 'underline',
    color: '#7E868C',
    marginLeft: 'auto',
    fontFamily: fonts.Montserrat_Medium,
  },
  loginButton: {
    width: '100%',
    marginTop: 50,
  },
  gradient: {
    width: '100%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 16,
    justifyContent: 'center', // Centers text vertically
  },
  guestButton: {
    width: '100%',
    height: 64,
    backgroundColor: '#38A169',
    padding: 15,
    alignItems: 'center',
    borderRadius: 16,
    marginTop: 10,
    justifyContent: 'center', // Centers text vertically
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: fonts.Montserrat_SemiBold,
    // Ensures text is centered horizontally
  },
});

export default LoginForm;
