import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Profile from './Profile';
import Setting from './Setting';
import BlogPost from './BlogPost';



const Tab = createBottomTabNavigator();
const Tabs = () => {
    <Tab.Navigator 
    initialRouteName="Home"
        screenOptions={{
          tabBarShowIcon: false,// true
        }}>
        <Tab.Screen name="BlogPost" component={BlogPost}/>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Setting} />
    </Tab.Navigator>
    
}
export default Tabs;