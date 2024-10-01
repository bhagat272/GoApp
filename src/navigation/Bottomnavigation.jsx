import * as React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, View} from 'react-native';
import imagePath from '../theme/imagePath';
import DealsPage from '../screens/appscreens/dealspage/DealsPage';
import FavoritesScreen from '../screens/appscreens/favorites/FavoritesScreen';
import ProfileScreen from '../screens/appscreens/Profile/ProfileScreen';
 
const Tabs = () => {
  const Bottom = createBottomTabNavigator();

  return (
    <PaperProvider>
      <Bottom.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'black', // Set tab bar background to black
            borderRadius: 16, // Border radius for rounded corners
            marginHorizontal: 10, // Optional: Add margin for better spacing
            position: 'absolute', // Ensure it stays positioned properly
            height: 72, // Set height to adjust padding
            bottom: 12, // Position it slightly above the bottom edge
            paddingBottom: 5, // Padding for tab bar
          },
          tabBarActiveTintColor: 'white', // Icon color when focused
          tabBarInactiveTintColor: 'gray', // Icon color when not focused
        }}>
        <Bottom.Screen
          name="Home"
          component={DealsPage}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size, focused}) => (
              <View style={styles.iconWrapper}>
                {focused && <View style={styles.redTip} />}
                <Image
                  source={imagePath.Home}
                  style={[
                    styles.icon,
                    {tintColor: color, width: size, height: size},
                  ]}
                />
              </View>
            ),
          }}
        />
        <Bottom.Screen
          name="Favorite"
          component={FavoritesScreen}
          options={{
            tabBarLabel: 'Favorite',
            tabBarIcon: ({color, size, focused}) => (
              <View style={styles.iconWrapper}>
                {focused && <View style={styles.redTip} />}
                <Image
                  source={imagePath.Favorite}
                  style={[
                    styles.icon,
                    {tintColor: color, width: size, height: size},
                  ]}
                />
              </View>
            ),
          }}
        />
        <Bottom.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size, focused}) => (
              <View style={styles.iconWrapper}>
                {focused && <View style={styles.redTip} />}
                <Image
                  source={imagePath.Profile}
                  style={[
                    styles.icon,
                    {tintColor: color, width: size, height: size},
                  ]}
                />
              </View>
            ),
          }}
        />
      </Bottom.Navigator>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    alignItems: 'center', // Center the icon
  },
  icon: {
    resizeMode: 'contain', // Ensure the icon scales properly
  },
  redTip: {
    position: 'absolute',
    top: -14, // Position the red tip slightly above the icon
    width: 25, // Width of the red line
    height: 4, // Thickness of the red line
    backgroundColor: '#EF7749', // Color of the red tip
    borderTopLeftRadius: 0, // Top-left corner radius
    borderTopRightRadius: 0, // Top-right corner radius
    borderBottomLeftRadius: 50, // Bottom-left corner radius
    borderBottomRightRadius: 50, // Adds some spacing below the red line
  },
});

export default Tabs;
