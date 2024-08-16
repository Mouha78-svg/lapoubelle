import { useLocalSearchParams, useRouter } from 'expo-router'
import React  from 'react'
import { Text, View ,Image} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { bodyParts } from '../constants'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated'
// import Ionicons from '@react-native-vector-icons/ionicons';

export default function Exercises () {
    const router = useRouter();
    const item = useLocalSearchParams();
    // console.log(item)
    return (
        <ScrollView>
          <StatusBar style='light' />
          <Image 
           source={item.image}
           style={{width: wp(100), height: hp(45)}}
           className="rounded-b-[40px]"
          />
          <TouchableOpacity
          onPress={() => router.back()}
          >
             <Text style={{fontSize: 40 , color: 'green'}}>Retour</Text>
          </TouchableOpacity>
          <Animated.Text entering={FadeInDown.delay(100).duration(300).springify()} className='mx-4 space-y-3 mt-4' style={{marginBottom: 70}}>
            <Text style={{fontSize: hp(5), fontWeight: 500, color: "green", letterSpacing: 2}}>{item.title}</Text>
            <View >
              <Text style={{fontSize: 20, fontWeight: 300}}>{item.desc}</Text>
            </View>
          </Animated.Text>
        </ScrollView>
    )
    {/* <TouchableOpacity onPress={() => router.back()}>
        <Text>Go back</Text>
    </TouchableOpacity> */}
    
}
