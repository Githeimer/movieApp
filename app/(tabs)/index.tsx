import { Text, TextBase, View } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

export default function Index() {
  const [movieName,setMovieName] = useState<string>();
  return (
    <View className="flex-1 justify-center items-center ">
        <Text className="text-5xl">Welcome Niggu</Text>
    </View>
  ); 
}
