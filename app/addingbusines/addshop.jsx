import { Image, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useNavigation } from 'expo-router'
import * as ImagePicker from 'expo-image-picker';
import RNPickerSelect from 'react-native-picker-select';
import { collection, doc, getDocs, query, Query, setDoc } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';
import { Cloudinary } from '@cloudinary/url-gen';
import axios from 'axios'

const addshop = () => {
    const navigation = useNavigation()
    let [imagestate, setimagestate] = useState(null)
    let [categorylist, setcategorylist] = useState([])
    const [imageUrl, setImageUrl] = useState(null);

    // const cloudinary = new Cloudinary({
    //     cloud_name: 'df0iaueg5',
    //     api_key: '237935583383321',
    //     api_secret: 'WUXskrRwqigouE9TP8UXa93nEzI',
    // });


    async function imagepicker() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result)
        setimagestate(result?.assets[0]?.uri)

    }



    // async function uploadImage() {
    //     const formData = new FormData();

    //     try{
    //     formData.append('file', {
    //         uri: imagestate,
    //         type: 'image/jpeg',
    //         name: 'image.jpg',
    //     });
    //     formData.append('api_key', '237935583383321'); // Add your API key
    //     formData.append('api_secret', 'WUXskrRwqigouE9TP8UXa93nEzI'); // Add your API secret
    //     formData.append('cloud_name', 'df0iaueg5'); // Add your cloud name
    //     formData.append('upload_preset', 'reactnativebusiness'); // Add your upload preset

    //     const response = await axios.post('https://api.cloudinary.com/v1_1/df0iaueg5/image/upload', formData, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data',
    //         },
    //     });
    //     // console.log(response)
    //     // setImageUrl(response.data.secure_url);}
    //     // catch(error){
    //     //     console.log('Error:', error);
    //     //     console.log('Error Response:', error.response);
    //     //     console.log('Error Data:', error.response.data);
    //     // }
    //     if (response.status === 200) {
    //         console.log( response.data);
    //       } else {
    //         throw new Error('Error uploading image to Cloudinary');
    //       }
    //     } catch (error) {
    //       console.log('Error uploading image to Cloudinary:', error);
    //       throw error;
    //     }
    // }
    async function uploadImage() {
        try {
            const formData = new FormData();
            formData.append('file', {
                uri: imagestate,
                type: 'image/jpeg',
                name: 'image.jpg',
            });
            formData.append('api_key', '237935583383321'); // Add your API key
            formData.append('api_secret', 'WUXskrRwqigouE9TP8UXa93nEzI'); // Add your API secret
            formData.append('cloud_name', 'df0iaueg5'); // Add your cloud name
            formData.append('upload_preset', 'reactnativebusiness'); // Add your upload preset

            const response = await axios.post('https://api.cloudinary.com/v1_1/df0iaueg5/image/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error('Error uploading image to Cloudinary');
            }
        } catch (error) {
            console.log('Error uploading image to Cloudinary:', error);
            throw error;
        }
    }


    async function fetchingALLcatgeory() {
        setcategorylist([])
        let q = query(collection(db, 'Category'))
        let querysnpashot = await getDocs(q)
        querysnpashot.forEach((item) => {
            setcategorylist(prev => [...prev, {
                label: item.data().name,
                value: item.data().name
            }])
        })

    }

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: 'Add Business '
        })


        fetchingALLcatgeory()
    }, [])

    let [name, setname] = useState('')
    let [address, setaddress] = useState('')
    let [contact, setcontact] = useState('')
    let [email, setemail] = useState('')
    let [about, setabout] = useState('')
    let [categoryname, setcategoryname] = useState('')




    // async function handlesubmit() {
    //     uploadImage().then((response) => {
    //         if (response && response.secure_url) {
    //             const imageUrl = response.secure_url;
    //             setImageUrl(imageUrl);
    //             console.log('presedn ');
    //             let a = {
    //                 name: name,
    //                 about: about,
    //                 address: address,
    //                 category: categoryname,
    //                 contact: contact,
    //                 imageurl: imageUrl,
    //                 review: []
    //             };
    //             console.log(a);
    //  let savingdatares=   await setDoc(doc(db,'Businseslist',Date.now().toString()),{a})
    //  console.log(savingdatares)

    //             // Add your Firebase code here to store the data
    //         } else {
    //             console.log('Error uploading image to Cloudinary');
    //         }
    //     }).catch((err) => {
    //         console.log('Error uploading image to Cloudinary:', err);
    //     });
    // }
    async function handlesubmit() {
        const response = await uploadImage();
        if (response && response.secure_url) {
            const imageUrl = response.secure_url;
            setImageUrl(imageUrl);
            console.log('presedn ');
            let a = {
                name: name,
                about: about,
                address: address,
                category: categoryname,
                contact: contact,
                imageurl: imageUrl,
                review: [],
              Mail:email
            };
            console.log(a);
            let savingdatares = await setDoc(doc(db, 'Businseslist', Date.now().toString()), a);
            ToastAndroid.show('Business Added', ToastAndroid.BOTTOM)
            console.log(savingdatares);
            router.push('/')
        } else {
            console.log('Error uploading image to Cloudinary');
        }
    }
    return (
        <ScrollView>

            <View

                style={{
                    padding: '4%'
                }}
            >
                <Text
                    style={{
                        fontSize: 25,
                        fontWeight: 800,
                        fontStyle: 'italic'
                    }}
                >
                    Add New Business
                </Text>

                <Text
                    style={{
                        fontSize: 13,
                        padding: '2%',
                        fontWeight: 500,
                        fontStyle: 'italic'

                    }}
                >
                    Fill all details in order to add to new business
                </Text>
                <View
                    style={styles.mainbox}
                >



                    <TouchableOpacity


                        onPress={() => imagepicker()}

                    >

                        {!imagestate ? (<Image

                            source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.zMo762AT07Z_5p0D4i08CAHaHa&pid=Api&P=0&h=220' }}

                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 10
                            }}
                        />) : (<Image

                            source={{ uri: imagestate }}

                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 10
                            }}
                        />)}


                    </TouchableOpacity>

                    <View

                        style={{
                            marginTop: 20
                        }}>
                        <TextInput
                            placeholder='Name...'
                            value={name}
                            onChangeText={(txt) => setname(txt)}
                            style={{
                                borderColor: 'black',
                                borderWidth: 1,
                                borderRadius: 10,
                                padding: 10,
                                marginTop: 5
                            }}
                        />

                        <TextInput
                            placeholder='Address...'
                            value={address}
                            onChangeText={(txt) => setaddress(txt)}
                            style={{
                                borderColor: 'black',
                                borderWidth: 1,
                                borderRadius: 10,
                                padding: 10,
                                marginTop: 5
                            }}
                        />

                        <TextInput
                            placeholder='Contact...'
                            value={contact}
                            onChangeText={(txt) => setcontact(txt)}
                            style={{
                                borderColor: 'black',
                                borderWidth: 1,
                                borderRadius: 10,
                                padding: 10,
                                marginTop: 5
                            }}
                        />
                        <TextInput
                            placeholder='Email...'
                            value={email}
                            onChangeText={(txt) => setemail(txt)}
                            style={{
                                borderColor: 'black',
                                borderWidth: 1,
                                borderRadius: 10,
                                padding: 10,
                                marginTop: 5
                            }}
                        />

                        <TextInput
                            placeholder='About...'
                            value={about}
                            onChangeText={(txt) => setabout(txt)}
                            style={{
                                borderColor: 'black',
                                borderWidth: 1,
                                borderRadius: 10,
                                padding: 10,
                                marginTop: 5,
                                height: 100,

                            }}

                        />


                        <View style={{
                            borderColor: 'black',
                            borderWidth: 1,
                            borderRadius: 10,
                            padding: 2,
                            marginTop: 5,

                        }}>
                            <RNPickerSelect

                                value={categoryname}

                                onValueChange={(value) => setcategoryname(value)}
                                items={categorylist}
                            />
                        </View>


                        <TouchableOpacity


                            onPress={() => handlesubmit()}
                        >
                            <View style={{
                                borderColor: 'black',
                                borderWidth: 1,
                                borderRadius: 10,
                                padding: 2,
                                marginTop: 5,

                            }}


                            >

                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontStyle: 'italic',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Sumbit
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default addshop

const styles = StyleSheet.create({

    mainbox: {
        padding: '4%'
    }
})