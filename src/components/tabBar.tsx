import React from 'react';
import { View, Text, Pressable, Platform } from 'react-native';
import { Icons } from '@/lib/icon';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

type TabBarProps = BottomTabBarProps;

const TabBar: React.FC<TabBarProps> = (props) => {
  return (
    <View className="flex-row bg-white border-t border-gray-100" style={{
      height: Platform.OS === 'ios' ? 80 : 60,
      paddingBottom: Platform.OS === 'ios' ? 20 : 0,
    }}>
      {props.state.routes.map((route, index) => {
        const { options } = props.descriptors[route.key];
        const isFocused = props.state.index === index;
        const onPress = () => {
          const event = props.navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            props.navigation.navigate(route.name);
          }
        };

        let icon;
        if (route.name === 'Home') {
          icon = <Icons.home size={24} color={isFocused ? '#000' : '#999'} />;
        } else if (route.name === 'Discover') {
          icon = <Icons.discover size={24} color={isFocused ? '#000' : '#999'} />;
        } else if (route.name === 'Message') {
          icon = <Icons.message size={24} color={isFocused ? '#000' : '#999'} />;
        } else if (route.name === 'Me') {
          icon = <Icons.profile size={24} color={isFocused ? '#000' : '#999'} />;
        }

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            className="flex-1 items-center justify-center"
          >
            {icon}
            <Text className={`text-xs mt-1 ${isFocused ? 'text-black' : 'text-gray-400'}`}>
              {route.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default TabBar;