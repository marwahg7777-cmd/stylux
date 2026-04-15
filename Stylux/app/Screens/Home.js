import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import Feather from '@expo/vector-icons/Feather';

let salons = [
  {
    name: "samsung",
    price: 100
  },
  {
    name: "Iphone",
    price: 1000
  }





]

const Home = () => {
  return (

    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'white'
      }}>
      <View style={{
        flex: 1, // flex1 full screen 
        backgroundColor: "white"
      }}>





        <View style={{
          flex: 1, height: 60, width: "100%",
          margin: 20, marginHorizontal: 20
        }}>

          {/* top header */}
          <View style={{
            height: 60,
            width: "100%",
            flexDirection: 'row' // used to align items in row
          }}>


            {/* {"first child"} */}
            <View style={{
              flex: 3,
            }}>
              <Text style={{
                fontSize: 25,
                fontWeight: "bold"
              }}>
                BSCS 7
              </Text>
              <Text style={{
                fontSize: 18,
                color: "black",
                fontWeight: "500"
              }}>
                GM
              </Text>

            </View>



            {/* {"second child"} */}
            <View style={{
              flex: 1,
            }}>

              <Image
                source={require('../../assets/images/icon.png')}
                style={{
                  width: 50, height: 50, borderRadius: 25,
                  alignSelf: 'flex-end', //flex end used to align item on right 
                  margin: 'auto',
                }}
              />


            </View>

          </View>


          {/* search */}


          <View style={{
            height: 60, marginTop: '2%',
            width: "100%",
            flexDirection: 'row' // used to align items in row
          }}>


            {/* first child search bar */}
            <View style={{
              flex: 3,
            }}>


              <TextInput style={{
                width: "100%", height: 40,

                paddingLeft: 10,

                borderWidth: 2,
                borderRadius: 10,
                borderColor: 'grey'

              }}
                placeholder='Search'
              />


            </View>

            {/* second child icon */}

            <View style={{
              flex: 1, alignSelf: 'center'
            }}>


              <Feather style={{ margin: 'auto', alignSelf: 'flex-end' }}
                name="search" size={30} color="black" />

            </View>

          </View>

        </View>

        {
          //1st(items) represents the elements of an array, while the 2nd(index) is used for the index number 

          salons.map((items, index) => (

            <View key={index}>
              <Text style={{ fontSize: 40 }}>{index}</Text>
              <Text style={{ fontSize: 40 }}>{items.name}</Text>

            </View>
          )


          )
        }


        <View style={{
          width: "96%",
          height: 300,
          backgroundColor: "red",
          alignSelf: "center",
          borderRadius: 10
        }}>

          <Image style={{ width: "100%" }} source={require("../../assets/images/img.png")} />
          <Text style={{
            margin: 20
          }}>
            Bridal Mekeup,

          </Text>

          <View style={{
            width: '100%',
            height: 100,
            backgroundColor: "green",
            flexDirection: 'row',
            justifyContent: "space-around",
            alignItems: "center"
          }}>

            <View style={{ flex: 1, backgroundColor: "yellow" }}>
              <Text style={{ margin: 20 }}>
                Glitz and Glam
              </Text>

            </View>
            <View style={{ flex: 1, backgroundColor: "purple" }}>

              <Text style={{ margin: 20, textAlign: "right" }}>
                1000
              </Text>

            </View>

          </View>

        </View>

        <View style={{
          width: '96%',
          height: 300,
          backgroundColor: "orange",
          alignSelf: 'center',
          marginTop: '5%',
          borderRadius: 10,
        }}>
          <Image style={{ width: "100%" }} source={require("../../assets/images/img.png")} />
          
          <Text style={{ margin: 20 }}>
            Party Makekup
          </Text>
          <View style={{
            width: '100%',
            height: "100",
            justifyContent: 'space-around',
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "red"
          }}>

            <View style={{ flex: 1, backgroundColor: "yellow" }}>
              <Text style={{ margin: 20 }}>
                Suniya hassan 
              </Text>

            </View>
            <View style={{ flex: 1, backgroundColor: "purple" }}>

              <Text style={{ margin: 20, textAlign: "right" }}>
                10000
              </Text>

            </View>
          </View>


        </View>




      </View>


    </ScrollView>

  )
}

export default Home
