import React, {useState} from 'react';
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
import {BlurView} from '@react-native-community/blur'; // Import BlurView
import imagePath from '../../../theme/imagePath';
import styles from './styles';

const ProfileScreen = () => {
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

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Profile</Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={imagePath.hamburgerIcon}
              style={styles.hamburgerIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.profileContainer}>
          <Image source={imagePath.profilephoto} style={styles.profileImage} />
          <Text style={styles.profileName}>Jhone Doe</Text>
          <Text style={styles.profileEmail}>jhonendoe@gmail.com</Text>
          <TouchableOpacity
            style={styles.editProfileButton}
            onPress={() => navigation.navigate('EditProfile')}>
            <Image
              source={imagePath.addPhotoIcon}
              style={styles.addPhotoIcon}
            />
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuContainer}>
          <MenuItem
            iconImage={imagePath.lockIcon}
            text="Change Password"
            onPress={() => navigation.navigate('Changepassword')}
          />
          <MenuItem iconImage={imagePath.infoIcon} text="About"  onPress={() => navigation.navigate('About')}/>
          <MenuItem
            iconImage={imagePath.actionItem}
            text="Privacy Policy"
            onPress={() => navigation.navigate('Privacy')}
          />
          <MenuItem iconImage={imagePath.readIcon} text="Terms & Conditions"  onPress={() => navigation.navigate('Terms')} />
          <MenuItem
            iconImage={imagePath.logoutIcon}
            text="Logout"
            onPress={handleLogout}
          />
          <MenuItem iconImage={imagePath.deleteIcon} text="Delete Account"  onPress={() => navigation.navigate('Delete')}/>
        </View>
      </ScrollView>

      {/* Logout Confirmation Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>
              Are you sure you want to logout?
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

const MenuItem = ({iconImage, text, onPress}) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <View style={styles.menuItemLeft}>
      <Image source={iconImage} style={styles.menuIcon} />
      <Text style={styles.menuText}>{text}</Text>
    </View>
    <View style={styles.menuItemRight}>
      <Image source={imagePath.rightIcon} style={styles.rightIcon} />
    </View>
  </TouchableOpacity>
);

export default ProfileScreen;
