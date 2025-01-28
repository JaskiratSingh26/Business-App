import {  FlatList, SafeAreaView, StyleSheet, Text, View ,Image} from 'react-native'
import React, { useState } from 'react'
import { db } from '../../config/FirebaseConfig'
import { query, collection, getDoc, getDocs } from 'firebase/firestore'
import { useEffect } from 'react'
const Slider = () => {
 const [sliderlist,setsliderlist]=useState([])

  async function getslider() {
    setsliderlist([])

    const q = query(collection(db, 'Sliders'))
    const querysnapshot = await getDocs(q)
    // console.log('Query snapshot:', querysnapshot)
 querysnapshot.forEach((doc)=>{
 
  setsliderlist(prev=>[...prev,doc.data()])
 })

  }

  useEffect(() => {
    getslider()
    // console.log('dslider list',sliderlist)
  }, [])
  // console.log('dslider list',sliderlist)

  return (
    <SafeAreaView 
    style={
      styles.mianbox
    }
   >


      <Text 
       style={styles.txt} >
        # Special for you
      </Text>
<FlatList  

horizontal={true}
showsHorizontalScrollIndicator={false}

 data={sliderlist}
 renderItem={({item,index})=>(
  <Image 
  
source={{uri:item.image}}
  style={styles.img}
  />
 )}

/>

    </SafeAreaView>
  )
}

export default Slider

const styles = StyleSheet.create({
mianbox:{
  paddingHorizontal:'4%',
  paddingVertical:'4%'
}
  ,txt:{
    fontSize:25,
    
    paddingHorizontal:2,
    fontWeight:800,
    fontStyle:'italic'
  },
  img:{
    marginTop:15,
    width: 300, // Fixed width
    height: 200, // Fixed height
    resizeMode: 'cover',
    borderRadius:10,
    marginRight:16,
    borderColor:'black',
    borderWidth:2
  }
})
