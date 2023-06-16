import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const SearchIcon = props => (
    <Svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Rect
            width="7.46592"
            height="2.19915"
            rx="1"
            transform="matrix(0.699103 0.715021 0.699103 -0.715021 9.23779 11.7117)"
            fill="#828080"
        />
        <Path
            d="M11.8274 7.05341C11.8274 9.84211 9.62344 12.0603 6.95652 12.0603C4.2896 12.0603 2.0856 9.84211 2.0856 7.05341C2.0856 4.26471 4.2896 2.04653 6.95652 2.04653C9.62344 2.04653 11.8274 4.26471 11.8274 7.05341Z"
            stroke="#828080"
            stroke-width="2.2"
        />
    </Svg>
);

export default SearchIcon;
