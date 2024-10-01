import fonts from '../../../theme/fonts';
import { StyleSheet} from 'react-native';

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
      fontFamily: fonts.Montserrat_SemiBold,
      textAlign: 'center',
      color: '#333',
      marginBottom: 10,
    },
    subtitle: {
      textAlign: 'center',
      color: '#7E868C',
      marginBottom: 20,
      fontSize: 14,
      fontFamily: fonts.Montserrat_Medium,
    },
    inputContainer: {
      height: 70,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 12,
      backgroundColor: 'white',
      marginBottom: 30,
    },
    icon: {
      width: 24,
      height: 24,
      marginRight: 10,
    },
    input: {
      flex: 1,
      color: '#333',
      fontFamily: fonts.Montserrat_Regular,
      fontSize: 16,
    },
    label: {
      position: 'absolute',
      left: '15%',
      top: -10,
      fontSize: 14,
      color: '#7E868C',
      paddingHorizontal: 2,
      fontFamily: fonts.Montserrat_Medium,
    },
    button: {
      width: '100%',
      position: 'absolute',
      bottom: 20, // Position button 20px above the bottom of the screen
      left: 20,
      right: 20,
      borderRadius: 12,
      alignItems: 'center',
      fontFamily: fonts.Montserrat_Medium,
    },
    gradient: {
      width: '100%',
      paddingVertical: 15,
      alignItems: 'center',
      borderRadius: 12,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
  });

export default styles;