import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type PropsType = { activeTab: string, text: string, filterName: string, onSelect: (selected: { selected: string }) => void }

const ButtonElement = ({ activeTab, text, filterName, onSelect }: PropsType) => {
    return (
        <TouchableOpacity
            style={[styles.button, activeTab === text ? styles.activeButton : []]}
            onPress={() => { onSelect({ selected: text }) }}>
            <Text style={[styles.text, activeTab === text ? styles.activeText : []]}>{text}</Text>
        </TouchableOpacity>
    );
}

export default ButtonElement