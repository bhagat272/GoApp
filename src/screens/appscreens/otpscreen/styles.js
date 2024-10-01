import { StyleSheet } from "react-native";
import fonts from '../../../theme/fonts';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f3f4f6',
      alignItems: 'center',
      padding: 16,
      justifyContent: 'flex-start', // Ensures content starts from the top
    },
    logo: {
      width: 108,
      height: 108,
      marginBottom: 24,
      marginTop: 100, // Adjust the top margin for spacing
    },
    title: {
      fontSize: 24,
       color: '#1f2937',
      marginBottom: 8,
      fontFamily:fonts.Montserrat_SemiBold
    },
    subtitle: {
      fontSize: 14,
      color: '#7E868C',
      textAlign: 'center',
      marginBottom: 24,
      fontFamily:fonts.Montserrat_Medium
  
    },
    otpContainer: {
      flexDirection: 'row',
      gap: 7,
      marginBottom: 16,
    },
    otpInput: {
      width: 49,
      height: 70,
      borderRadius: 16,
      textAlign: 'center',
      fontSize: 18,
      backgroundColor: '#FFFFFF',
    },
    resendText: {
      color: '#f97316',
      marginBottom: 24,
      fontFamily:fonts.Montserrat_Medium
    },
    verifyButton: {
      width: '100%',
      position: 'absolute',
      bottom: 20, // Position button near the bottom
      left: 20,
      right: 20,
      borderRadius: 16,
      alignItems: 'center',
    },
    gradient: {
      width: '100%',
      height: 54,
      paddingVertical: 12,
      alignItems: 'center',
      borderRadius: 16,
    },
    verifyButtonText: {
      color: '#ffffff',
      fontSize: 16,
      fontFamily:fonts.Montserrat_Medium
     },
  });
  export default styles;