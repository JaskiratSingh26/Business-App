import { View, Text, Image, FlatList, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'


const Businseelistbycatgeory = () => {
  let navigation = useNavigation()
  let { category } = useLocalSearchParams()
  let [Businseslist, setbusinseelist] = useState([])
  let [loading,setloading]=useState(false)
  const router=useRouter()
  async function databtcategory() {
    setloading(true)
    setbusinseelist([])
    let q = query(collection(db, "Businseslist"), where("category", "==", category))
    let querysnapshot = await getDocs(q)
    querysnapshot.forEach((item) => {
      setbusinseelist(prev => [...prev,{id:item?.id,...item.data()}])
    })
    setloading(false)
  }
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: category


    })

    databtcategory()

    console.log('sep cial category accoridg to page', Businseslist)
  }, [])
  console.log('sepcial category accoridg to page', Businseslist)



return (
  <View style={{ flex: 1 }}>  
  {loading? <ActivityIndicator 
 size={'30%'}
  />:''}



    {Businseslist.length > 0       ? (

      <FlatList
        style={{ flex: 1 }}
onRefresh={databtcategory}
        refreshing={loading}
        data={Businseslist}
        renderItem={({ item, index }) => (


<TouchableOpacity
onPress={()=>{
  router.push('/businesmainscareen/'+item.id)
}}

>




          <View style={styles.card}>
            <Image
              source={{ uri: item?.imageurl }}
              style={styles.img}
            />
            <View style={{ gap: 10 }}>
              <Text style={styles.name}>
                {item?.name}
              </Text>
              <Text style={styles.address}>
                <Text style={{
                  textDecorationLine: 'underline'
                }}>
                  {item?.address}
                </Text>
              </Text>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
                <Image
                  source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.m0ewFY6f3CK1xlgwf-BN9AHaHa&pid=Api&P=0&h=220' }}
                  style={styles.ratingicon}
                />
                <Text style={styles.rating}>
                  4.5
                </Text>
              </View>
            </View>
          </View>
          </TouchableOpacity>

          
       
        )}
      />
    ) :   loading? (
      ''
    )
  :(<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text
      style={{
        fontSize: 30,
        fontWeight: 800
      }}
    >
      No Business found
    </Text>
  </View>)
  }
  </View>
)
}

export default Businseelistbycatgeory

let styles = StyleSheet.create({
  img: {
    width: 120,
    height: 110,
    borderRadius: 10,
  },
  ratingicon: {
    width: 20,
    height: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: '2%',
    flexDirection: 'row',
    gap: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  address: {
    fontSize: 14,
    color: '#666',
  },
  rating: {
    fontSize: 14,
    color: '#666',
  },
})