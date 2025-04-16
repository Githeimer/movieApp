import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

export interface SearchBarProps {
    onPress: () => void;
    placeholder: string;
}

const SearchBar = ({onPress,placeholder}:SearchBarProps) => {
  return (
    <View className='flex-row items-center  bg-dark-200 rounded-full px-5 py-4'>
        <AntDesign name='search1'  size={15} className='resize-x ' color="#AB8BDDaa"/>
        <TextInput onPress={onPress} placeholder={placeholder} value="" onChangeText={()=>{}} placeholderTextColor={"#a8b5db"} className='flex-1 ml-2 text-white'></TextInput>
    </View>
  )
}

export default SearchBar