import Home from '@/page/home';
import { NavigationContainer, useLinkBuilder, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PortalHost } from '@rn-primitives/portal';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Me from '@/page/me';
import { Icons } from '@/lib/icon';
import Message from '@/page/message';
import Discover from '@/page/discover';
import { Platform, Pressable, Text, View } from 'react-native';
import React from 'react';
import TabBar from '@/components/tabBar';
const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function ApplicationNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#ffffff', }, // 设置全局背景色
        }}
      >
        <Stack.Screen
          name="Home"
          component={() => <Tabs.Navigator screenOptions={{
            headerShown: false, tabBarShowLabel: true, tabBarHideOnKeyboard: true,
            tabBarAllowFontScaling: true,

          }}

            tabBar={props => <TabBar {...props} />}
          >
            <Tabs.Screen name="Home" component={Home} />
            <Tabs.Screen name="Discover" component={Discover} />
            <Tabs.Screen name="Message" component={Message} />
            <Tabs.Screen name="Me" component={Me} />
          </Tabs.Navigator>}
        />
      </Stack.Navigator>
      <PortalHost />
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
