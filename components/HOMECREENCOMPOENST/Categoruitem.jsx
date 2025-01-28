import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const Categoruitem = ({data}) => {
    return (
        <View 

        style={{
            
  
        
            padding:15

        }}
        >


<Image 

source={{uri:data?.imageurl}}
style={styles.img}
/>
  <Text  style={{
textAlign:'center',
fontSize:10

  }} >
  {data?.name}
  </Text>
        </View>
    )
}

export default Categoruitem

const styles = StyleSheet.create({


    img:{
        width:53,
        height:53,
        borderRadius:50,

    }
})