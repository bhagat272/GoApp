import {StyleSheet} from 'react-native';
import fonts from '../../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 25,
  },
  hamburgerIcon: {
    top: 2,
    padding: 10,
    width: 30,
    height: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontFamily: fonts.Montserrat_SemiBold,
    color: '#111B34',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 5,
  },
  profileImage: {
    width: 114,
    height: 114,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#FFA500',
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontFamily: fonts.Montserrat_SemiBold,
  },
  profileEmail: {
    color: '#7E868C',
    fontFamily: fonts.Montserrat_Regular,
  },
  editProfileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    height: 32,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#D1D5D8',
    borderRadius: 8,
  },
  addPhotoIcon: {
    width: 11.8,
    height: 11.8,
    marginRight: 5,
    alignSelf: 'center',
  },
  editProfileText: {
    color: '#111B34',
    fontSize: 12,
    fontFamily: fonts.Montserrat_Regular,
  },
  menuContainer: {
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Ensures space between left and right content
    alignItems: 'center',
    paddingVertical: 13,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  menuText: {
    fontSize: 16,
    fontFamily: fonts.Montserrat_Medium,
    color: '#1E2022',
  },
  menuItemRight: {
    alignItems: 'flex-end', // Aligns the right icon to the extreme right
  },
  rightIcon: {
    width: 8.44, // Adjust as needed for icon size
    height: 8.01,
    resizeMode: 'contain',
  },
    // Modal styles
    absolute: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 1, // Ensures it stays on top of the content
    },
  
    // Modal styles
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modal: {
      backgroundColor: 'white',
      padding: 24,
      borderRadius: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      alignItems: 'center',
      width: '80%',
    },
    modalText: {
      color: '#4B5563',
      marginBottom: 16,
      fontFamily: fonts.Montserrat_Medium,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    button: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 12,
      marginHorizontal: 8,
      flex: 1,
      alignItems: 'center',
    },
    cancelButton: {
      backgroundColor: 'black',
    },
    confirmButton: {
      backgroundColor: '#D97706',
    },
    buttonText: {
      color: 'white',
      fontFamily: fonts.Montserrat_Medium,
    },
});

export default styles;
