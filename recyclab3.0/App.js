import { StyleSheet, Text, View , Image , TouchableOpacity , SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './assets/Components/Home';
import Profile from './assets/Components/Profile';
import Setting from './assets/Components/Setting';
import Post from './assets/Components/Post';
import Blog from './assets/Components/Blog';
import BlogPost from './assets/Components/BlogPost';
import BuyMaterial from './assets/Components/Navigation/buyMaterial';
import SellMaterial from './assets/Components/Navigation/SellMaterial';
import AdminSc from './assets/Components/Navigation/AdminSc';
import EditProfile from './assets/Components/Settings/EditProfile';
import ChangePwd from './assets/Components/Settings/ChangePwd';
import NotificationSettings from './assets/Components/Settings/NotificationSettings';
import { createStackNavigator } from '@react-navigation/stack';


const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: '#e32f45'
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
const Tabs = () => (
  <Tab.Navigator 
    initialRouteName="Home"
    
    screenOptions={({route})=>({
      tabBarShowLabel: false,
      tabBarStyle: [{
          position: 'absolute',
          bottom:20,
          left:20, 
          right:20,
          elevation:0,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 90,
          ...styles.shadow
        
      },null]
      
    })}
    >
    
    <Tab.Screen name="Home" component={Home} options={{
      headerShown: false,
      tabBarIcon : ({focused}) => (
        <View style={{alignItems:'center' , justifyContent:'center' , top:10}}>
          <Image source={require('./assets/home.png')}
          resizeMode='contain'
          style={{
            width:25,
            height:25,
            tintColor: focused ? '#e32f45' : '#748c94'
          }}
          />
          <Text style={{
            fontFamily: 'Quicksand',
            fontSize: 12,
            color: focused ? '#e32f45' : '#748c94'
          }}>Home</Text>
        </View>
      ),
    }}/>
    <Tab.Screen name="Blog" component={Blog} options={{
      headerShown: false,
      tabBarIcon : ({focused}) => (
        <View style={{alignItems:'center' , justifyContent:'center' , top:10}}>
          <Image source={require('./assets/blog.png')}
          resizeMode='contain'
          style={{
            width:25,
            height:25,
            tintColor: focused ? '#e32f45' : '#748c94'
          }}
          />
          <Text style={{
            fontFamily: 'Quicksand',
            fontSize: 12,
            color: focused ? '#e32f45' : '#748c94'
          }}>Blog</Text>
        </View>
      ),
    }}/>
    <Tab.Screen name="Post" component={Post} options={{
      headerShown: false,
      tabBarIcon : ({focused}) => (
        <Image source={require('./assets/plus.png')}
        resizeMode='contain'
        style={{
          width:30,
          height:30,
          tintColor: '#fff'
        }}
        />
      ),
      tabBarButton: (props) => (
        <CustomTabBarButton {...props}/>
      )
      
    }}/>
    <Tab.Screen name="Settings" component={Setting} options={{
      headerShown: false,
      tabBarIcon : ({focused}) => (
        <View style={{alignItems:'center' , justifyContent:'center' , top:10}}>
          <Image source={require('./assets/option.png')}
          resizeMode='contain'
          style={{
            width:25,
            height:25,
            tintColor: focused ? '#e32f45' : '#748c94'
          }}
          />
          <Text style={{
            fontFamily: 'Quicksand',
            fontSize: 12,
            color: focused ? '#e32f45' : '#748c94'
          }}>Services</Text>
        </View>
      ),
    }}/>
    <Tab.Screen name="Profile" component={Profile} options={{
      headerShown: false,
      tabBarIcon : ({focused}) => (
        <View style={{alignItems:'center' , justifyContent:'center' , top:10}}>
          <Image source={require('./assets/user.png')}
          resizeMode='contain'
          style={{
            width:25,
            height:25,
            tintColor: focused ? '#e32f45' : '#748c94'
          }}
          />
          <Text style={{
            fontFamily: 'Quicksand',
            fontSize: 12,
            color: focused ? '#e32f45' : '#748c94'
          }}>Settings</Text>
        </View>
      ),
    }}/>
    
  </Tab.Navigator>

);
export default function App() {
  const [fontsLoaded] = useFonts({
    Quicksand: require('./assets/fonts/Quicksand-Medium.ttf'),
    ComfortaaBold: require('./assets/fonts/Comfortaa-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Return a loading indicator or placeholder while fonts are loading
  }

    return (
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="BuyMaterial" component={BuyMaterial} />
          <Stack.Screen name="SellMaterial" component={SellMaterial} />
          <Stack.Screen name="BlogPost" component={BlogPost} options={{ headerBackTitle: 'Cop 22 Marrakech' }} />
          <Stack.Screen name="AdminSc" component={AdminSc} />
          <Stack.Screen name='EditProfile' component={EditProfile} />
          <Stack.Screen name='ChangePwd' component={ChangePwd} />
          <Stack.Screen name='NotificationSettings' component={NotificationSettings} />

        </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaView>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  shadow:{
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  }
});
