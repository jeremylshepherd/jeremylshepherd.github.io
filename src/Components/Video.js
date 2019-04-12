import React from 'react';
import { videoSrc } from '../utils';

const Video = () => {
    return (
        <iframe
            className="video"
            width={540}
            height={540}
            src={videoSrc}
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    );
};

export default Video;
