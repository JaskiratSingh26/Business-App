import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserProfileintro from '../../components/Profilesection/UserProfileintro'
import Menubutton from '../../components/Profilesection/Menubutton'

const Profile = () => {
  return (
    <ScrollView
    
style={{
  padding:'4%',

}}

    >


<Text 
style={{
  marginTop:5,
  fontSize:30,
  fontWeight:900,
  fontStyle:'italic',

}}>
  Profile
</Text>
    

{/* user inrto */}

<UserProfileintro/>


{/* MENU LIST */}

<Menubutton/>

    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({})