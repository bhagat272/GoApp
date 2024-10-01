import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 20,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 15,
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      marginLeft: 10,
    },
    dealContainer: {
      padding: 15,
      marginBottom: 20,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    userImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    userInfo: {
      flex: 1,
    },
    userName: {
      fontSize: 16,
      fontWeight: '600',
    },
    description: {
      fontSize: 12,
      color: '#999',
    },
    date: {
      fontSize: 12,
      color: '#999',
    },
    imageContainer: {
      position: 'relative',
      alignItems: 'center',
    },
    productImage: {
      width: '100%',
      height: 200,
      borderRadius: 10,
      resizeMode: 'cover',
    },
    heartIcon: {
      position: 'absolute',
      top: 15,
      right: 10,
      padding: 5,
     },
    likeIcon: {
      width: 42,
      height: 42,
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    price: {
      fontSize: 18,
      fontWeight: '600',
    },
    viewButton: {
      backgroundColor: '#ff7f50',
      paddingVertical: 5,
      paddingHorizontal: 15,
      borderRadius: 20,
    },
    viewText: {
      color: 'white',
      fontSize: 14,
      fontWeight: '500',
    },
    listContainer: {
      paddingBottom: 20,
    },
    backButtonImage: {
      width: 44,
      height: 44,
    },
  });
  export  default styles;