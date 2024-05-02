import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ImageBackground , Image , ScrollView , TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import HeaderTitle from './HeaderTitle';

const handleMenuPress = () => {
    console.log('Menu icon pressed!');
    // Add your function logic here
  };

const Blog = ({navigation}) => {
    const handleBlogPostPress = () => {
        navigation.navigate('BlogPost', {
          title: 'Title of the Article',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam sapien ac libero consequat, vel fermentum ligula vehicula.',
        });
      };
    return (

        <ImageBackground source={require('../vec3.jpeg')} style={{ flex: 1 }}>
                <ScrollView style={styles.scrollView} contentContainerStyle={{ flexGrow: 1  , paddingBottom:110}} >
                <Header
                    leftComponent={{ icon: 'menu', size: 40, color: '#fff', onPress: handleMenuPress }}
                    centerComponent={<HeaderTitle>Blogs</HeaderTitle>}
                    rightComponent={{ icon: 'home', size: 40, color: '#fff' }}
                    containerStyle={{
                        backgroundColor: 'transparent',
                        justifyContent: 'space-around',
                    }}
                />
                <View style={styles.container}>
                <TouchableOpacity onPress={handleBlogPostPress} style={styles.card}>
                        <Image
                        source={require('../cop22.jpeg')}
                        style={styles.image}
                        resizeMode="cover"
                        />
                        <View style={styles.content}>
                        <Text style={styles.title}>Title of the Blog Post</Text>
                        <Text style={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam sapien ac
                            libero consequat, vel fermentum ligula vehicula.
                        </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.card}>
                        <Image
                        source={require('../cop22.jpg')}
                        style={styles.image}
                        resizeMode="cover"
                        />
                        <View style={styles.content}>
                        <Text style={styles.title}>Title of the Blog Post</Text>
                        <Text style={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam sapien ac
                            libero consequat, vel fermentum ligula vehicula.
                        </Text>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Image
                        source={require('../indusTangier.jpeg')}
                        style={styles.image}
                        resizeMode="cover"
                        />
                        <View style={styles.content}>
                        <Text style={styles.title}>Title of the Blog Post</Text>
                        <Text style={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam sapien ac
                            libero consequat, vel fermentum ligula vehicula.
                        </Text>
                        </View>
                    </View>
                    </View>
               
                
                
                </ScrollView>

        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 20,
      },
    scrollView: {
        paddingHorizontal: 5,
    },
    card: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 20,
      },
      image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      },
      content: {
        padding: 15,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      description: {
        fontSize: 16,
        color: '#666',
        lineHeight: 22,
      },
});


export default Blog;