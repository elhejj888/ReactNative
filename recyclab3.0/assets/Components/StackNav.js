import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Blog from './Blog';
import Post from './Post';
import Setting from './Setting';
import Profile from './Profile';
import BlogPost from './BlogPost';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Blog" component={Blog}/>
      <Stack.Screen name="BlogPost" component={BlogPost}/>
      <Stack.Screen name="Post" component={Post}/>
      <Stack.Screen name="Setting" component={Setting}/>
      <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>
    </NavigationContainer>

  );

}
export default StackNavigator;