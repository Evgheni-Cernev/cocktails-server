import React from 'react';
import { View } from 'react-native';
import Button from '../ButtonElement/ButtonElement';
import { styles } from './styles';

type PropsType = {
    options: {
        btn1: {
            text: string;
        };
        btn2: {
            text: string;
        };
    },
    activeTab: string,
    filterName: string,
    onSelect: (selected: { selected: string }) => void
}

export default function HeaderTabs({ options, activeTab, filterName, onSelect }: PropsType) {
    const { btn1, btn2 } = options;
    return (
        <View style={styles.container}>
            <Button
                text={btn1.text}
                activeTab={activeTab}
                filterName={filterName}
                onSelect={onSelect}
            />
            <Button
                text={btn2.text}
                activeTab={activeTab}
                filterName={filterName}
                onSelect={onSelect}
            />
        </View>
    );
}
