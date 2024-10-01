import { StyleSheet} from 'react-native';
import fonts from '../../../theme/fonts';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f3f4f6',
      marginVertical: 22,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
    },
    userInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    userImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    userText: {
      marginLeft: 8,
    },
    greeting: {
      color: '#4b5563',
    },
    userName: {
      color: '#1f2937',
      fontWeight: 'bold',
    },
    searchSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
     },
     searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      height: 50,
      marginRight: 8,
      borderWidth: 1,
      borderColor: '#e5e7eb',
      borderRadius: 12,
      backgroundColor: 'white',
      paddingLeft: 40,  // Add padding to make room for the icon
    },
    searchIcon: {
      position: 'absolute',
      left: 16,  // Position the icon inside the input field
      width: 20, // Adjust the width
      height: 20, // Adjust the height
      zIndex: 1,  // Ensure the icon is above the input text
    },
    searchInput: {
      flex: 1,
      paddingLeft: 40,  // Ensure the input text doesn't overlap the icon
    },
    
    menuButtonOnSearch: {
      height: 51,
      width: 51,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#1f2937',
    },
    viewAll: {
      color: '#f97316',
    },
    dealItem: {
  marginRight:-12,
  
    },
    dealImage: {
      width: 151,
      height: 186,
    },
    dealPriceContainer: {
      position: 'absolute',
      bottom: 16,
      left: 34,
      padding: 4,
      borderRadius: 8,
    },
    dealPrice: {
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
    heartIconContainer: {
      position: 'absolute',
      top: 16,
      right: 20,
    },
    heartIcon: {
      width: 24,
      height: 24,
    },
    latestDealItem: {
      marginBottom: -5,
      padding:12,
      top:-12
    },
    latestDealHeader: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    latestDealUserImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    latestDealText: {
      marginLeft: 8,
    },
    latestDealUserName: {
      color: '#1f2937',
      fontWeight: 'bold',
    },
    latestDealDescription: {
      color: '#4b5563',
      fontSize: 12,
    },
    latestDealDate: {
      marginLeft: 'auto',
      color: '#4b5563',
      fontSize: 12,
    },
    latestDealImageContainer: {
      marginTop: 8,
    },
    latestDealImage: {
      width: '100%',
      height: 180,
      borderRadius: 8,
    },
    latestDealPriceContainer: {
      position: 'absolute',
      bottom: 8,
      left: 25,
      padding: 4,
      borderRadius: 8,
    },
    latestDealPrice: {
      color: '#ffff',
      fontWeight: 'bold',
      fontSize:16
    }, 
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    modalCloseButton: {
      alignSelf: 'flex-end',
      padding: 10,
    },
    modalCloseText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: '600',
    },
    modalSubtitle: {
      fontSize: 14,
      color: '#999',
      marginTop: 10,
      marginBottom: 20,
    },
    modalCategories: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    modalCategory: {
      backgroundColor: '#f5f5f5',
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 15,
      marginBottom: 10,
    },
    categoryText: {
      fontSize: 14,
    },
    modalButtons: {
      flexDirection: "row",
      justifyContent: 'space-evenly', // Use space-between for more even spacing
      marginTop: 20,
      },
    
    clearButton: {
      backgroundColor: '#7E868C',
      borderRadius: 10,
      width: 160.09,
      height: 44,
      justifyContent: 'center', // Vertically center the text
      alignItems: 'center', // Horizontally center the text
      },
    buttonText:{
      color: '#fff',
      fontSize: 16,
      fontFamily:fonts.Montserrat_Medium
    }
  });

  export default styles;