import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ImageBackground , Image , ScrollView , TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import HeaderTitle from './HeaderTitle';


import React from 'react';
const handleMenuPress = () => {
    console.log('Menu icon pressed!');
    // Add your function logic here
  };
const Home = () => {
    return (

        <ImageBackground source={require('../vec1.jpeg')} style={{ flex: 1 }}>
                <ScrollView style={styles.scrollView} contentContainerStyle={{ flexGrow: 1  , paddingBottom:110}} >
                <Header
                    leftComponent={{ icon: 'menu', size: 40, color: '#fff', onPress: handleMenuPress }}
                    centerComponent={<HeaderTitle>RecycLab</HeaderTitle>}
                    rightComponent={{ icon: 'home', size: 40, color: '#fff' }}
                    containerStyle={{
                        backgroundColor: 'transparent',
                        justifyContent: 'space-around',
                    }}
                />
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../recycle.png')} style={{ height: 150, width: 120 }} />
                    <Text style={{ fontFamily: 'Quicksand', fontSize: 20, color: '#006b6f', backgroundColor: '#fff', textAlign: 'justify', borderRadius: 15, padding: 15, opacity: 0.8 }}>
                        Welcome to RecycLab, your go-to platform for buying and selling recyclable materials!{'\n'} Discover a greener way to trade and earn by recycling. Sell your recyclables based on quality assessments and buy recycled products to support sustainability. Join us in making a difference for our planet. Start trading with RecycLab today!
                    </Text>
                    <StatusBar style="auto" />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
                    <Text style={{
                        backgroundColor: '#fff',
                        color: '#004345',
                        padding: 10,
                        borderRadius: 15,
                        fontSize: 20,
                        fontFamily: 'ComfortaaBold',
                        opacity: 0.9,
                    }}>Our Services</Text>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                    <View style={{ alignItems: 'center' , backgroundColor: '#fff', width: '29%' ,opacity:0.9, borderRadius: 15}}>
                        <Image source={require('../highQuality.png')} style={{ height: 45, width: 45 , marginTop:10 }} />
                        <Text style={{  color: '#004345', textAlign: 'center', padding: 10,  fontSize: 16, fontFamily: 'ComfortaaBold', opacity: 0.9, marginTop: 10 }}>Top-grade Materials</Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '29%',backgroundColor: '#fff', opacity:0.9, borderRadius: 15}}>
                        <Image source={require('../fast.png')} style={{ height: 45, width: 45, marginTop:10 }} />
                        <Text style={{  color: '#004345', textAlign: 'center', padding: 10, fontSize: 16, fontFamily: 'ComfortaaBold', opacity: 0.9, marginTop: 10 }}>Fast Delivery</Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '29%',backgroundColor: '#fff',opacity:0.9, borderRadius: 15 }}>
                        <Image source={require('../support.png')} style={{ height: 45, width: 45 , marginTop:10  }} />
                        <Text style={{  color: '#004345', textAlign: 'center', padding: 10,  fontSize: 16, fontFamily: 'ComfortaaBold', opacity: 0.9, marginTop: 10 }}>Reliable Services</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
                    <Text style={{
                        marginTop:25,
                        backgroundColor: '#fff',
                        color: '#004345',
                        padding: 10,
                        borderRadius: 15,
                        fontSize: 20,
                        fontFamily: 'ComfortaaBold',
                        opacity: 0.9,
                    }}>Our Products</Text>
                </View>
                <View style={{flexDirection:'column',width: '100%', justifyContent: 'space-between' , backgroundColor: '#fff', width: '99%' ,opacity:0.9, borderRadius: 15 , margin:10,padding:5 , alignContent:'center' }}>
                <View style={{ flexDirection: 'row', width: 'auto' ,justifyContent: 'space-between'}}>
                    <View style={{ alignItems: 'center' , width: 'auto'}}>
                        <Image source={require('../paper.png')} style={{ height: 44, width: 45 , marginTop:10 }} />
                        <Text style={{  color: '#004345', textAlign: 'center', padding: 5,  fontSize: 16, fontFamily: 'ComfortaaBold', opacity: 0.9, marginTop: 10 }}>Paper</Text>
                    </View>
                    <View style={{ alignItems: 'center', width: 'auto'}}>
                        <Image source={require('../boxes.png')} style={{ height: 45, width: 45, marginTop:10 }} />
                        <Text style={{  color: '#004345', textAlign: 'center', padding: 5, fontSize: 16, fontFamily: 'ComfortaaBold', opacity: 0.9, marginTop: 10 }}>Boxes</Text>
                    </View>
                    <View style={{ alignItems: 'center', width: 'auto' }}>
                        <Image source={require('../fabric.png')} style={{ height: 45, width: 45 , marginTop:10  }} />
                        <Text style={{  color: '#004345', textAlign: 'center', padding: 5,  fontSize: 16, fontFamily: 'ComfortaaBold', opacity: 0.9, marginTop: 10 }}>Textile</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: '100%' ,justifyContent: 'space-between'}}>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('../plastic.png')} style={{ height: 45, width: 45 , marginTop:10 }} />
                        <Text style={{  color: '#004345', textAlign: 'center', padding: 5,  fontSize: 16, fontFamily: 'ComfortaaBold', opacity: 0.9, marginTop: 10 }}>Plastic</Text>
                    </View>
                    <View style={{ alignItems: 'center'  }}>
                        <Image source={require('../bottles.png')} style={{ height: 45, width: 45, marginTop:10 }} />
                        <Text style={{  color: '#004345', textAlign: 'center', padding: 5, fontSize: 16, fontFamily: 'ComfortaaBold', opacity: 0.9, marginTop: 10 }}>Glass</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('../battery.png')} style={{ height: 45, width: 45 , marginTop:10  }} />
                        <Text style={{  color: '#004345', textAlign: 'center', padding: 5,  fontSize: 16, fontFamily: 'ComfortaaBold', opacity: 0.9, marginTop: 10 }}>Batteries</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: '100%' ,justifyContent: 'space-between'}}>
                    <View style={{ alignItems: 'center' , width: 'auto'}}>
                        <Image source={require('../steel.png')} style={{ height: 45, width: 45 , marginTop:10 }} />
                        <Text style={{  color: '#004345', textAlign: 'center', padding: 5,  fontSize: 16, fontFamily: 'ComfortaaBold', opacity: 0.9, marginTop: 10 }}>Steel</Text>
                    </View>
                    <View style={{ alignItems: 'center', width: 'auto'}}>
                        <Image source={require('../wood.png')} style={{ height: 45, width: 45, marginTop:10 }} />
                        <Text style={{  color: '#004345', textAlign: 'center', padding: 5, fontSize: 16, fontFamily: 'ComfortaaBold', opacity: 0.9, marginTop: 10 }}>Wood</Text>
                    </View>
                    <View style={{ alignItems: 'center', width: 'auto' }}>
                        <Image source={require('../wheel.png')} style={{ height: 45, width: 45 , marginTop:10  }} />
                        <Text style={{  color: '#004345', textAlign: 'center', padding: 5,  fontSize: 16, fontFamily: 'ComfortaaBold', opacity: 0.9, marginTop: 10 }}>wheels</Text>
                    </View>
                </View>
                </View>
                </ScrollView>

        </ImageBackground>

    );
    
};
const styles = StyleSheet.create({
        scrollView: {
            paddingHorizontal: 5,
        },
    });

export default Home;