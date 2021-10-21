import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import menu from '../assets/menu.png';
import home from '../assets/home.png';
import Header from '../components/Header';

import { connect } from 'react-redux';
import { setSelectedTab } from '../stores/tab/tabActions';

import Animated from "react-native-reanimated";

import settings from '../assets/settings.png';
import search from '../assets/search.png';
import calendar from '../assets/calendar.png';

const Feed = ({ drawerAnimationStyle, navigation, selectedTab, setSelectedTab }) => {
    React.useEffect(() => {
        setSelectedTab('Panel')
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
                    }}>
                        <Image source={home}
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
                <TouchableOpacity onPress={() => {
                    setSelectedTab('Buscar Horas');
                    navigation.navigate('Search');
                }}>
                    <View>
                        <View style={styles.container}>
                            <Text style={styles.textCard}>Buscar horas</Text>
                            <Image style={styles.image} source={search}/>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    setSelectedTab('Horas Trabajadas');
                    navigation.navigate('Hours');
                }}>
                    <View>
                        <View style={styles.container}>
                            <Text style={styles.textCard}>Horas trabajadas</Text>
                            <Image style={styles.image} source={calendar}/>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    setSelectedTab('Ajustes');
                    navigation.navigate('Setting');
                }}>
                    <View>
                        <View style={styles.container}>
                            <Text style={styles.textCard}>Ajustes</Text>
                            <Image style={styles.image} source={settings}/>
                        </View>
                    </View>
                </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(Feed);

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    container: {
        width: deviceWidth - 65,
        backgroundColor: '#B12929',
        height: 150,
        borderRadius: 20,
        margin: 10,
        alignItems: 'center',
        paddingTop: 15,

        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9
    },

    textCard: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },

    image:{
        width: 90,
        height: 90,
        marginTop: 10,
        tintColor: '#fff'
    }
});