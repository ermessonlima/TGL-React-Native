import React from 'react';
import Bets from '../screens/Bets';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Account from '../screens/Account';
import Recover from '../screens/Recover';
import  TabHome  from '../components/IconsTabBar/TabHome';
import  TabMoney  from '../components/IconsTabBar/TabMoney';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  TabAccount  from '../components/IconsTabBar/TabAccount';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Auth = createStackNavigator();
const Tabs = createBottomTabNavigator();

function HomeTab() {
    return (
        <Tabs.Navigator
            tabBarOptions={{
                style: {
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    height: 70,
                    zIndex:10,
                    elevation:10
                },
                activeTintColor: '#707070',
                tabStyle: {
                    paddingTop: 5,
                    paddingBottom: 5,
                    zIndex:10,
                    elevation:10
                }
            }}
        >
            <Tabs.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarLabel:'',
                    tabBarIcon:({focused, size, color})=>(
                        <TabHome  size={size} color={color} focused={focused}/>
                    )
                }}
            />
            <Tabs.Screen
            
                name="Bets"
                component={Bets} 
                options={{
                  
                    tabBarLabel:'',
                    tabBarIcon:({size, color})=>(

                        <TabMoney />
                        
                    )
                }}
             />
            <Tabs.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarLabel:'',
                    tabBarIcon:({focused, size, color})=>(
                        <TabAccount  size={size} color={color} focused={focused}/>
                    )
                }}
            />
        </Tabs.Navigator>
    )
}

export default function AuthRoutes() {
    return (
        <NavigationContainer>
            <Auth.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Auth.Screen name="SignIn" component={SignIn} />
                <Auth.Screen name="SignUp" component={SignUp} />
                <Auth.Screen name="Recover" component={Recover} />
                <Auth.Screen name="HomeTab" component={HomeTab} />
            </Auth.Navigator>
        </NavigationContainer>
    )
}