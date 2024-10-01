import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation
import imagePath from '../../theme/imagePath';
import fonts from '../../theme/fonts';
const LoginScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  // Navigate to AuthScreen with parameters
  const navigateToAuth = isLogin => {
    navigation.navigate('Auth', {isLogin}); // Pass isLogin parameter
  };

  return (
    <ImageBackground
      source={imagePath.backgroundImage} // Ensure the correct path to your image
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => navigateToAuth(false)}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigateToAuth(true)}>
            <LinearGradient
              colors={['#783C25', '#EF7749']}
              style={styles.gradient}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <Text style={styles.buttonText}>LOG IN</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: -15, // Adjust to bring the buttons near the bottom of the screen
    width: '100%',
    height: 225,
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 28, // Padding inside the container
    paddingHorizontal: 10, // Adjust horizontal padding for better layout
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  signUpButton: {
    width: '90%',
    height: 64, // Set height to 64pt
    backgroundColor: '#38A169',
    borderRadius: 15,
    marginBottom: 18, // Add space between the sign-up and log-in buttons
    justifyContent: 'center', // Vertically center the text
    alignItems: 'center',
  },
  loginButton: {
    width: '90%',
    height: 64, // Set height to 64pt
    borderRadius: 15,
    justifyContent: 'center', // Vertically center the text
    alignItems: 'center',
  },
  gradient: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    justifyContent: 'center', // Vertically center the text
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: fonts.Montserrat_SemiBold,
  },
});



export default LoginScreen;
