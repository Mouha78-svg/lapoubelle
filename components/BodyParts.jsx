import React  from 'react'
import { Text, View,Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { bodyParts } from '../constants';
import { FlatList } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function BodyParts () {
    const router = useRouter();
    return (
      <View>
        <Text 
        className="mx-4"
        style={{fontSize: hp(5) ,fontWeight: 300}}>Approches... </Text>

        <FlatList 
          data={bodyParts}
          numColumns={2}
          keyExtractor={item => item.name}
          showsVerticalScrollIndicator={false}
          contentContainerStyle= {{paddingBottom: 50, paddingTop: 20}}
          columnWrapperStyle={{justifyContent: "space-between"}}
          renderItem={({item,index}) => <BodyPartCard router={router} index={index} item={item} /> }
        />
      </View>
    )
}

function BodyPartCard ({item,router,index}){
    return (
        <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()} >
            <TouchableOpacity
            onPress={() => router.push({pathname: '/exercises', params: item})}
            style={{width: wp(44), height: wp(52)}}
            className="flex justify-end p-4 mb-4 mx-2"
            >
           <Image 
           source={item.image}
           resizeMode= 'cover'
           style={{width: wp(44), height: wp(52)}}
           className="rounded-[35px] absolute"
           />
           <Text style={{fontSize: 30, textAlign: 
            'center',color: "#fff", fontWeight: 800
           }}>
            {item?.name}
           </Text>
            </TouchableOpacity>
        </Animated.View>
    )
}
