import { ScrollView,RefreshControl, StyleSheet, Text, View } from 'react-native'
import React, { cloneElement, useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { collection, doc, getDoc, query } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import { ScreenStackHeaderSearchBarView } from 'react-native-screens'
import Intro from '../../components/Businescreensections/Intro'
import ReviewSection from '../../components/Businescreensections/ReviewSection'

const Mainscreem = () => {
    let { id } = useLocalSearchParams()
    let [data, setdata] = useState()
    let [loading, setloading] = useState(false)
    let navigation = useNavigation()
    async function fetechingdatabyid() {
        setloading(true)
        setdata([])
        let docref = doc(db, 'Businseslist', id)
        try {
            const docSnap = await getDoc(docref);
            if (docSnap.exists()) {
                console.log(docSnap.data());
                // setdata(docSnap.data())
                setdata({id:docSnap?.id,...docSnap.data()})

            } else {
                console.log("Document does not exist")
            }

        } catch (error) {
            console.log(error)
        }

        setloading(false)

    }
    useEffect(() => {
        fetechingdatabyid()

        console.log('data  of the shop id ', data)
    }, [])
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: data?.name
        })
        console.log('data  of the shop id ', data)
    }, [data])
    console.log('data  of the shop id ', data)
    return (
        <ScrollView 
        
        refreshControl={
            <RefreshControl  
            
            refreshing={loading}
            onRefresh={fetechingdatabyid}/>
        }
        >
            {/* {intro} */}

            <Intro data={data} />
       

            {/* {actionsbutton} */}
            {/* action commpoent ko intro ke andr add kr diya  */}



      
           

            {/* review section */}

            <ReviewSection data={data}/>


        </ScrollView>
    )
}

export default Mainscreem

const styles = StyleSheet.create({})