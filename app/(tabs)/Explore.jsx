import { View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Categorylist from '../../components/HOMECREENCOMPOENST/Categorylist'
import { Feather } from '@expo/vector-icons'
import { useEffect } from 'react'
import Businesslist from '../../components/EXPLORESCREEN/Businesslist'
import Categoruitem from '../../components/HOMECREENCOMPOENST/Categoruitem'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import BusinessList from '../../components/EXPLORESCREEN/Businesslist'

const Explore = () => {

  const [searchCategory, setSearchCategory] = useState('');
  const [category, setCategory] = useState('');
  const [busineslist, setbusinesslist] = useState([])



//   async function fetchingdata(category) {
//     let q = query(collection(db, 'Businseslist'))
//     let querySnapshot = await getDocs(querySnapshot)
//     querySnapshot.forEach((item) => {
//       setbusinesslist(prev => [...prev, { id: item?.id, ...item.data() }])
//     })
//     console.log('busines g new vla', busineslist)

//   }


//   function sttingtext() {
//     console.log('bttn presed')
//     setCategory(searchCategory)
// fetchingdata(category)
//     setSearchCategory(' ')
//   }

//   useEffect(() => {
//     console.log('new category', category);
//     // if (category && category !== '') {
//     //   fetchingdata(category);
//     // }
//   }, [category]);




  return (


    <View style={{ flex: 1 }}>
      <ScrollView>

     

      <Text

style={{
          fontWeight: 900,
          fontSize: 30
          ,
          padding: '4%'
          ,
          marginTop: '4%'
        }}
        >
        Explore More
      </Text>
   

      {/* search bar */}
      {/* <View style={Styles.searchBox}>
        <TextInput
          placeholder="Search..."
          style={Styles.searchInput}
          value={searchCategory}
          onChangeText={(txt) => setSearchCategory(txt)}
        />

        <TouchableOpacity
          onPress={() => {
            sttingtext()
          }}
        >

          <Feather
            name="search"
            size={32}
            style={Styles.searchIcon}
            color="black"
          />
        </TouchableOpacity>
      </View>
 */}


      {/* categroy list */}
      <Categorylist

        explore={true}
      />




      {/* busines list  */}
      {/* <Businesslist
        data={category}
      /> */}
      <BusinessList/>
      
      </ScrollView>
      </View>
  
  )
}

export default Explore


const Styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,

  },
  searchIcon: {
    marginLeft: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    paddingHorizontal: 15,
    borderColor: 'black',
    borderWidth: 2,
    margin: '2%'
  },
})