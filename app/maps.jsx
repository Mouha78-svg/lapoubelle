import React, { useEffect, useRef, useState } from 'react'
import MapView, {Marker} from 'react-native-maps';
import { Text, StyleSheet, View ,Button, Dimensions} from 'react-native'
import * as Location from 'expo-location'

export default function    Index () {
    // let dinaLat = Location.getCurrentPositionAsync({})
    // let adresslat = await Location.reverseGeocodeAsync(dinaLat.coords.latitude)
    // let adresslon = Location.reverseGeocodeAsync(dinaLat.coords.longitude)
    // console.log(adresslat)
  let initialLocation = {
    latitude:  14.499454,
    longitude: -14.445561,
    
  }
  const [myLocation, setMyLocation] = useState(initialLocation)
  const [pin, setPin] = useState({})
  const mapRef = useRef(null)
  const [region, setRegion] = useState({
    latitude: initialLocation.latitude,
    longitude: initialLocation.longitude,
  });
  
  let local = {
    latitude:  '14.499454',
    longitude: '-14.445561',
  }
  useEffect(()=> {
    setPin(local)
   _getLocation()
  },[])

  function  focusGetLocation () {
    if (myLocation.latitude && myLocation.longitude){
      const newRegion = {
        latitude: parseFloat(myLocation.latitude),
        longitude: parseFloat(myLocation.longitude),
      }
      if(mapRef.current){
        mapRef.current.animateToRegion(newRegion, 1000)
      }
    }
  }

  const _getLocation =async() => {
    try{
      let { status } = await Location.requestForegroundPermissionsAsync()

      if(status !== 'granted'){ 
        console.warn('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setMyLocation(location.coords)
      console.log(location);
    }
    catch(err){
      console.warn(err);
    }
  }

    return (
      <View style={styles.container}>
         <MapView
         style={styles.map}
         region={region}
         onRegionChangeComplete={setRegion}
         ref={mapRef}
        //  provider='google'
          >
            
            { myLocation.latitude && myLocation.longitude &&
              <Marker
                coordinate={{
                  latitude: myLocation.latitude,
                  longitude: myLocation.longitude
                }}
                title='Ma position actuelle'
                description='Je suis ici'
              />
            }
              { 
                pin.latitude && pin.longitude &&
                <Marker
                  coordinate={{
                    latitude: parseFloat(pin.latitude),
                    longitude: parseFloat(pin.longitude)
                  }}
                  title='Ma position actuelle'
                  description='Je suis ici'
                />
              }
          </MapView>
          <View style={styles.btnContainer}>
            <Button  title='Obtenir une localisation' onPress={focusGetLocation} />
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
      btnContainer: {
        position: 'absolute',
        bottom: 20,
        maxWidth: '100%',
        alignItems: 'center',
        backgroundColor: 'green',
      }
})
