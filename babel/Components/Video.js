import React from 'react';
import { videoSrc } from '../utils';

const Video = () => {
    return (
        <iframe
            className="video"
            src={videoSrc}
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    );
};

export default Video;
