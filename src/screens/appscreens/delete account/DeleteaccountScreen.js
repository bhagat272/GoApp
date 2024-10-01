import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import imagePath from '../../../theme/imagePath';
import InputField from '../../../components/InputField/InputField';
import GradientButton from '../../../components/commonButtons/GradientButton';
import styles from './styles';
import { BlurView } from '@react-native-community/blur';

const DeleteAccountScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

  const handleLogout = () => {
    setModalVisible(true);
  };

  const confirmLogout = () => {
    setModalVisible(false);
    navigation.navigate('LoginScreen');
  };

  const cancelLogout = () => {
    setModalVisible(false);
  };

  


  return (
    <SafeAreaView style={styles.container}>
          {/* BlurView should be applied only when the modal is visible */}
      {modalVisible && (
        <BlurView
          style={styles.absolute} // Full-screen blur effect
          blurType="light" // You can also use 'dark' or 'extraDark'
          blurAmount={10} // Adjust this value for intensity
          reducedTransparencyFallbackColor="white" // In case blur is not supported
        />
      )}
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
            <Text style={styles.headerText}>Delete Account</Text>
          </View>

          <View style={styles.profileContainer}>
            <Image source={imagePath.icon} style={styles.profileImage} />
            <Text style={styles.profileName}>Enter your password {'\n'}to delete your account
            </Text>
          </View>

          <View style={styles.menuContainer}>
            <InputField
              label="Password"
               placeholder="Enter your password"
              icon={imagePath.lock}
              secureTextEntry={true}
              showPasswordToggle={true}
              showPasswordIcon={imagePath.showPassword}
              hidePasswordIcon={imagePath.openEye}         />
 
          </View>
        </ScrollView>

        <GradientButton
          text="Delete Account"
          onPress={handleLogout}
          height={64}
          buttonStyle={styles.updateButton}
        />
      </View>
 
       {/* Logout Confirmation Modal */}
       <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>
            Are you sure you want to delete account?
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={cancelLogout}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.confirmButton]}
                onPress={confirmLogout}>
                <Text style={styles.buttonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>


    </SafeAreaView>
  );
};

export default DeleteAccountScreen;
