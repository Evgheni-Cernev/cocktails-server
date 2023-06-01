import * as React from 'react';
import Svg, {Circle, Rect} from 'react-native-svg';

const ShaeredIcon = props => (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Circle cx="14.2322" cy="3.29946" r="2.97231" fill="white" />
        <Circle cx="14.2322" cy="14.7003" r="2.97231" fill="white" />
        <Circle cx="3.93142" cy="9.24404" r="2.97231" fill="white" />
        <Rect
            x="5.59851"
            y="7.55347"
            width="7.19991"
            height="1.58943"
            transform="rotate(-30 5.59851 7.55347)"
            fill="white"
        />
        <Rect
            width="7.19991"
            height="1.59228"
            transform="matrix(0.866025 0.5 0.5 -0.866025 5.59778 10.76)"
            fill="white"
        />
    </Svg>
);

export default ShaeredIcon;
