import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const SRegistration = ({ navigation }) => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: "#D1D1C1",
      justifyContent: "center"
    }}>
      <Text style={{ textAlign: "center", marginTop: "2%", fontSize: 40, color: "orange" }}>

        tekrar hoşgeldiniz
      </Text>


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


      <TextInput
        secureTextEntry={true}
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
        placeholder='Enter your password'

      />


      <TouchableOpacity
        onPress={() => navigation.navigate("FPassword")}>
        <Text style={{
          textAlign: 'right',
          marginRight: "4%",
          marginTop: "2%"
        }}>
          Forget password?
        </Text>
      </TouchableOpacity>



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
          backgroundColor: "yellow"
        }}
      >
        <Text style={{ alignSelf: 'center', marginTop: "auto", marginBottom: "auto", color: "red", fontSize: 18, fontWeight: 'bold' }}>
          Login
        </Text>
      </TouchableOpacity>



      <TouchableOpacity
        onPress={() => navigation.navigate("SSignup")}

        style={{
          width: "96%",
          height: 50,
          alignSelf: 'center',
          paddingLeft: 10,
          marginTop: '2%',

        }}
      >
        <Text style={{ alignSelf: 'center', marginTop: "auto", marginBottom: "auto", color: "black", fontSize: 18, }}>
          Don't have an account? Signup
        </Text>
      </TouchableOpacity>




    </View>
  )
}

export default SRegistration