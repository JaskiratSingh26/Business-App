import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Businesslist from '../../components/EXPLORESCREEN/Businesslist'
import Userbusines from '../../components/UserOwnBusines/Userbusines'

const Mybssuinesss = () => {
    return (
        <ScrollView>
            <View
                style={{
                    padding: '4%',
                    marginTop: 5
                }}
            >
                {/* <Text
                    style={{
                        fontSize: 30,
                        fontWeight: 900,
                        fontStyle: 'italic'
                    }}
                >
                    My business
                </Text> */}
<View>

{/* {bsines list for specifc user} */}
<Userbusines/>

</View>





            </View>

        </ScrollView>
    )
}

export default Mybssuinesss

const styles = StyleSheet.create({})