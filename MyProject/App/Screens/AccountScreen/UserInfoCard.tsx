import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

const UserInfoCard = ({ name, count, onPress }: { name: string, count: number, onPress?: () => void }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View
                style={styles.cardContainer}
            >
                <Text style={{ textAlign: 'left', fontSize: 30, fontWeight: '700', color: 'white' }}>{count}</Text>
                <Text style={{ textAlign: 'left', fontSize: 18, fontWeight: '700', color: 'white' }}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default UserInfoCard