// // components/BusinessList.jsx
// import React, { useEffect, useState } from 'react';
// import { FlatList, StyleSheet, Text, View ,TouchableOpacity,Image, ScrollView} from 'react-native';
// import { db } from '../../config/FirebaseConfig';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { useRouter } from 'expo-router';
// const BusinessList = () => {

//   const [businesses, setBusinesses] = useState([]);
//     let [loading,setloading]=useState(false)
//     const router=useRouter()

//   async function fetch(data) {
//     setBusinesses([])
//     try {
 
//       let q = query(collection(db, "Businseslist"))
//       let querySnapshot = await getDocs(q);
  
//       if (querySnapshot.empty) {
//         console.log("No documents found");
//         return;
//       }
  
//       querySnapshot.forEach((item) => {

//           setBusinesses((prev) => [...prev, { id: item.id, ...item.data() }]);
  
//         // setBusinesses((prev) => [...prev, { id: item.id, ...item.data() }]);
//       });
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }
  

//   useEffect(() => {

//       fetch();
 
//     console.log('business  explore screen',businesses)
//   }, []);
//   console.log('business  explore screen',businesses)

// // 
//   return (
  
 
//       <View style={{ flex: 1 ,marginTop:'4%'}}>  
//       {loading? <ActivityIndicator 
//      size={'30%'}
//       />:''}
    
    
    
//         {businesses.length > 0       ? (
    
//           <FlatList
     
//             style={{ flex: 1 }}
//     onRefresh={fetch}
//             refreshing={loading}
//             data={businesses}
//             renderItem={({ item, index }) => (
    
    
//     <TouchableOpacity
//     onPress={()=>{
//       router.push('/businesmainscareen/'+item.id)
//     }}
    
//     >
    
    
    
    
//               <View style={styles.card}>
//                 <Image
//                   source={{ uri: item?.imageurl }}
//                   style={styles.img}
//                 />
//                 <View style={{ gap: 10 }}>
//                   <Text style={styles.name}>
//                     {item?.name}
//                   </Text>
//                   <Text style={styles.address}>
//                     <Text style={{
//                       textDecorationLine: 'underline'
//                     }}>
//                       {item?.address}
//                     </Text>
//                   </Text>
//                   <View style={{
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                   }}>
//                     <Image
//                       source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.m0ewFY6f3CK1xlgwf-BN9AHaHa&pid=Api&P=0&h=220' }}
//                       style={styles.ratingicon}
//                     />
//                     <Text style={styles.rating}>
//                       4.5
//                     </Text>
//                   </View>
//                 </View>
//               </View>
//               </TouchableOpacity>
    
              
           
//             )}
//           />
//         ) :   loading? (
//           ''
//         )
//       :(<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text
//           style={{
//             fontSize: 30,
//             fontWeight: 800
//           }}
//         >
//           No Business found
//         </Text>
//       </View>)
//       }
//       </View>
    
//   );
// };


// let styles = StyleSheet.create({
//   img: {
//     width: 120,
//     height: 110,
//     borderRadius: 10,
//   },
//   ratingicon: {
//     width: 20,
//     height: 20,
//   },
//   card: {
//     backgroundColor: '#E8E6E5',
//     padding: '2%',
//     flexDirection: 'row',
//     gap: 10,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   address: {
//     fontSize: 14,
//     color: '#666',
//   },
//   rating: {
//     fontSize: 14,
//     color: '#666',
//   },
// })
// export default BusinessList;



// components/BusinessList.jsx
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { db } from '../../config/FirebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useRouter } from 'expo-router';

const BusinessList = () => {
  const [businesses, setBusinesses] = useState([]);
  let [loading, setloading] = useState(false)
  const router = useRouter()

  async function fetch(data) {
    setBusinesses([])
    try {

      let q = query(collection(db, "Businseslist"))
      let querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log("No documents found");
        return;
      }

      querySnapshot.forEach((item) => {

        setBusinesses((prev) => [...prev, { id: item.id, ...item.data() }]);

      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {

    fetch();

    console.log('business  explore screen', businesses)
  }, []);

  console.log('business  explore screen', businesses)

  // return (
  //   <View style={{ flex: 1, marginTop: '4%' }}>
  //     {loading ? <ActivityIndicator
  //       size={'30%'}
  //     /> : ''}
  //     <ScrollView style={{ flex: 1 }}>
  //       {businesses.length > 0 ? (
  //         businesses.map((item, index) => (
  //           <TouchableOpacity
  //             key={item.id}
  //             onPress={() => {
  //               router.push('/businesmainscareen/' + item.id)
  //             }}
  //           >
  //             <View style={styles.card}>
  //               <Image
  //                 source={{ uri: item?.imageurl }}
  //                 style={styles.img}
  //               />
  //               <View style={{ gap: 10 }}>
  //                 <Text style={styles.name}>
  //                   {item?.name}
  //                 </Text>
  //                 <Text style={styles.address}>
  //                   <Text style={{
  //                     textDecorationLine: 'underline'
  //                   }}>
  //                     {item?.address}
  //                   </Text>
  //                 </Text>
  //                 <View style={{
  //                   flexDirection: 'row',
  //                   alignItems: 'center',
  //                 }}>
  //                   <Image
  //                     source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.m0ewFY6f3CK1xlgwf-BN9AHaHa&pid=Api&P=0&h=220' }}
  //                     style={styles.ratingicon}
  //                   />
  //                   <Text style={styles.rating}>
  //                     4.5
  //                   </Text>
  //                 </View>
  //               </View>
  //             </View>
  //           </TouchableOpacity>
  //         ))
  //       ) : loading ? (
  //         ''
  //       ) : (
  //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //           <Text
  //             style={{
  //               fontSize: 30,
  //               fontWeight: 800
  //             }}
  //           >
  //             No Business found
  //           </Text>
  //         </View>
  //       )}
  //     </ScrollView>
  //   </View>
  // );

  return (
    <View style={{ flex: 1, marginTop: '4%' }}>
      {loading ? <ActivityIndicator size={'30%'}/> : ''}
      <ScrollView style={{ flex: 1 }}>
        {businesses.length > 0 ? (
          businesses.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                router.push('/businesmainscareen/' + item.id)
              }}
            >
              <View style={styles.card}>
                <Image
                  source={{ uri: item?.imageurl }}
                  style={styles.fullWidthImage}
                />
                <View style={styles.cardContent}>
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
          ))
        ) : loading ? (
          ''
        ) : (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 800
              }}
            >
              No Business found
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
  
};

// let styles = StyleSheet.create({
//   img: {
//     width: 120,
//     height: 110,
//     borderRadius: 10,
//   },
//   ratingicon: {
//     width: 20,
//     height: 20,
//   },
//   card: {
//     backgroundColor: '#E8E6E5',
//     padding: '2%',
//     flexDirection: 'row',
//     gap: 10,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   address: {
//     fontSize: 14,
//     color: '#666',
//   },
//   rating: {
//     fontSize: 14,
//     color: '#666',
//   },
// })

export default BusinessList;

let styles = StyleSheet.create({
  fullWidthImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  cardContent: {
    padding: 16,
  },
  card: {
    backgroundColor: '#E8E6E5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: '900',
    color: '#333',
  },
  address: {
    fontSize: 18,
    fontWeight:700,
    color: '#666',
  },
  rating: {
    fontSize: 18,
    color: '#666',
  },
  ratingicon: {
    width: 30,
    height: 30,
    borderRadius:50
  },
})
