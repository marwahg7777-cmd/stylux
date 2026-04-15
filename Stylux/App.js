import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './app/Screens/Login'
import Home from './app/Screens/Home'
import About from './app/Screens/About'
import SRegistration from './app/Screens/SRegistration'
import SHome from './app/Screens/SHome'
import CLogin from './app/Screens/CLogin'
import CHome from './app/Screens/CHome'
import SSignup from './app/Screens/SSignup'
import FPassword from './app/Screens/FPassword'
import BottomTab from './app/Screens/BottomTab'
import Setting from './app/Screens/Setting'



const Stack = createNativeStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen options={{
          headerShown:false
        }} name="Home" component={BottomTab} />           
        <Stack.Screen name="About" component={About} />


        {/* name="Home" initialroute name ko btny k liye hota */}


        {/* Salon Stacks */}
        <Stack.Screen name="SRegistration"
          options={{
            hearderShown: true, headerTitle: "Salon Registration",
            headerStyle: {
              backgroundColor: "yellow"
            }
          }}
          component={SRegistration} />


        <Stack.Screen name="SHome"
          options={{
            hearderShown: true, headerTitle: "Salon Home",
            headerStyle: {
              backgroundColor: "yellow"
            }
          }}
          component={BottomTab} />



        <Stack.Screen name="SSignup"
          options={{
            hearderShown: true, headerTitle: "Salon Signup",
            headerStyle: {
              backgroundColor: "green"
            }
          }}
          component={SSignup} />

        <Stack.Screen options={{
          hearderShown: true, headerTitle: "Salon Forget Password",
          headerStyle: {
            backgroundColor: "green"
          }
        }}
          name="FPassword" component={FPassword} />

        


         {/* <Stack.Screen options={{
          hearderShown: false, headerTitle: "Home",
    
        }}
          name="Home" component={Home} /> */}
        

        

      </Stack.Navigator>

    </NavigationContainer>

  )

}
export default App