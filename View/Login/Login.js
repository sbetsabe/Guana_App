import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';

export default class Login extends Component {

    constructor(props) {
        super(props);
        state = {
            email: '',
            password: '',
        }
    }

    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed " + viewId);
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>INICIO DE SESIÓN</Text>
                <Image source={require('../../assets/logo.png')}
                    style={{ width: 230, height: 170, resizeMode: 'contain', marginBottom: 25 }}
                />
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ios-filled/24/000000/email.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ios-filled/30/000000/password.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Contraseña"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => navigation.navigate("Dash")}>
                    <Text style={styles.loginText}>ACCEDER</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 21,
        color: "#0684ba",
        marginBottom: 40
    },
    inputContainer: {
        borderBottomColor: '#000',
        backgroundColor: 'transparent',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 320,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1
    },
    inputIcon: {
        width: 20,
        height: 20,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 150,
        borderRadius: 15,
    },
    loginButton: {
        backgroundColor: "#0684ba",
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold'
    }
});