import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import imagePath from '../../../theme/imagePath';
import InputField from '../../../components/InputField/InputField';
import GradientButton from '../../../components/commonButtons/GradientButton';
import styles from './styles';

const Changepassword = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={imagePath.backButtonImage}
                style={styles.backButton}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Change Password</Text>
          </View>

          <View style={styles.profileContainer}>
            <Image source={imagePath.icon} style={styles.profileImage} />
            <Text style={styles.profileName}>
              Set new password for {'\n'} your account
            </Text>
          </View>

          <View style={styles.menuContainer}>
            <InputField
              label="Old password"
              placeholder="Enter your old password"
              icon={imagePath.lock}
              secureTextEntry={true}
              showPasswordToggle={true}
              showPasswordIcon={imagePath.showPassword}
              hidePasswordIcon={imagePath.openEye}         />

            <InputField
              label="New password"
              placeholder="Enter a new password"
              icon={imagePath.lock}
              secureTextEntry={true}
              showPasswordToggle={true}
              showPasswordIcon={imagePath.showPassword}
              hidePasswordIcon={imagePath.openEye}
            />

            <InputField
              label="Confirm New password"
              placeholder="Re-enter your new password"
              icon={imagePath.lock}
              secureTextEntry={true}
              showPasswordToggle={true}
              showPasswordIcon={imagePath.showPassword}
              hidePasswordIcon={imagePath.openEye}
            />
          </View>
        </ScrollView>

        <GradientButton
          text="Update"
          onPress={() => {
            navigation.goBack();
            console.log('Profile updated');
          }}
          height={64}
          buttonStyle={styles.updateButton}
        />
      </View>
    </SafeAreaView>
  );
};

export default Changepassword;
