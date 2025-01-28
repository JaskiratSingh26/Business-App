import { Image, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'

import {useUser} from'@clerk/clerk-expo'
import { useNavigation, useRouter } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { RefreshControl } from 'react-native';

const Userbusines = () => {

let navigation=useNavigation()

const [refreshing, setRefreshing] = useState(false);
    let {user}=useUser()
    let useremail=user.emailAddresses[0]?.emailAddress
 let router =useRouter()
    const [businesses, setBusinesses] = useState([]);



    async function fetchingUserbusines() {
        setBusinesses([])
        let q = query(collection(db, 'Businseslist'),where("Mail","==",useremail))
        let querysnphsot = await getDocs(q)
        querysnphsot.forEach((item) => {


            setBusinesses(prev=>[...prev,{id:item?.id,...item.data()}])
        })
        console.log('fnction rusing ')
        console.log(businesses,'list')

    }

    const onRefresh = async () => {
        setRefreshing(true);
        await fetchingUserbusines();
        setRefreshing(false);
      };

// async function deletebusines(item) {
//     console.log('deleting ',item.name,item.id)
//     const docRef = doc(db, 'Businseslist', item.id);
//     console.log('docRef:', docRef);
//     try {
//         console.log('Deleting document...');
//         await deleteDoc(docRef);
//         ToastAndroid.show('DELETED',ToastAndroid.BOTTOM)
//       } catch (error) {
//         console.error('Error deleting document:', error);
//       }

//   console.log('deleted ',item.name)

// }
async function deletebusines(item) {
    console.log('deleting ', item.name, item.id);
    const docRef = doc(db, 'Businseslist', item.id);
    console.log('docRef:', docRef);
  
    try {
      console.log('Deleting document...');
      await deleteDoc(docRef);
      console.log('Document deleted successfully!');
      ToastAndroid.show('DELETED', ToastAndroid.BOTTOM);
      console.log('deleted ', item.name);
      await fetchingUserbusines()
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  }


    useEffect(() => {

navigation.setOptions({
    headerShown:true,
    headerTitle:'My busisness',
})

        fetchingUserbusines()
    
        
    }, [])




return (
  <View style={{ flex: 1 }}>
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {businesses.length > 0 ? (
        businesses.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              router.push('/businesmainscareen/' + item.id);
            }}
          >
            <View style={styles.card}>
              <Image
                source={{ uri: item?.imageurl }}
                style={styles.fullWidthImage}
              />
              <View style={styles.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '98%',
                  }}
                >
                  <Text style={styles.name}>{item?.name}</Text>
                  <TouchableOpacity onPress={() => deletebusines(item)}>
                    <MaterialIcons name="restore-from-trash" size={28} color="black" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.address}>
                  <Text style={{ textDecorationLine: 'underline' }}>
                    {item?.address}
                  </Text>
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.noBusinessText}>No Business Found</Text>
      )}
    </ScrollView>
  </View>
);
}




export default Userbusines
let styles = StyleSheet.create({
    fullWidthImage: {
      width: '100%',
      height: 180, // Reduced height
      resizeMode:"covers",
      borderRadius: 10,
    },
    cardContent: {
      padding: 8, // Reduced padding
    },
    card: {
      backgroundColor: '#E8E6E5',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginBottom: 8, // Reduced margin
      width: '100%', // Set width to 45% of the screen
      height: 270, 
      // Set height to 200
      marginTop:10,
      gap:5
    },
    name: {
      fontSize: 16, // Reduced font size
      fontWeight: '900',
      color: '#333',
    },
    address: {
      fontSize: 14, // Reduced font size
      fontWeight: 700,
      color: '#666',
    },
    rating: {
      fontSize: 14, // Reduced font size
      color: '#666',
    },
    ratingicon: {
      width: 20, // Reduced width
      height: 20, // Reduced height
      borderRadius: 50,
    },
    cardContent:{
        gap:5,
padding:'2%'
    },
    noBusinessText: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 16,
      color: 'gray',
    },
  });