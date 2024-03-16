import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListenNowScreen from '../components/listenNow/ListenNowScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '../components/search/SearchScreen';
import LibraryScreen from '../components/library/LibraryScreen';

const MainTab = createBottomTabNavigator();
const ListenNowNavigator = createNativeStackNavigator();
const SearchNavigator = createNativeStackNavigator();
const LibraryNavigator = createNativeStackNavigator();

const ListenNowStackNavigator = () => {
  return (
    <ListenNowNavigator.Navigator>
      <ListenNowNavigator.Screen
        options={{title: 'Listen Now'}}
        name="ListenNow"
        component={ListenNowScreen}
      />
    </ListenNowNavigator.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <SearchNavigator.Navigator>
      <SearchNavigator.Screen name="Search" component={SearchScreen} />
    </SearchNavigator.Navigator>
  );
};

const LibraryStackNavigator = () => {
  return (
    <LibraryNavigator.Navigator>
      <LibraryNavigator.Screen name="Library" component={LibraryScreen} />
    </LibraryNavigator.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator screenOptions={{headerShown: false}}>
      <MainTab.Screen
        options={{title: 'Listen Now'}}
        name="ListenNow"
        component={ListenNowStackNavigator}
      />
      <MainTab.Screen name="Library" component={LibraryStackNavigator} />
      <MainTab.Screen name="Search" component={SearchStackNavigator} />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
