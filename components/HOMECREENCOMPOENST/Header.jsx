

import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform } from 'react-native';
import { useUser } from '@clerk/clerk-react';
import { Feather } from '@expo/vector-icons';

const Header = () => {
    const { user } = useUser();


    return (

        <SafeAreaView style={Styles.mainbox} >

            <View style={Styles.secondbox} >

                <Image source={{ uri: user?.imageUrl }}
                    style={Styles.img}
                />

                <View style={Styles.welcomeText}>
                    <Text style={Styles.welcomeLabel}>Welcome</Text>
                    <Text style={Styles.userName}>{user?.fullName}</Text>
                </View>

            </View>


            {/* <View style={Styles.searchBox}>
                <TextInput
                    placeholder="Search..."
                    style={Styles.searchInput}
                />
                <Feather
                    name="search"
                    size={24}
                    style={Styles.searchIcon}
                    color="black"
                />
            </View> */}
        </SafeAreaView>
    )
};

export default Header;



const Styles = StyleSheet.create({
    mainbox: {
        padding: 20,
        paddingTop: 50,
        
        gap:20,
        backgroundColor:"white",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        // padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 50

    },
    secondbox: {
        flexDirection: 'row'
        ,
        gap: 20,
        // backgroundColor:'red',
        width: '100%'
    },
    welcomeText: {
        flex: 1,
    },
    welcomeLabel: {
        fontSize: 16,
        color: '#666',
        fontWeight: 500,
    },
    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        paddingHorizontal: 30
    },
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
            },
})