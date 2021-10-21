import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import menu from '../assets/menu.png';
import home from '../assets/home.png';
import Header from '../components/Header';

import { connect } from 'react-redux';
import { setSelectedTab } from '../stores/tab/tabActions';

import Animated from "react-native-reanimated";
import { TextInput } from 'react-native-gesture-handler';

const Setting = ({ drawerAnimationStyle, navigation, selectedTab, setSelectedTab }) => {
    React.useEffect(() => {
        setSelectedTab('Ajustes')
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
                flex: 1
            }}>
                <View style={styles.firtsContainer}>
                    <View style={styles.container}>
                        <Image source={require("../assets/avatar.jpg")}
                            resizeMode="contain"
                            style={styles.photoProfile}
                        />
                        <Text style={styles.nameText}>Hellen Mora</Text>
                    </View>
                    <Text style={styles.textInfo}>N° de empleado</Text>
                    <Text style={{ color: "black", fontSize: 16 }}>5421</Text>
                    <Text style={styles.textInfo}>Correo electrónico</Text>
                    <TextInput style={styles.textInput} placeholder="Email">ejemplo1234@gmail.com</TextInput>
                    <TouchableOpacity style={styles.button}  onPress={() => Alert.alert('Datos guardados')}>
                        <Text style={styles.textButton}>Guardar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <StatusBar style="auto" />
        </Animated.View>
    );
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Setting);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#0684ba',
        padding: 1
    },

    textTitle: {
        fontSize: 25,
        color: '#0684ba',
        marginTop: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    textInput: {
        borderColor: '#0684ba',
        borderWidth: 1,
        borderRadius: 10,
        width: 300,
        padding: 10,
        marginTop: 10
    },

    button: {
        backgroundColor: '#0684ba',
        borderRadius: 10,
        padding: 15,
        marginTop: 10
    },

    textButton: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },

    firtsContainer: {
        height: "85%",
        width: 350,
        backgroundColor: "#DFDFDF",
        borderRadius: 21,
        elevation: 5,
        alignContent: "center",
        alignItems: "center"
    },
    container: {
        height: "45%",
        width: 350,
        backgroundColor: "#0684ba",
        borderRadius: 21,
        elevation: 3,
        alignContent: "center",
        alignItems: "center"
    },
    photoProfile: {
        width: 125,
        height: 125,
        borderRadius: 300,
        marginTop: 30
    },
    nameText: {
        marginTop: 10,
        color: "white",
        fontSize: 25,
        fontWeight: "bold"
    },
    info: {
        marginTop: 10
    },
    textInfo: {
        color: "black",
        margin: 10,
        marginTop: 20,
        fontSize: 17,
        textAlign: "right"
    }
});
