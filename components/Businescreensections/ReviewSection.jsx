import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { db } from '../../config/FirebaseConfig';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useUser } from '@clerk/clerk-react';

const ReviewSection = ({ data }) => {
    console.log('reviews section ,', data)
    const { user } = useUser()

    const [ratings, setratings] = useState(0)
    const [review, setReview] = useState('')



    async function onsubmit() {
        const docref = doc(db, 'Businseslist', data?.id)
        let newcomment = {
            rating: ratings,
            comment: review,
            username: user?.fullName,
            userimage: user?.imageUrl

        }
        await updateDoc(docref, {
            review: arrayUnion(newcomment)
        })
        ToastAndroid.show('comment added', ToastAndroid.BOTTOM)
        setReview(' ')
    }
    return (
        <View style={{
            padding: '2%',

            backgroundColor: 'white'
        }}>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: 800,

                }}
            >Reviews</Text>



            <View


                style={{
                    // or a fixed height
                
                    width: '100%'
                }}>

                <FlatList
                    horizontal={true}
                    
                 
                    

                    data={data?.review}
                    renderItem={({ item, index }) => (

                        <>
                            <View
                                style={{

                                    borderColor: 'black',
                                    borderWidth: 1,
                                    gap: 5,
                                    margin: 5,
                                    padding: '3%',
                                    borderRadius: 10,
                                    width: 250,
height:120


                                }}
                            >


                                <Text
                                 numberOfLines={2}
                                 ellipsizeMode={'clip'}

                                    style={{
                                        fontWeight: 800,

                                        overflow: 'scroll', 
                                    }}>
                                    {item?.comment}
                                </Text>



                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }} >
                                    <Text style={{
                                        fontWeight: 900
                                    }} >
                                        {item.rating}
                                    </Text>
                                    <Image
                                        source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.lKhDkxuHCiMBolyazS_OfgHaHa&pid=Api&P=0&h=220' }}
                                        style={{
                                            width: 13,
                                            height: 13,
                                            borderRadius: 50,
                                            backgroundColor: 'white'
                                        }}

                                    />
                                </View>
                                <View

                                    style={{

                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        gap: 10
                                    }}
                                >
                                    <Image
                                        source={{ uri: item?.userimage }}
                                        style={{
                                            width: 33,
                                            height: 33,
                                            borderRadius: 50
                                        }}
                                    />


                                    <Text>
                                        {item?.username}
                                    </Text>

                                </View>
                            </View>
                        </>
                    )}

                />
            </View>

            <View>
                <Rating


                    showRating={false}
                    onFinishRating={(rating) => setratings(rating)}
                    style={{
                        padding: 10
                    }}
                    imageSize={25}

                />
            </View>
            <View
                style={{
                    padding: '2%'
                }}
            >

                <TextInput
                    value={review}
                    placeholder='Give your Review...'
                    multiline={true}
                    style={
                        {
                            borderColor: 'black',
                            borderWidth: 1,


                            borderRadius: 10,
                            height: 100, // Set the initial height
                            textAlignVertical: 'top'


                        }
                    }
                    onChangeText={(txt) => setReview(txt)}

                />

                <TouchableOpacity

                    onPress={() =>
                        onsubmit()
                    }
                    style={{
                        borderColor: 'black',
                        padding: 4,
                        marginTop: 4,
                        borderWidth: 2,
                        borderRadius: 10


                    }}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 20,

                        }}
                    >
                        Submit
                    </Text>
                </TouchableOpacity>

            </View>


        </View>
    )
}

export default ReviewSection

const styles = StyleSheet.create({})