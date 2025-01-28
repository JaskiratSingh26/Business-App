import { FlatList, Image, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import * as Linking from 'expo-linking';

const Actionbtton = ({ data }) => {

  function pressingbtton(item){

    if(item.name=='Share'){
     Share.share({
      message:'Share  '  +data?.name+'to others'
     })
    }
    else{

      Linking.openURL(item?.url)
    }
   
  }
  let btnsdata = [
    {
      id: 1,
      name: 'Call',
      number: data?.contact,
      icon: 'https://tse2.mm.bing.net/th?id=OIP.zDsa2MoFeghUwytLWnDKwwHaHa&pid=Api&P=0&h=220',
      url: 'tel:' + data?.contact
    },

    {
      id: 3,
      name: 'Share',
      number: data?.Share,
      icon: 'https://icon-library.com/images/arrows-icon-png/arrows-icon-png-5.jpg',
      url: ''
    }, {
      id: 4,
      name: 'Mail',
      number: data?.Emailmail,
      icon: 'https://static.vecteezy.com/system/resources/previews/016/716/465/non_2x/gmail-icon-free-png.png',
      url: 'mailto:' + data?.Mail
    }
  ]
  return (
    <View>


      <FlatList
    
   horizontal={true}
   contentContainerStyle={{width: '100%', justifyContent:'space-evenly'}}
  
 data={btnsdata}
 renderItem={({item,index})=>(

<>


<View  style={{

  gap:10,
  alignItems:'center',
  marginTop:5,
  
 
  
}} > 
<TouchableOpacity 
onPress={()=>{
  pressingbtton(item)
}}
>

<Image 

source={{uri:item?.icon}}

style={{
  width:40,
  height:40,
  borderRadius:90,
  backgroundColor:'white',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
}}
/>

<Text
style={{


  textAlign:'center'
}}
>
  {item?.name}
</Text>


</TouchableOpacity>
</View>


</>

  )}

      />


<Text style={{
  fontWeight:800,
  fontSize:15
}} >
  About
</Text>
<Text 
style={{
  padding:5,
  fontWeight:500,
  fontStyle:'italic'
}}
 >
  {data?.about}
</Text>
    </View>
  )
}

export default Actionbtton

const styles = StyleSheet.create({})