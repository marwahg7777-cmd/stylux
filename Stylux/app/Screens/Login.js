
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = ({ navigation }) => {
  return (
    <View>
      <Text style={{ marginTop: 100, textAlign: 'center', fontSize: 50 }}>Login</Text>

      <TouchableOpacity
        onPress={()=> navigation.navigate('Home')}

        style={{
          backgroundColor: 'grey',
          padding: 10,
          marginTop: 20,
          width: "96%",
          textAlign: 'center',
          alignSelf: 'center',
          borderRadius: 7
        }}>
        <text style={{ color: 'white', fontSize: 20 }}>
          Go to Home
        </text>

      </TouchableOpacity>

       
      
      <TouchableOpacity
        onPress={()=> navigation.navigate('About')}

        style={{
          backgroundColor: 'black',
          padding: 10,
          marginTop: 20,
          width: "96%",
          textAlign: 'center',
          alignSelf: 'center',
          borderRadius: 7
        }}>
        <text style={{ color: 'white', fontSize: 20 }}>
          Go to About
        </text>

      </TouchableOpacity>

    </View>
  )
}

export default Login  