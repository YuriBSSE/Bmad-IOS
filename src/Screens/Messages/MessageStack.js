import React, { Component, useEffect, useState } from "react";
import {Dimensions,TouchableOpacity,Text,View,Image} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MessageScreen from "./MessageScreen";
import MessageIcon from "../../Components/MessageIcon";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function MessageStack({navigation}){
    const Stack=createStackNavigator();
    return(
   
            <Stack.Navigator initialRouteName="message">
            <Stack.Screen 
                    name="message" 
                    options={({ navigation, route }) => ({
                        headerStyle: { borderBottomColor: 'grey', borderBottomWidth: 0.7, height: 110  },
                        headerStatusBarHeight: 32,
                        headerTitle: props => <Text style={{textAlign:'center', fontSize: 18, color:'black', fontFamily: 'Poppins-SemiBold'}}>Messages</Text>,
                        headerTransparent: false,
                        headerLeft: ()=>      <TouchableOpacity onPress={()=> navigation.openDrawer()} style={{}}>
                                                    <View style={{padding:10, top: 3}}>
                                                        <Image resizeMode="contain" style={{height: 25, width: 25}} source={require('./../../Assets/Images/menu.png')} />
                                                    </View>
                                              </TouchableOpacity>,
                        headerRight: ()=>   <Icon name="dots-vertical" size={35} color="#B01125" />
                                 })}
                    component={MessageScreen}
                /> 
            </Stack.Navigator>
       
    )
}

export default MessageStack