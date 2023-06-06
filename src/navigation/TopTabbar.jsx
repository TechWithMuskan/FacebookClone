import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../utils/Colors';
import {TabData} from '../data/TabData';

const Tab = createMaterialTopTabNavigator();

const TopTabbar = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarShowLabel: false,
          tabBarActiveTintColor: Colors.primaryColor,
          tabBarInactiveTintColor: Colors.grey,
        })}>
        {TabData.map(tab => (
          <Tab.Screen
            key={tab.id}
            name={tab.name}
            component={tab.route}
            options={{
              tabBarIcon: ({color, focused}) => (
                <VectorIcon
                  type={focused ? tab.activeiconType : tab.inactiveIconType}
                  name={focused ? tab.activeIconName : tab.inactiveIconName}
                  size={focused ? tab.size : tab.unFocusSize}
                  color={color}
                />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </>
  );
};

export default TopTabbar;
