import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Image } from 'react-native';
import ImageSlider from '../components/ImageSlider';
import BodyParts from '../components/BodyParts';


export default function Home () {
    return (
      <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']}>
        <StatusBar style="dark"/>

        <View className="flex-row justify-between items-center mx-5">
         <View className="space-y-2">
        <Text style={{fontSize: hp(4.2)} } className="font-bold traking-wide text-neutral-700" >Protegeons </Text>
        <Text style={{fontSize: hp(5.2)} } className="font-bold traking-wide text-green-500" >LA Nature </Text>
         </View>

        <View
         className="flex-1 justify-center items-center space-y-2">
            <Image 
            style={{height: hp(8), width : hp(8)}}
             source={require("../assets/images/nature.jpg")}
             className="rounded-full"
              />
              <View className=" rounded-full flex justify-center items-center ">
              </View>
        </View> 
        </View>

        <View>
            <ImageSlider />
        </View>

        <View className="flex-1">
            <BodyParts />
        </View>

      </SafeAreaView>
    )
}
