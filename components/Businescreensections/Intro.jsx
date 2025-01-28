import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Actionbtton from './Actionbtton'

const Intro = ({ data }) => {
    return (
        <View>
            <View>

                <Image

                    source={{ uri: data?.imageurl }}
                    style={{
                        width: '100%',
                        height: 250,
                        borderBottomLeftRadius:10,
                        borderBottomRightRadius:10
                    }}

                />

                <View
                    style={
                        styles.introbox
                    }
                >
                    <Text style={styles.nametxt} >
                        {data?.name}
                    </Text>
                    <Text style={styles.addrestxt} >
                        {data?.address}
                    </Text>




                    <Actionbtton
data={data}
/>

                </View>


            </View>
        </View>
    )
}

export default Intro

const styles = StyleSheet.create({
    introbox: {
        padding: '2%',
        backgroundColor: 'white',
        shadowColor: "black",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 15,
        shadowRadius: 0,
        elevation: 10,
        gap: 10
    },
    nametxt: {
        fontSize: 30,
        fontWeight:'bold'    },
    addrestxt: {
        fontSize: 15,

        fontWeight: 500,

    }
})