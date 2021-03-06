import React, { Component, useEffect, useState } from "react";
import {Dimensions,TouchableOpacity,Text,View,Image} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NearMeScreen from './NearMeScreen'
import MessageIcon from "../../Components/MessageIcon";
import MessageIcon1 from './../../Components/MessageIcon1'
import ProfileScreen from './ProfileScreen'

function NearMeStack({navigation}){
    const Stack=createStackNavigator();
    return(
 
            <Stack.Navigator initialRouteName="nearme">
                <Stack.Screen 
                    name="nearme" 
                    options={({  route }) => ({
                        headerStyle: { borderBottomColor: 'grey', borderBottomWidth: 0.7, height: 110 },
                        headerStatusBarHeight: 32,
                        headerTitle: props => <Text style={{textAlign:'center', fontSize: 18, color:'black', fontFamily: 'Poppins-SemiBold'}}>Nearby People</Text>,
                        headerTransparent: false,
                        headerLeft: ()=>      <TouchableOpacity onPress={()=> navigation.openDrawer()} style={{}}>
                                                    <View style={{padding:10, top: 3}}>
                                                        <Image resizeMode="contain" style={{height: 25, width: 25}} source={require('./../../Assets/Images/menu.png')} />
                                                    </View>
                                              </TouchableOpacity>,
                        headerRight: ()=>   <MessageIcon  navigation={navigation}  /> 
                                 })}
                    component={NearMeScreen}
                />  
  
                <Stack.Screen name="profile" 
                   options={({  route }) => ({
                    headerStyle: { borderBottomColor: '#EA2C2E', borderBottomWidth: 2, backgroundColor:'#EA2C2E'  },
                    headerStatusBarHeight: 32,
                    headerTitle: props => <Text style={{textAlign:'center', fontSize: 18, color:'white', fontFamily: 'Poppins-SemiBold'}}>Profile</Text>,
                    headerTransparent: false,
                    headerLeft: ()=>      <TouchableOpacity onPress={()=> navigation.openDrawer()} style={{}}>
                                                <View style={{padding:10, top: 3}}>
                                                    <Image resizeMode="contain" style={{height: 25, width: 25}} source={require('./../../Assets/Images/menu1.png')} />
                                                </View>
                                          </TouchableOpacity>,
                    headerRight: ()=>   <MessageIcon1  navigation={navigation}  /> 
                             })}
                             component={ProfileScreen}
                />
                {/* {props => <ProfileScreen {...props} navigation={navigation} />}
                </Stack.Screen> */}
                
            </Stack.Navigator>
   
    )
}

export default NearMeStack