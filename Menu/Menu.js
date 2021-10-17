import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';

import close from '../assets/close.png';
import photo from '../assets/avatar.jpg';
import homeicon from '../assets/home.png';
import settings from '../assets/settings.png';
import logout from '../assets/logout.png';

import Main from "../View/Main";
import Setting from "../View/Setting";
import Profile from "../View/account/Profile";

import Animated from "react-native-reanimated";
import { connect } from "react-redux";
import { setSelectedTab } from "../stores/tab/tabActions";

const Drawer = createDrawerNavigator()

const MenuItem = ({ label, icon, isFocused, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.containerEncabezadoMenu} onPress={onPress}>
            <Image source={icon} style={styles.imageIconMenu} />
            <Text style={styles.textIconMenu}>{label}</Text>
        </TouchableOpacity>
    )
}

const MenuContent = ({ navigation, selectedTab, setSelectedTab }) => {
    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{ flex: 1 }}>

            <View style={styles.containerMenu}>

                <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => navigation.closeDrawer()}>
                        <Image source={close} style={{ height: 20, width: 20, tintColor: 'white' }} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 30, alignItems: 'center' }}
                    onPress={() => {
                        setSelectedTab('Mi Perfil');
                        navigation.navigate('Profile');}}>

                    <Image source={photo} style={{ width: 50, height: 50, borderRadius: 30 }} />

                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Hellen Rosales</Text>
                        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', marginTop: 5 }}>Ver Perfil</Text>
                    </View>
                    
                </TouchableOpacity>

                <View style={styles.seleccionMenu} />
                <View style={{ flex: 1, marginTop: 10 }}>
                    <MenuItem
                        label={'Inicio'}
                        icon={homeicon}
                        isFocused={selectedTab == 'Inicio'}
                        onPress={() => {
                            setSelectedTab('Inicio');
                            navigation.navigate('Main');
                        }} />

                    <MenuItem
                        label={'Ajustes'}
                        icon={settings}
                        isFocused={selectedTab == 'Ajustes'}
                        onPress={() => {
                            setSelectedTab('Ajustes');
                            navigation.navigate('Setting');
                        }} />
                </View>
                <View
                    style={{ marginBottom: 10 }}>
                    <MenuItem
                        label={'Cerrar Sesión'}
                        icon={logout}
                        onPress={() => { navigation.navigate('Login'); }} />
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

const Menu = ({ selectedTab, setSelectedTab }) => {
    const [progress, setProgress] = React.useState(new Animated.Value(0));

    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8],
    });

    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [0, 26],
    });

    const animatedStyle = { borderRadius, transform: [{ scale }] };

    return (
        <View style={{ flex: 1, backgroundColor: "#086A87" }}>
            <Drawer.Navigator
                drawerType="slide"
                overlayColor="transparent"
                drawerStyle={{ flex: 1, width: '65%', backgroundColor: 'transparent' }}
                sceneContainerStyle={{
                    backgroundColor: 'transparent'
                }}
                initianRouteName="Main"
                drawerContent={props => {
                    setTimeout(() => {
                        setProgress(props.progress);
                    }, 0);

                    return (
                        <MenuContent
                            navigation={props.navigation}
                            selectedTab={selectedTab}
                            setSelectedTab={setSelectedTab} />
                    )
                }}>
                <Drawer.Screen name="Main">
                    {props => (<Main {...props}
                        drawerAnimationStyle={animatedStyle} />)}
                </Drawer.Screen>

                <Drawer.Screen name="Setting">
                    {props => (<Setting {...props}
                        drawerAnimationStyle={animatedStyle} />)}
                </Drawer.Screen>
                <Drawer.Screen name="Profile">
                    {props => (<Profile {...props}
                        drawerAnimationStyle={animatedStyle} />)}
                </Drawer.Screen>

            </Drawer.Navigator>

        </View>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

const styles = StyleSheet.create({
    containerEncabezadoMenu: {
        flexDirection: 'row',
        height: 40,
        width: 200,
        marginBottom: 10,
        alignItems: 'center',
        borderRadius: 8
    },

    imageIconMenu: {
        marginLeft: 8,
        marginRight: 8,
        width: 25,
        height: 25,
        tintColor: 'white'
    },

    textIconMenu: {
        marginLeft: 6,
        color: 'white',
        fontSize: 20
    },

    containerMenu: {
        flex: 1,
        paddingHorizontal: 20,
        padding: 15,
        marginTop: 21
    },

    seleccionMenu: {
        height: 1,
        marginVertical: 20,
        marginLeft: 20,
        backgroundColor: 'white'
    }
});