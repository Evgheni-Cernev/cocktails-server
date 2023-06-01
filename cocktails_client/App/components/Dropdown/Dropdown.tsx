import React, { useContext } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './styles';
import { UserContext } from '../../../App';

const items_data = [
    {
        value: 'Alcohol',
        lable: 'Alcohol',
    },
    {
        value: 'No-alcohol',
        lable: 'No-alcohol',
    },
];

type Selection = {
    selectedItem: string,
    setItem: (selected: { selected: string }) => void
}

const DropdownComponent = ({ selectedItem, setItem }: Selection) => {
    return (
        <Dropdown
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            containerStyle={styles.container}
            itemContainerStyle={styles.itemContainer}
            itemTextStyle={styles.itemText}
            activeColor={'#BDBF53'}
            maxHeight={600}
            iconColor="#fff"
            value={selectedItem}
            data={items_data}
            backgroundColor="rgba(0, 0, 0, 0.7)"
            valueField="value"
            labelField="lable"
            onChange={e => {
                setItem({ selected: e.value });
            }}
            iconStyle={styles.iconStyle}
        />
    );
};

export default DropdownComponent;


