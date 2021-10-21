import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import menu from '../../assets/menu.png';
import home from '../../assets/home.png';
import Header from '../../components/Header';

import { connect } from 'react-redux';
import { setSelectedTab } from '../../stores/tab/tabActions'; 

import Animated from "react-native-reanimated";

const Profile = ({ drawerAnimationStyle, navigation, selectedTab, setSelectedTab }) => {
    React.useEffect(() => {
        setSelectedTab('Mi Perfil')
    }, [])
    return (
        <Animated.View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            ...drawerAnimationStyle
        }}>
            <Header containerStyle={{
                height: 130,
                paddingHorizontal: 20,
                alignItems: 'center'
            }}
                title={selectedTab.toUpperCase()}
                leftComponent={
                    <TouchableOpacity style={{
                        width: 50,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                        onPress={() => navigation.openDrawer()}
                    >
                        <Image
                            source={menu}
                            style={{
                                width: 20,
                                height: 20
                            }} />

                    </TouchableOpacity>
                }
                rightComponent={
                    <TouchableOpacity style={{
                        width: 50,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10
                    }}
                    >
                        <Image
                            source={home}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: 'white'
                            }} />
                    </TouchableOpacity>
                }
            />
            <View style={{
                    flex: 1,
                    alignContent:"center",
                    alignItems:"center"   
                }}>
            <View style={styles.firtsContainer}>
                <View style={styles.container}>
                    <Image source={require("../../assets/avatar.jpg")}
                            resizeMode="contain"
                            style={styles.photoProfile}
                    />
                    <Text style={styles.nameText}>Jose Centeno</Text>
                </View>
                <Text style={styles.textInfo}>N° de empleado</Text>
                    <Text style={{ color:"black", fontSize:16}}>5421</Text>
                    <Text style={styles.textInfo}>Correo electrónico</Text>
                    <Text style={{ color:"black", fontSize:16}}>ejemplo1234@gmail.com</Text>
            </View>    
            </View>

            <StatusBar style="auto" />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    firtsContainer:{
        height:"85%",
        width:350,
        backgroundColor:"#DFDFDF",
        borderRadius:21,
        elevation:5,
        alignContent:"center",
        alignItems:"center"
    },
    container:{
        height:"45%",
        width:350,
        backgroundColor:"#B12929",
        borderRadius:21,
        elevation:3,
        alignContent:"center",
        alignItems:"center"
    },
    photoProfile:{
        width: 125, 
        height: 125, 
        borderRadius:300,
        marginTop:30
    },
    nameText:{
        marginTop:10,
        color:"white",
        fontSize:25,
        fontWeight:"bold"
    },
    info:{
       marginTop:10
    },
    textInfo:{
        color:"black", 
        margin:15,
        marginTop:20,
        fontSize:17,
        textAlign:"right"
    }
})

function mapStateToProps(state) {
    return {
        selectedTab: state.tabReducer.selectedTab,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setSelectedTab: selectedTab => {
            return dispatch(setSelectedTab(selectedTab));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);