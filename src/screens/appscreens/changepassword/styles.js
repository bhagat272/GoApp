import {StyleSheet} from 'react-native';
import fonts from '../../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8', // Set background color on the root container
  },
  contentWrapper: {
    flex: 1,
    // No need for background color here if container has it
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'transparent', // Make the scroll container transparent
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 25,
    paddingBottom: 100, // Padding to prevent overlapping with the Update button
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 16,
    marginTop: 5,
    width: 44,
    height: 44,
  },
  headerText: {
    position: 'absolute', // Take the text out of the normal flow
    left: 0, // Ensure the text starts at the left of the header
    right: 0, // Ensure the text stretches to the right of the header
    textAlign: 'center', // Center the text within the space
    fontSize: 18,
    color: '#1f2937',
    fontFamily: fonts.Montserrat_SemiBold,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 5,
  },
  profileImage: {
    width: 114,
    height: 114,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 14,
    textAlign:"center",
    fontFamily: fonts.Montserrat_Regular,
    color:"#7E868C"
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
  updateButton: {
    position: 'absolute',
    bottom: 30, // Position the button at the bottom
    left: 16, // Ensure button is aligned within the container
    right: 16,
    borderRadius: 16,
  },
});

export default styles;
