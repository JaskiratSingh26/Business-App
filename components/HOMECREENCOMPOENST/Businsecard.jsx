


import { useRouter } from 'expo-router';
import { routeToScreen } from 'expo-router/build/useScreens';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const BusinessCard = ({ data }) => {
   const router=useRouter()
  return (
    <TouchableOpacity style={styles.mainbox}
    onPress={()=>
    router.push('/businesmainscareen/'+data?.id)
    }
     
    
    >
      <Image
        source={{ uri: data?.imageurl }}
        style={styles.img}
      />
      <View style={styles.content}>
        <Text style={styles.nametxt}>{data.name}</Text>
        <Text style={styles.address}>{data.address}</Text>
        <View style={styles.ratingbox}>
          <View style={styles.ratingContainer}>
            <Image
              source={{ uri: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/star-965-742058.png?f=webp&w=256' }}
              style={styles.icon}
            />
            <Text style={styles.ratingText}>4.5</Text>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>{data?.category}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BusinessCard;

const styles = StyleSheet.create({
  mainbox: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginRight: 30,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  img: {
    width: 250,
    height: 150,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    padding: 12,
  },
  nametxt: {
    fontWeight: '800',
    fontSize: 16,
    marginBottom: 4,
  },
  address: {
    fontWeight: '300',
    fontSize: 14,
    marginBottom: 8,
  },
  ratingbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
  },
  btn: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  btnText: {
    fontSize: 12,
    fontWeight: '600',
  },
});

