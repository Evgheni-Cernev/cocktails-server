import React, {useContext} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {
  IngridientsGroups,
  IngridientItem,
} from '../../hooks/api/useGetIngridientsGroupsQuery';
import {UserContext} from '../../../App';

function FilterItem({
  data,
  onPress,
  showChecked = false,
}: {
  data?: IngridientsGroups | IngridientItem;
  onPress: () => void;
  showChecked?: boolean;
}) {
  const {_id, name, items, img} = data ?? {};
  const cardImg = items ? items[0].img : img;
  const {filters} = useContext(UserContext);
  return (
    <View key={_id} style={styles.container}>
      {showChecked && (
        <TouchableOpacity style={styles.selectContainer} onPress={onPress}>
          <View
            style={
              name && filters.ingridients.includes(name)
                ? styles.active
                : styles.select
            }
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={{...styles.selectContainer, ...{width: '90%'}}}
        onPress={onPress}>
        <View style={styles.selectSection}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: cardImg ?? '',
              }}
              style={styles.image}
            />
            <Image
              source={{
                uri: cardImg ?? '',
              }}
              blurRadius={10}
              style={styles.imageBG}
            />
          </View>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.title}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
export default FilterItem;
