import { TouchableOpacity, View } from "react-native";
import LikeActiveIcon from "../../assets/icons/LikeActiveIcon";
import LikeIcon from "../../assets/icons/LikeIcon";
import ShaeredIcon from "../../assets/icons/ShaeredIcon";
import { styles } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../../App";
import useLikedQuery from "../../hooks/api/useLikedQuery";

const Reaction = ({ id }: { id: string }) => {
    const { userData, addReaction } = useContext(UserContext);
    const {addLike} = useLikedQuery()

    const isLiked = userData.liked_cocktails && userData.liked_cocktails?.includes(id);
    return (
        <View style={styles.reaction}>
            <TouchableOpacity
                onPress={() => {
                    addReaction(id)
                    addLike()
                }}>
                {isLiked ? <LikeActiveIcon /> : <LikeIcon />}
            </TouchableOpacity>
            <View style={styles.deviderVertical} />

            <TouchableOpacity onPress={() => { }}>
                <ShaeredIcon />
            </TouchableOpacity>
        </View>
    );
};

export default Reaction