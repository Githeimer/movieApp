import { View, Text, Image } from 'react-native'
import React from 'react'
import { Movie } from '@/interface/interface';
import { Link } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const MovieCart = ({...props}:Movie) => {
    console.log(props.poster_path);
  return (
    <Link href={`/movies/${props.id}`} asChild>
        <TouchableOpacity className='w-[30%]'>
            {props.poster_path ? (
            <Image source={{
                uri: `https://image.tmdb.org/t/p/w500/${props.poster_path}`
            }}
            className='w-full h-52 rounded:lg'
            resizeMode='cover'
            />
            ) : (
            <View className='w-full h-52 rounded-lg bg-gray-700 flex items-center justify-center'>
                <Text className='text-sm text-gray-400'>No Image</Text>
            </View>
            )}
            <Text className='text-sm font-bold text-white mt-2' numberOfLines={1}>{props.title}</Text>

            <View className='flex-row items-center justify-start gap-x-1'>
            <AntDesign name='star' size={12} color='#ffc342' />
            <Text className='text-xs text-gray-300'>{Math.round(props.vote_average/2)}</Text>
            </View>
        </TouchableOpacity>
    </Link>
  )
}

export default MovieCart