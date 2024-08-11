import React from "react";  
import { NavigationContainer } from "@react-navigation/native";  
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";  
import { createStackNavigator } from "@react-navigation/stack";  
import Home from './screens/Home'; 
import TodoDetails from './screens/TodoDetails'; 
import { Ionicons } from '@expo/vector-icons';  

const Stack = createStackNavigator();  
const Tab = createBottomTabNavigator();  

function HomeStack() {  
    return (  
        <Stack.Navigator>  
            <Stack.Screen name="Home" component={Home} />  
            <Stack.Screen name="TodoDetails" component={TodoDetails} />  
        </Stack.Navigator>  
    );  
}  

function TabNavigator() {  
    return (  
        <Tab.Navigator>  
            <Tab.Screen  
                name="Main"    
                component={HomeStack}  
                options={{  
                    tabBarIcon: ({ color, size }) => (  
                        <Ionicons name="home-outline" size={size} color={color} />  
                    ),  
                }}   
            />  
        </Tab.Navigator>  
    );  
}  

const Navigation = () => {  
    return (  
        <NavigationContainer>  
            <TabNavigator />  
        </NavigationContainer>  
    );  
};  

export default Navigation;