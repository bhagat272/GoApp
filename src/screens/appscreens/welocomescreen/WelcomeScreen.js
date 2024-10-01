import React from 'react';
import {View, Text, Image} from 'react-native';
import imagePath from '../../../theme/imagePath';
import GradientButton from '../../../components/commonButtons/GradientButton';
import styles from './styles';
const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To</Text>
      <Image source={imagePath.largeicon} style={styles.logo} />
      <Text style={styles.description}>
        <Text style={styles.boldText}>Gear on the Go</Text> is an app that lorem{' '}
        {'\n'}
        ipsum dolor sit amet, consectetur{'\n'} sadipiscing elit, sed diam
        nonummy{'\n'}
        eirmod tempor incididunt ut labore et {'\n'}dolore magna!
      </Text>
      <View style={styles.buttonWrapper}>
        <GradientButton
          onPress={() => navigation.navigate('Drawer')}
          text="Get Started"
          buttonStyle={styles.button} // Any additional styles if needed
          height={54}
          width={312} // Set the desired width here
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
