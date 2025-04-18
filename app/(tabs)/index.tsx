import { Image, View, StyleSheet, StatusBar, ScrollView, Text, ActivityIndicator, FlatList } from "react-native";
import { Link } from "expo-router";
import { useState,useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar"
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCart from "@/components/MovieCart";


export default function Index() {
  // this thing will be used to set the notification bar color and the bottom part ko gesture / navigation
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("#030014");
    NavigationBar.setButtonStyleAsync("light");
  }, []);

  const {data:movies,
          loading:movieLoading,
          error:movieError}=useFetch(()=>fetchMovies({query:""}));

  const router= useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#030014" }}>
    <View className="flex-1 bg-[#030014]">
    
      <StatusBar translucent={true} animated={true} backgroundColor={"#ffffff00"} barStyle={"light-content"}></StatusBar>
      <LinearGradient
        colors={["rgba(155,55,255,0.12)", "rgba(0,9,50,0.01)"]}
        style={styles.glow}
      /> 
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={{minHeight:"100%",paddingBottom:10}}>
          <Image source={require("@/assets/images/cool.webp")} className="w-12 h-12 mt-10 mb-1 mx-auto"></Image>

          {movieLoading?(
            <ActivityIndicator size={"large"} color={"#0000ff"} className="mt-10 self-center"></ActivityIndicator>
          ):movieError?(
            <Text>Error : ${movieError.message}</Text>
          ):(
            <View className="flex-1 mt-5">
            <SearchBar onPress={()=>router.push("/search")}
              placeholder={"Search for a movie"}
              ></SearchBar>

              <>
                <Text className="text-lg text-white font-bold mt-5 mb-3">Latest Movies</Text>
                <FlatList 
                  data={movies}
                  renderItem={({item})=>( 
                    <MovieCart {...item}/>
                  )}
                  keyExtractor={(item)=>item.id.toString()}
                  numColumns={3}
                  columnWrapperStyle={{
                    justifyContent:"flex-start",
                    gap:20,
                    paddingRight:5,
                    marginBottom:10,

                  }}
                  className="mt-2 pb-32"
                  scrollEnabled={false}
                  /> 
              </>
          </View>
          )}


                </ScrollView>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  glow: {
    position: "absolute",
    top: -150,
    left: -5,
    width: 400,
    height: 400,
    borderRadius: 200,
    zIndex: 0,
  
  },
});
