import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Share } from 'react-native'
import React from 'react'

import { useRouter } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';

const Menubutton = () => {
    let { signOut } = useAuth()
    const router = useRouter()
    const menubuttondata = [
        {
            id: 1,
            name: 'Add Business',
            imagurl: 'https://tse2.mm.bing.net/th?id=OIP.YLrHUV8TAUZdCyGxUUgxOwHaHZ&pid=Api&P=0&h=220',
            url: '/addingbusines/addshop'

        }, {
            id: 2,
            name: 'My Business',
            imagurl: 'https://static.vecteezy.com/system/resources/previews/000/546/107/original/businessman-in-suit-head-vector-icon.jpg',
            url: '/MyBusines/Mybssuinesss'

        },
        {
            id: 3,
            name: 'Share App',
            imagurl: 'https://tse4.mm.bing.net/th?id=OIP.VXdImxhZLCEOavLJBoyz-QHaH6&pid=Api&P=0&h=220',
            url: ''

        },
        {
            id: 4,
            name: 'Logout',
            imagurl: 'https://tse4.mm.bing.net/th?id=OIP.qxMUTNS7hBjrowtLGS8Y9gHaHP&pid=Api&P=0&h=220',
            url: ''

        },

    ]
    function changingpath(data) {
        if (data.name == 'Logout') {
            signOut()
            return;
        }

        else if(data.name=='Share App'){
            Share.share({
                message:'Share App'
            })

        }
        router.push(data.url)
    }

    return (
        <View>
            <ScrollView>





                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',

                    padding: 10,
                    marginTop: 20,
                    marginLeft: 30,
                    gap: 10
                }}>
                    {
                        menubuttondata.map((data, index) => (

                            <TouchableOpacity

                                onPress={() => changingpath(data)}
                            >
                                <View key={data.id} style={{
                                    width: '45%',
                                    margin: 12,
                                    alignItems: 'center',

                                    padding: 10

                                }}>
                                    <Image
                                        source={{ uri: data?.imagurl }}
                                        style={{
                                            width: 55,
                                            height: 55,
                                            backgroundColor: 'white',
                                            borderRadius: 50,
                                            marginTop: 10

                                        }}
                                    />
                                    <Text

                                        style={{


                                            width: 90,
                                            textAlign: 'center'
                                        }}>
                                        {data?.name}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </View>

            </ScrollView>

            <Text 
            
            style={{
                textAlign:'center',
                fontStyle:'italic',
                fontSize:15,
                fontWeight:900

}}>
            Developed by Jaskirat singh 'hint/xx'
            </Text>
        </View>
    )
}

export default Menubutton

const styles = StyleSheet.create({})