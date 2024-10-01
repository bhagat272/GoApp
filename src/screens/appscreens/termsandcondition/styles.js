import { StyleSheet } from "react-native";
import fonts from "../../../theme/fonts";
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f3f4f6',
      paddingTop: 50,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      marginBottom: 20,
    },
    headerText: {
      position: 'absolute', // Take the text out of the normal flow
      left: 0,  // Ensure the text starts at the left of the header
      right: 0,  // Ensure the text stretches to the right of the header
      textAlign: 'center',  // Center the text within the space
      fontSize: 18,
      color: '#1f2937',
      fontFamily: fonts.Montserrat_SemiBold,
    },
    backButton: {
      marginRight: 16,
      marginTop: 5,
      width: 44,
      height: 44,
    },
    content: {
      alignItems: 'center',
      paddingHorizontal: 16,
    },
    image: {
      width: 100,
      height: 100,
      marginBottom: 20,
    },
    text: {
      fontSize: 16,
      fontFamily: fonts.Montserrat_Regular,
      color: '#7E868C',
      textAlign: 'left',
      marginBottom: 20,
    },
  });

  export default styles;