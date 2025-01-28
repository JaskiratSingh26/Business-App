import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-react';
import { use } from 'react';

const UserProfileintro = () => {
    const { user } = useUser();
    console.log(user)
    return (
        <View >
            <View style={styles.mainbox} >
                <View
                
                style={{
                
                
                alignSelf:'center'
                
                }}
                >

                    <Image

                        source={{ uri: user?.imageUrl }}

                        style={{
                            width: 85,
                            height: 85,
                            borderRadius: 50
                        }}

                    />
                </View>

                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: 900,
                        fontStyle: 'italic',

                        textAlign: 'center'
                    }} >
                    {user?.fullName}
                </Text>

                <Text style={{
                    fontSize: 20,
                    fontWeight: 700,
                    fontStyle: 'italic',

                    textAlign: 'center'
                }}>
                    {user?.emailAddresses[0]?.emailAddress}
                </Text>


            </View>
        </View>
    )
}

export default UserProfileintro

const styles = StyleSheet.create({


    mainbox: {

    paddingVertical:40,
        margin: 'auto',
        backgroundColor:"white",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderRadius:20,
        // padding: 20,
        shadowColor: "red",
        shadowOffset: {
            width: 50,
            height: 2,
        },
        shadowOpacity: 5,
        shadowRadius: 5,
    }
})