import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ containerStyle, title, leftComponent, rightComponent }) => {
    return (
        <View
            style={{ flexDirection: 'row', ...containerStyle }}
        >
            {leftComponent}
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                <Text style={{ color: '#000', fontWeight:"bold" }}>{title}</Text>
            </View>
            {rightComponent}
        </View>
    )
}

export default Header;