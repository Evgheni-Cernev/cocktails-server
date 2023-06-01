import FastImage from "react-native-fast-image";
import { View } from "react-native";
import { styles } from "./styles";
import Reaction from "../Reaction/Reaction";

const Image = ({ id, image }: { id: string, image: string }) => (
    <View style={styles.imageContainer}>
        <FastImage
            source={{
                uri: image,
                priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.image}
       >
        <Reaction id={id} />
       </FastImage>
    </View>
);

export default Image;