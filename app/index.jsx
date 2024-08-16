import React from 'react'
import { Text, View ,Image,TouchableOpacity} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import Animated , { FadeIn, FadeInDown, FadeOut }  from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function  Index ()  {
  const router = useRouter();
  
    return (
      <Animated.View entering={FadeInDown.delay(100).springify()} className="flex-1 flex justify-center items-center ">
        <StatusBar style='light' />
        <Image className="h-full w-full absolute" source={require("../assets/images/poubwelkome.png")} />
        <LinearGradient colors={['transparent', 'green']} 
        style={{width: wp(100),height: hp(70)}}
        start={{x: 0.5,y:0}}
        end={{x: 0.0,y:0.9}}
        className="flex justify-end pb-14 space-y-8"
         />
       <View className="flex items-center" >
        <Text style={{color : "#fff", fontSize : 50,fontWeight: 700,letterSpacing: 7, marginBottom : 20}}> La
           <Text className="text-green-500">POUBELLE </Text>
            </Text>
        </View>

        <Animated.View entering={FadeInDown.delay(200).springify()}>
  
          <TouchableOpacity
          onPress={() => router.push("home")}
           style={{height: hp(7), width: wp(80), 
          backgroundColor: "green", borderRadius : 20, marginBottom: 40, marginBottom: 40}}
           className=" flex items-center justify-center mx-auto"
           
           >
          
            <Text style={{color: "white", fontSize : 40}}>Decouvrir</Text>
          </TouchableOpacity>
          
        </Animated.View>
      </Animated.View>
    )
}
