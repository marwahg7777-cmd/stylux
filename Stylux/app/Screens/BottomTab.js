import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import About from './About';
import Home from './Home';
import Setting from './Setting';
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';



const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <View style={{flex:1}}>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen
         
         options={{
          title: 'Home',
          tabBarIcon: ({ color, size, focused }) => ( //
            <Feather name="home" size={24} color="black" />
          ),
        }}
          
          name="Home" component={Home} /> 
        

        {/* name="Home" initialroute name ko btny k liye hota */}

        <Tab.Screen
          
          
          options={{
          title: 'Home',
          tabBarIcon: ({ color, size, focused }) => ( //
           <EvilIcons name="user" size={24} color="black" />
          ),
        }}
          
          name="About" component={About} />
        

{/* component main wo aye ga jn c screen open hogi */}
        
        <Tab.Screen name="Setting" component={Setting} />


        <Tab.Screen name="About2" component={About} />
      </Tab.Navigator>
    </View>
  )
}

export default BottomTab