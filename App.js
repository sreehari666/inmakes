import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MobileForm from "./src/MobileForm";
import OtpForm from "./src/OtpForm";
import StudentDeatails from "./src/StudentDetails";
import SchoolBoard from "./src/SchoolBoard";
import AppTour from "./src/AppTour";
import Home from "./src/Home";
import CoureseDetails from "./src/CourseDetails";
import CourseVideoList from "./src/CourseVideoList";
import Profile from "./src/Profile";
import Video from "./src/Video";
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from "./src/Drawer/DrawerContent";


const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();



function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MobileForm" component={MobileForm} options={{headerShown:false}} />
      <Stack.Screen name="OtpForm" component={OtpForm} options={{headerShown:false}} />
      <Stack.Screen name="StudentDetails" component={StudentDeatails} options={{headerShown:false}} />
      <Stack.Screen name="SchoolBoard" component={SchoolBoard} options={{headerShown:false}} />
      <Stack.Screen name="AppTour" component={AppTour} options={{headerShown:false}} />
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="CourseDetails" component={CoureseDetails} options={{headerShown:false}} />
      <Stack.Screen name="CourseVideoList" component={CourseVideoList} options={{headerShown:false}} />
      <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
      <Stack.Screen name="Video" component={Video} options={{headerShown:false}} />
      <Stack.Screen name="MyDrawer" component={MyDrawer} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={(props)=> <DrawerContent {...props} />} openByDefault>
      <Drawer.Screen name="Home" component={Home} options={{headerShown:false}} /> 
      <Drawer.Screen name="MobileForm" component={MobileForm} options={{headerShown:false}} /> 
    </Drawer.Navigator>
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}