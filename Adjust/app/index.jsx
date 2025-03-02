 // index.jsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { registerRootComponent } from 'expo'; // Use this if you're in an Expo project

// Import screens
import Home from '../components/Home/Home.jsx';
import Profile from '../components/Profile/Profile.jsx';
import Chat from '../components/Chat/Chat.jsx';
import Add from '../components/Add/Add.jsx';

// Import layout
import _Layout from './_layout';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <_Layout>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Add" component={Add} />
      </Tab.Navigator>
    </_Layout>
  );
}

export default registerRootComponent(App);
