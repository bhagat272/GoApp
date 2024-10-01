import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import {useRoute} from '@react-navigation/native'; // To get route parameters
import fonts from '../../theme/fonts';
import imagePath from '../../theme/imagePath';

const AuthScreen = () => {
  const route = useRoute(); // Get route parameters
  const {isLogin} = route.params; // Get isLogin parameter passed from LoginScreen

  const [isLoginState, setIsLoginState] = useState(isLogin); // Set initial state based on the parameter

  useEffect(() => {
    setIsLoginState(isLogin); // Update the state if the parameter changes
  }, [isLogin]);

  return (
    <View style={styles.container}>
       {/* Logo */}
      <Image
        source={imagePath.icon} // Ensure correct path to your logo
        style={styles.logo}
      />

      {/* Tabs for switching between Login and Sign Up */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => setIsLoginState(true)}
          style={[styles.tabButton, isLoginState && styles.activeTab]}>
          <Text style={[styles.tabText, isLoginState && styles.activeTabText]}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setIsLoginState(false)}
          style={[styles.tabButton, !isLoginState && styles.activeTab]}>
          <Text style={[styles.tabText, !isLoginState && styles.activeTabText]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>

      {/* Display Login or Sign Up form */}
      {isLoginState ? <LoginForm /> : <SignUpForm />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#F2F2F3',
    padding: 4,
    borderRadius: 12,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: '#FFFFFF',
    elevation: 6,
  },
  tabText: {
    fontSize: 16,
     fontFamily:fonts.Montserrat_Medium
  },
  activeTabText: {
    color: '#111B34',
    fontFamily:fonts.Montserrat_SemiBold
  },
});

export default AuthScreen;
