import { useLocalSearchParams, useRouter } from 'expo-router'
import React  from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Exercises () {
    const router = useRouter();
    const item = useLocalSearchParams();
    console.log(item)
    return (
      <View className="mt-20">
        <Text> exercices </Text>
        <TouchableOpacity onPress={() => router.back()}>
            <Text>Go back</Text>
        </TouchableOpacity>
      </View>
    )
}
