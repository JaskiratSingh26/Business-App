import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import Categoruitem from './Categoruitem'
import { useRouter } from 'expo-router'
import Explore from '../../app/(tabs)/Explore'
const Categorylist = ({explore=false}) => {
    const [catgeorylist, setcategorulist] = useState([])
    const router = useRouter()
    async function fethcingdata() {
        setcategorulist([])
        let q = query(collection(db, 'Category'))
        let querysnapshot = await getDocs(q)
        querysnapshot.forEach((elemnt) => {
            setcategorulist(prev => [...prev, elemnt.data()])
        })
    }

    useEffect(() => {
        fethcingdata()
    }, [])

    return (
        <SafeAreaView>
         {!explore ? (<View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',

                    width: '99%'
                }}

            >

                <Text style={{
                    fontSize: 15,
                    fontWeight: 700,
                    padding: '4%'

                }}  >

                    Categories
                </Text>

                <Text style={{
                    fontSize: 15,
                    fontWeight: 600,

                    padding: '4%',
                    textDecorationLine: 'underline',
                    color: 'purple'


                }}  >

                    View All
                </Text>
            </View>):''}
            <View  >

                <FlatList
                    horizontal={true}
                    data={catgeorylist}
                    renderItem={({ item, index }) => (

                        <TouchableOpacity onPress={() => {
                            console.log(item.name)
                            router.push('/businesslist/' + item.name)

                        }} >

                            <Categoruitem data={item} key={index} />
                        </TouchableOpacity>
                    )}




                />




            </View>



        </SafeAreaView>
    )
}

export default Categorylist

const styles = StyleSheet.create({})