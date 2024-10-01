import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/login/LoginScreen';
import LoginForm from '../screens/login/LoginForm';
import SignUpForm from '../screens/login/SignUpForm';
import AuthScreen from '../screens/login/AuthScreen';
import ForgotPassword from '../screens/appscreens/forgotpassword/ForgotPassword';
import OtpScreen from '../screens/appscreens/otpscreen/OtpScreen';
import WelcomeScreen from '../screens/appscreens/welocomescreen/WelcomeScreen';
import CreateProfileScreen from '../screens/appscreens/createprofile/CreateProfileScreen';
import DealsPage from '../screens/appscreens/dealspage/DealsPage';
import ResetPassword from '../screens/appscreens/resetpassword/ResetPassword';
import TrendingDeals from '../screens/appscreens/trendingdeals/TrendingDeals';
import Tabs from './Bottomnavigation';
import Sidebar from './Sidebarnavigation';
import DetailsScreen from '../screens/appscreens/DetailsScreen/DetailsScreen';
import PrivacypolicyScreen from '../screens/appscreens/privacypolicy/PrivacypolicyScreen';
import TermsScreen from '../screens/appscreens/termsandcondition/Terms';
import EditprofileScreen from '../screens/appscreens/editprofile/EditprofileScreen';
import Changepassword from '../screens/appscreens/changepassword/Changepassword';
import About from '../screens/appscreens/about Us/About';
import DeleteAccountScreen from '../screens/appscreens/delete account/DeleteaccountScreen';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Changepassword" component={Changepassword} />
        <Stack.Screen name="LoginForm" component={LoginForm} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="SignupForm" component={SignUpForm} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="CreateProfileScreen" component={CreateProfileScreen}/>
        <Stack.Screen name="DealsPage"  component={DealsPage} />
        <Stack.Screen name="TrendingDeals"  component={TrendingDeals} />
        <Stack.Screen name="Tabs" component={Tabs}/>
        <Stack.Screen name="Drawer" component={Sidebar}/>
        <Stack.Screen name="Privacy" component={PrivacypolicyScreen} />
        <Stack.Screen name="Terms" component={TermsScreen} />
        <Stack.Screen name="EditProfile" component={EditprofileScreen}/>
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="Delete" component={DeleteAccountScreen}/>

      </Stack.Navigator>
     </NavigationContainer>
  );
}
