import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DealsPage from '../screens/appscreens/dealspage/DealsPage';
import FavoritesScreen from '../screens/appscreens/favorites/FavoritesScreen';
import ProfileScreen from '../screens/appscreens/Profile/ProfileScreen';
import Tabs from './Bottomnavigation';
import PostNewDealScreen from '../screens/appscreens/PostNewDeal/PostNewDealScreen';

const Drawer = createDrawerNavigator();

const Sidebar = () => {
  return (
    <Drawer.Navigator initialRouteName="Tab" screenOptions={{headerShown: false}}> 
      <Drawer.Screen name="Tab" component={Tabs} />
      <Drawer.Screen name="Home" component={DealsPage} />
      <Drawer.Screen name="Favorite" component={FavoritesScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Post" component={PostNewDealScreen} />
     </Drawer.Navigator>
  );
};

export default Sidebar;


// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { ImageBackground, View, Text, Image } from 'react-native';
// import DealsPage from '../screens/appscreens/dealspage/DealsPage';
// import FavoritesScreen from '../screens/appscreens/favorites/FavoritesScreen';
// import ProfileScreen from '../screens/appscreens/Profile/ProfileScreen';
// import Tabs from './Bottomnavigation';
// import PostNewDealScreen from '../screens/appscreens/PostNewDeal/PostNewDealScreen';
// import imagePath from '../theme/imagePath'; // Path to background and icons

// const Drawer = createDrawerNavigator();

// // Custom DrawerContent for a decorative sidebar
// const CustomDrawerContent = (props) => (
//   <ImageBackground 
//     source={{uri:"https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}  // Background image for the drawer
//     style={{ flex: 1, paddingTop: 50 }}   // Adding top padding for design
//   >
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       {/* Add a decorative header or user profile */}
//       <Image 
//         source={imagePath.profileImage} 
//         style={{
//           width: 100, 
//           height: 100, 
//           borderRadius: 50, 
//           marginBottom: 20
//         }}
//       />
//       <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>John Doe</Text>
//       <Text style={{ color: 'lightgray', fontSize: 14 }}>johndoe@gmail.com</Text>
//     </View>

//     {/* Drawer Items */}
//     <View style={{ marginBottom: 50 }}>
//       {props.children}
//     </View>
//   </ImageBackground>
// );

// const Sidebar = () => {
//   return (
//     <Drawer.Navigator
//       initialRouteName="Tab"
//       drawerContent={(props) => <CustomDrawerContent {...props} />}  // Custom drawer content
//       screenOptions={{
//         headerShown: false,
//         drawerStyle: {
//           backgroundColor: 'transparent', // Transparent drawer background
//           width: 280,                     // Adjust the drawer width
//           borderTopRightRadius: 20,        // Rounded corners for a creative look
//           borderBottomRightRadius: 20,
//           shadowOpacity: 0.3,              // Add shadow for depth
//           shadowOffset: { width: 0, height: 5 },
//           shadowRadius: 15,
//           elevation: 10,
//         },
//         drawerType: 'slide',               // Slide-in drawer effect
//         overlayColor: 'rgba(0, 0, 0, 0.5)', // Dim background when drawer is open
//         sceneContainerStyle: {             // Transparency in main view when drawer opens
//           backgroundColor: 'transparent',
//         },
//       }}
//     >
//       <Drawer.Screen name="Tab" component={Tabs} />
//       <Drawer.Screen name="Home" component={DealsPage} />
//       <Drawer.Screen name="Favorite" component={FavoritesScreen} />
//       <Drawer.Screen name="Profile" component={ProfileScreen} />
//       <Drawer.Screen name="Post" component={PostNewDealScreen} />
//     </Drawer.Navigator>
//   );
// };

// export default Sidebar;
