import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import GradientButton from '../../../components/commonButtons/GradientButton';
import imagePath from '../../../theme/imagePath'; // Assuming you have the image path defined here
import styles from './styles';
const CreateProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Profile</Text>

      {/* Profile Image */}
      <View style={styles.profileWrapper}>
        <View style={styles.profileImageContainer}>
          <Image source={imagePath.profileIcon} style={styles.profileImage} />
        </View>
        <TouchableOpacity style={styles.addPhotoButton}>
          <Image source={imagePath.addPhotoIcon} style={styles.addPhotoIcon} />
          <Text style={styles.addPhotoText}>Add Photo</Text>
        </TouchableOpacity>
      </View>

      {/* Name Input Field */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <Image source={imagePath.nameIcon} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your Name"
          editable={true}
        />
      </View>

      {/* Next Button */}
      <View style={styles.buttonWrapper}>
        <GradientButton height={54} width={312} text="Next" buttonStyle={styles.button} />
      </View>
    </View>
  );
};

export default CreateProfileScreen;
