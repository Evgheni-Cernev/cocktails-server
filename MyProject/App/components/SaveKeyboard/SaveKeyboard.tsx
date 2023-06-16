import React, { FC } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

import Arrow from '../../assets/icons/Arrow';

type SaveKeyboardProps = { showInput: boolean, onSave: () => void, onText: (value: string) => void, inputRef: any, handleKeyboardHide: () => void };

const SaveKeyboard: FC<SaveKeyboardProps> = ({ showInput, onSave, onText, inputRef, handleKeyboardHide }) => {
  

    return (
        <View style={{ display: !showInput ? "none" : 'flex' }}>
            <View style={styles.closeButtonContainer}>
                <TouchableOpacity style={{ padding: 5 }} onPress={handleKeyboardHide}>
                    <View style={styles.closeButton} />
                </TouchableOpacity>
            </View>
            <View style={styles.keyboardSaveContainer}>
                <TouchableOpacity onPress={handleKeyboardHide}>
                    <Arrow style={styles.icon} />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 18 }}>Save as</Text>
                <TouchableOpacity onPress={onSave}>
                    <Text style={{ fontSize: 16 }}>Save</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.deviderKeyboard} />
            <View style={styles.keyboardInputContainer}>
                <TextInput
                    ref={inputRef}
                    keyboardAppearance="dark"
                    style={styles.keyboardInput}
                    placeholder="Type anything..."
                    placeholderTextColor="#828080"
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => onText(text)}
                />
            </View>
        </View>
    );
};

export default SaveKeyboard;