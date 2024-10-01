
import { StyleSheet } from 'react-native';
import fonts from '../../../theme/fonts';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F8F8',
      paddingHorizontal: 20,
      justifyContent: 'flex-start', // Ensure content starts from the top
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 50,
    },
    backButton: {
      padding: 10,
    },
    backButtonImage: {
      width: 44,
      height: 44,
    },
    logoContainer: {
      alignItems: 'center',
      marginVertical: 30,
    },
    logo: {
      width: 108,
      height: 108,
    },
    title: {
      fontSize: 24,
      fontFamily:fonts.Montserrat_SemiBold,
       textAlign: 'center',
      color: '#333',
      marginBottom: 10,
    },
    subtitle: {
      textAlign: 'center',
      color: '#7E868C',
      marginBottom: 20,
      fontFamily:fonts.Montserrat_Medium,
  
    },
    inputContainer: {
      width: '100%',
      marginTop: 10,
      marginBottom: 10,
    },
    inputWrapper: {
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFFFFF', // Input background color
      padding: 10,
      borderRadius: 10,
    },
    label: {
      position: 'absolute',
      left: '10%',
      top: -10,
      fontSize: 14,
      color: '#7E868C',
      paddingHorizontal: 10,
      fontFamily: fonts.Montserrat_Medium
      
    },
    input: {
      flex: 1,
      paddingLeft: 40, // Space for the icon
      color: '#111B34', 
      fontFamily: fonts.Montserrat_Regular,
      fontSize:16
      // Input text color
    },
    icon: {
      marginRight: 10,
      width: 20,
      height: 20,
    },
    button: {
      width: '100%',
      position: 'absolute',
      bottom: 20, // Position button 20px above the bottom of the screen
      left: 20,
      right: 20,
      borderRadius: 12,
      alignItems: 'center',
    },
    gradient: {
      width: '100%',
      paddingVertical: 15,
      alignItems: 'center',
      borderRadius: 12,
    },
    buttonText: {
      color: '#FFFFFF',
       fontSize: 16,
       fontFamily:fonts.Montserrat_Medium
    },
  });
export  default styles;