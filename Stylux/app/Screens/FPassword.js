import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const FPassword = (navigation) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',

        }}>
            <TextInput
                style={{
                    width: "96%",
                    height: 50,
                    alignSelf: 'center',
                    paddingLeft: 10,
                    marginTop: '2%',
                    borderWidth: 2,
                    borderRadius: 10,
                    borderBlockColor: "purple"


                }}
                placeholder='Enter your email'
            />


            <TouchableOpacity
                onPress={() => navigation.navigate("SHome")}

                style={{
                    width: "96%",
                    height: 50,
                    alignSelf: 'center',
                    paddingLeft: 10,
                    marginTop: '8%',
                    borderWidth: 2,
                    borderRadius: 10,
                    borderBlockColor: "purple",
                    backgroundColor: "yellow",

                }}
            >
                <Text style={{ alignSelf: 'center', marginTop: "auto", marginBottom: "auto", color: "red", fontSize: 18 }}>
                    Send Rest Link
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default FPassword