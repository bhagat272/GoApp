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

// Replace with actual user profile data
const EditprofileScreen = props => {
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
            <Text style={styles.headerText}>Edit Profile</Text>
          </View>

          {/* Profile Content */}
          <View style={styles.profileContainer}>
            <Image
              source={imagePath.profilephoto}
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>Jhone Doe</Text>
            <TouchableOpacity style={styles.editProfileButton}>
              <Image
                source={imagePath.addPhotoIcon}
                style={styles.addPhotoIcon}
              />
              <Text style={styles.editProfileText}>Edit Photo</Text>
            </TouchableOpacity>
          </View>

          {/* Input Fields */}
          <View style={styles.menuContainer}>
            <InputField 
              label="Name"
              placeholder="Enter your name"
              icon={imagePath.nameIcon}
               line={true}
            />

            <InputField
              label="Email"
              placeholder="Enter your email"
              icon={imagePath.email}
               line={true} // Add this prop to display the line after the icon
            />
          </View>
        </ScrollView>

        {/* Update Button */}
        <GradientButton
          text="Update" // Set button text as "Update"
          onPress={() => {
            navigation.goBack();
            // Handle update button press here
            console.log('Profile updated');
          }}
          height={64}
          buttonStyle={styles.updateButton} // Use absolute positioning for the button
        />
      </View>
    </SafeAreaView>
  );
};

export default EditprofileScreen;
