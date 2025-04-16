import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {AntDesign} from "@expo/vector-icons"
import * as NavigationBar from "expo-navigation-bar"
import { useEffect } from 'react'

interface TabIconProps{
    focused:boolean
    iconName:any
    title:string
    size:number
    color :string
}

const TabIconComponent = ({ focused, iconName, title, size, color }: TabIconProps) => {
    useEffect(() => {
      NavigationBar.setBackgroundColorAsync("#030014");
      NavigationBar.setButtonStyleAsync("light");
    }, []);
    return (
      <View className='items-center justify-center '>
        
        {focused ? (
          <ImageBackground
          
            source={require("@/assets/images/gradient.png")}
            className=' rounded-3xl overflow-hidden  min-h-[4rem] min-w-[112px] '
            resizeMode="cover"
          >
            <View className='flex flex-row justify-center items-center h-full mt-1.5'>
            <AntDesign size={17} name={iconName} className='text-dark-100 px-2' />
            <Text className='text-dark-100 font-semibold text-md pr-2'>{title}</Text>
            </View>
          </ImageBackground>
        ) : (
          <AntDesign size={17} name={iconName} color={"gray"} className='mt-1.5'/>
        )}
      </View>
    );
  };
  

const _layout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel:false,
            tabBarItemStyle:{
                width:"100%",
                height:"100%",
                justifyContent:"center",
                alignItems:"center"
            },
            tabBarStyle:{
                backgroundColor:"#0f0323",
                borderRadius:50,
                marginHorizontal:20,
                marginBottom:36,
                height:52,
                overflow:'hidden',
                borderWidth:1,
                borderColor:"#0f0323",
                position:'absolute'
            }
        }}
        >
     <Tabs.Screen 
        name="index"
        options={{
            title:"Home",
            headerShown:false,
            tabBarIcon:({focused,size,color})=>{
                return <>
               <TabIconComponent focused={focused} iconName='home' title='Home' size={size} color={color}/>
                </>
            }
        }}
        />
        <Tabs.Screen 
        name="search"
        options={{
            title:"Search",
            headerShown:false,
            tabBarIcon:({focused,size,color})=>{
                return <>
               <TabIconComponent focused={focused} iconName='search1' title='Search' size={size} color={color}/>
                </>
            }
        }}
        />
         <Tabs.Screen 
        name="saved"
        options={{
            title:"Saved",
            headerShown:false,
            tabBarIcon:({focused,size,color})=>{
                return <>
               <TabIconComponent focused={focused} iconName='star' title='Saved' size={size} color={color}/>
                </>
            }
        }}
        />
         <Tabs.Screen 
        name="profile"
        options={{
            title:"Profile",
            headerShown:false,
            tabBarIcon:({focused,size,color})=>{
                return <>
               <TabIconComponent focused={focused} iconName='user' title='Profile' size={size} color={color}/>
                </>
            }
        }}      
        />

        
    </Tabs>
  )
}

export default _layout