import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import menu from '../assets/menu.png';
import home from '../assets/home.png';
import Header from '../components/Header';
import check from '../assets/check.png';

import { connect } from 'react-redux';
import { setSelectedTab } from '../stores/tab/tabActions';

import Animated from "react-native-reanimated";

import { Divider } from "react-native-paper";
import { ListItem } from 'react-native-elements'

const list = [
    {
        product: 'Blusa de encaje',
        price: '7500',
        send: 'Gratis',
        style: 'Talla: S - Color: Rojo',
        store: 'Bulatee'
    },
    {
        product: 'Bloomer',
        price: '2500',
        send: '500 CRC',
        style: 'Talla: M - Color: Negro',
        store: 'Savach'
    },
    {
        product: 'Jeans blue',
        price: '12500',
        send: '1400',
        style: 'Talla: 9 - Color: Azul',
        store: 'Nueva store'
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
                                    source={check}
                                    style={{
                                        width: 20,
                                        height: 20
                                    }} />
                                <ListItem.Content>
                                    <ListItem.Title>{l.product}</ListItem.Title>
                                    <ListItem.Subtitle>Precio: {l.price} CRC</ListItem.Subtitle>
                                    <ListItem.Subtitle>Envio: {l.send}</ListItem.Subtitle>
                                    <ListItem.Subtitle>Estilo: {l.style}</ListItem.Subtitle>
                                    <ListItem.Subtitle>Tienda: {l.store}</ListItem.Subtitle>

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
