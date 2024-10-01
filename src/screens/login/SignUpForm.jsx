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
import imagePath from '../../theme/imagePath';
import {useNavigation} from '@react-navigation/native';
import fonts from '../../theme/fonts';
const SignUpForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // State for checkbox
  const navigation = useNavigation();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const toggleCheckbox = () => {
    setIsChecked(!isChecked); // Toggle checkbox state
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Enter your details to create {'\n'} your account</Text>

      {/* Email Input with Icon and Label */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Image source={imagePath.email} style={styles.icon} />
          <View style={{backgroundColor: 'red', width: 1, height: 20}} />
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

      <View style={styles.row}>
        <TouchableOpacity onPress={toggleCheckbox}>
          <Image
            style={styles.checkbox}
            source={isChecked ? imagePath.checkgreen : imagePath.uncheck}
          />
        </TouchableOpacity>
        <Text onPress={()=>navigation.navigate("Privacy")}>
          I agree with <Text style={styles.linkText}>Privacy Policy</Text> &{' '}
          <Text style={styles.linkText} onPress={()=>navigation.navigate("Terms")}>Terms & Conditions</Text>
        </Text>
      </View>

      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate('CreateProfileScreen')}>
        <LinearGradient
          colors={['#783C25', '#EF7749']}
          style={styles.gradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // width: '100%',
    // padding: 10,
    backgroundColor: '#F5F5F5', // Background color for the container
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.Montserrat_SemiBold,
    // fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#111B34', // Title color
  },
  subtitle: {
    fontFamily: fonts.Montserrat_Regular,
    fontSize: 14,
    color: '#7E868C',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    // width: '100%',
    // flex:1,
    // marginHorizontal:10,
    marginVertical: 10,
  },
  inputWrapper: {
    // position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Input background color
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 70,
  },
  label: {
    position: 'absolute',
    left: '10%',
    top: -10,
    fontSize: 14,
    color: '#7E868C',
    paddingHorizontal: 10,
    fontFamily: fonts.Montserrat_SemiBold,
  },
  input: {
    flex: 1,
    marginLeft: 10, // Space for the icon
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
    marginTop: 10,
  },
  checkbox: {
    width: 22,
    height: 22,
    marginLeft: 10,
    marginRight: 10,
  },
  linkText: {
    color: '#111B34',
    textDecorationLine: 'underline',
    fontFamily: fonts.Montserrat_Regular,
  },
  signupButton: {
    // width: '100%',
    marginTop: 45,
    marginLeft:25
    
  },
  gradient: {
    width: 312,
    height: 54,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    
   },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily:fonts.Montserrat_Medium
  },
});

export default SignUpForm;
