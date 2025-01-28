import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import { useEffect } from 'react'
import Businsecard from './Businsecard'

const Businselist = () => {

    let [businselist, setbusinselist] = useState([])

    async function fetchinshops() {
        setbusinselist([])
        let q = query(collection(db, 'Businseslist'))
        let querysnapshot = await getDocs(q)
        querysnapshot.forEach((item, index) => {
            // setbusinselist(prev => [...prev, item.data()])
            setbusinselist(prev => [...prev, { id: item?.id, ...item?.data() }])
        })

    }

    useEffect(() => {
        fetchinshops()
        console.log('list od popluar buusines',businselist)
    }, [])
    console.log('list od popluar buusines',businselist)

    return (
        <View
            style={{
                padding: '4%'

            }}
        >
            <Text
                style={{
                    fontSize: 15,
                    fontWeight: 700,

                }}
            >Popluar Business</Text>

            <View>

                <FlatList
                    horizontal={true}

                    data={businselist}
                    renderItem={({ item, index }) => (
                        <Businsecard key={index} data={item} />
                    )}

                />

            </View>



        </View>
    )
}

export default Businselist

const styles = StyleSheet.create({})