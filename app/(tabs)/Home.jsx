import { View, Text, SafeAreaView ,ScrollView} from 'react-native'
import React from 'react'
import Header from '../../components/HOMECREENCOMPOENST/Header'
import Slider from '../../components/HOMECREENCOMPOENST/Slider'
import Categorylist from '../../components/HOMECREENCOMPOENST/Categorylist'
import Businselist from '../../components/HOMECREENCOMPOENST/Businselist'

const Home = () => {
  return (
    <SafeAreaView
    style={{
    
    }} >
    <ScrollView
    
    
    showsVerticalScrollIndicator={false}>
      
  



  {/* header */}

<Header/>



  {/* {slider} */}
<Slider/>

  {/* catgeory */}

<Categorylist/>


  {/* POPOPLAY BUSUNESNn */}

  <Businselist/>
  </ScrollView>
    </SafeAreaView>
  )
}

export default Home