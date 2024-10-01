import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: '#FAFAFA',
      alignItems: 'center',
      // justifyContent: 'flex-start',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333',
      marginTop: 40,
    },
    profileWrapper: {
      alignItems: 'center',
      marginBottom: 20,
    },
    profileImageContainer: {
     
       marginBottom: 10,
     },
    profileImage: {
      width: 114,
      height: 114,
        resizeMode: 'cover',
    },
    addPhotoButton: {
      width: 100,
      height: 32, // Ensure this height is sufficient for the text
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFF',
      paddingHorizontal: 15,
      borderRadius: 8,
      borderColor: '#D1D5D8',
      borderWidth: 1,
    },
    addPhotoIcon: {
      width: 11.8,
      height: 11.8,
      marginRight: 5,
    },
    addPhotoText: {
      fontSize: 12,
      color: '#EF7749',
      textAlign: 'center', // Center the text
      lineHeight: 32, // Set lineHeight equal to button height for vertical centering
    },
    inputContainer: {
      height: 70,
      width: 326,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 16,
      paddingHorizontal: 10,
      paddingVertical: 12,
      backgroundColor: 'white',
      marginBottom: 30,
      marginTop: 20,
    },
    icon: {
      width: 24,
      height: 24,
      marginRight: 10,
    },
    input: {
      flex: 1,
      color: '#333',
    },
    label: {
      position: 'absolute',
      left: '15%',
      top: -10,
      fontSize: 14,
      color: '#666',
      backgroundColor: '#fff',
      paddingHorizontal: 2,
    },
    buttonWrapper: {
      position: 'absolute',
      bottom: 40,
      width: '100%',
      alignItems: 'center',
    },
    button: {
      width: 312,
      borderRadius: 12,
      left:20
    },
  });

export default styles;