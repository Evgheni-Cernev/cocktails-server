import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const UserIcon = props => (
    <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
        <Circle cx="12.3929" cy="6.74056" r="5.17556" stroke="black" stroke-width="1.63" />
        <Path
            d="M9.68312 15.4247H15.1026C19.6773 15.4247 23.3858 19.1332 23.3858 23.7079C23.3858 23.8161 23.298 23.9038 23.1899 23.9038H1.59587C1.48767 23.9038 1.39996 23.8161 1.39996 23.7079C1.39996 19.1332 5.10846 15.4247 9.68312 15.4247Z"
            stroke="black"
            stroke-width="1.63"
        />
    </Svg>
);

export default UserIcon;
