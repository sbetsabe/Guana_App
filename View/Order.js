import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import menu from '../assets/menu.png';
import home from '../assets/home.png';
import Header from '../components/Header';
import clock from '../assets/clock.png';

import { connect } from 'react-redux';
import { setSelectedTab } from '../stores/tab/tabActions';

import Animated from "react-native-reanimated";

import { Divider } from "react-native-paper";
import { ListItem } from 'react-native-elements'

const list = [
    {
        month: 'Septiembre',
        date: '30/09/2021',
        start: '8:00 am',
        end: '5:00 pm'
    },
    {
        month: 'Septiembre',
        date: '29/09/2021',
        start: '8:00 am',
        end: '5:00 pm'
    },
    {
        month: 'Septiembre',
        date: '28/09/2021',
        start: '8:00 am',
        end: '5:00 pm'
    },
    {
        month: 'Septiembre',
        date: '27/09/2021',
        start: '8:00 am',
        end: '5:00 pm'
    },
    {
        month: 'Septiembre',
        date: '26/09/2021',
        start: '8:00 am',
        end: '5:00 pm'
    },
    {
        month: 'Septiembre',
        date: '25/09/2021',
        start: '8:00 am',
        end: '5:00 pm'
    },
    {
        month: 'Septiembre',
        date: '24/09/2021',
        start: '8:00 am',
        end: '5:00 pm'
    }
]

const Order = ({ drawerAnimationStyle, navigation, selectedTab, setSelectedTab }) => {
    React.useEffect(() => {
        setSelectedTab('Pedidos')
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
            <View style={{ flex: 1, width: 350, alignContent: 'center' }}>
                <ScrollView>
                    {
                        list.map((l, i) => (
                            <ListItem key={i} bottomDivider>
                                <Image
                                    source={clock}
                                    style={{
                                        width: 20,
                                        height: 20
                                    }} />
                                <ListItem.Content>
                                    <ListItem.Title>{l.month}</ListItem.Title>
                                    <ListItem.Subtitle>Fecha: {l.date}</ListItem.Subtitle>
                                    <ListItem.Subtitle>Hora Entrada: {l.start} - Hora Salida: {l.end}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        ))
                    }
                </ScrollView>
                <Divider
                    orientation="horizontal" />
                <Text style={{
                    margin: 30,
                    textAlign: "center",
                    fontWeight: "bold",
                }}></Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Order);
