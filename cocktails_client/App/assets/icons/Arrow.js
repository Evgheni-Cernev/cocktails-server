import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Arrow = props => (
    <Svg {...props} xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
        <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.84315 1.75063C9.20498 1.33339 9.16006 0.701817 8.74282 0.339983C8.32557 -0.021851 7.694 0.0230698 7.33216 0.440316L0.487454 8.33325C0.420929 8.40742 0.367252 8.48955 0.326642 8.57657C0.263755 8.71094 0.232728 8.85573 0.232788 9.0001C0.232728 9.14453 0.263784 9.28939 0.326729 9.42381C0.367323 9.51075 0.420963 9.5928 0.487429 9.66691L7.33216 17.5599C7.694 17.9771 8.32557 18.022 8.74282 17.6602C9.16006 17.2984 9.20498 16.6668 8.84315 16.2496L2.55645 9.0001L8.84315 1.75063Z"
            fill="white"
        />
    </Svg>
);

export default Arrow;
