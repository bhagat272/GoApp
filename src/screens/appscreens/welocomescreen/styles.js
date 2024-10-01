import { StyleSheet } from "react-native";
import fonts from '../../../theme/fonts';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#FAFAFA', // Light background color
    },
    title: {
      fontSize: 28,
      fontFamily:fonts.Montserrat_Bold,
      top: -90, // Added margin below the title
      color: '#000000', // Dark text color
      marginTop:60
    },
    logo: {
      width: 237,
      height: 237,
      marginBottom: 20,
      borderRadius: 20, // Rounded corners
    },
    description: {
      fontSize: 16,
      textAlign: 'center',
      color: '#575F62', // Gray color for description text
      lineHeight: 24,
      marginBottom: 30,
      fontFamily:fonts.Montserrat_Regular
    },
    boldText: {
      fontFamily:fonts.Montserrat_SemiBold,
      fontSize:16,
      color:"#2B2D2E"
    },
    buttonWrapper: {
      position: 'absolute',
      bottom: 40, // Position the button near the bottom
       alignItems: 'center',
      
    },
    button: {
       marginHorizontal:31.5,
       fontFamily:fonts.Montserrat_Medium
      // Set width of the button
    },
  });
  export default styles;