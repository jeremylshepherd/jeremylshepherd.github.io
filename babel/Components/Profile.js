import React, { Component } from 'react';
import { videoSrc } from '../utils';
import Video from './Video';
import Arrow from './Arrow';

export default class Profile extends React.Component {
    state = {
        video: false
    };

    render() {
        const { video } = this.state;
        const Image = video ? (
            <Video />
        ) : (
            <img
                onError={this.defaultSRC}
                id="self"
                className="self"
                src="https://gravatar.com/avatar/28acf74786d34d55ddbba649aab086c5.jpg?s=360&r=pg"
                alt="Jeremy L. Shepherd"
            />
        );
        const flag = video ? 'fa fa-camera-retro' : 'fa fa-play-circle-o';

        return (
            <div id="profile">
                <div className="polaroid">
                    {Image}
                    <span className="gutter">Jeremy {new Date(Date.now()).getFullYear()}</span>
                    <div
                        className="profile-toggle"
                        onClick={() => this.setState({ video: !video })}>
                        <i className={flag} />
                    </div>
                </div>
                <div className="action-box">
                    <span className="action-text">Watch my video introduction!</span>
                    <i className="fa fa-level-up" aria-hidden="true" />
                </div>
            </div>
        );
    }
}
