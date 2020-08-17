import React from 'react';
import AsyncComponent from './AsyncComponent';
import Video from './Video';
import Arrow from './Arrow';

export default class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            // eslint-disable-next-line comma-dangle
            video: false,
        };
    }

    render() {
        const { video } = this.state;
        const Image = video ? (
            <AsyncComponent>
                <Video />
            </AsyncComponent>
        ) : (
            <img
                onError={this.defaultSRC}
                id="self"
                className="self"
                src="./assets/page/Jeremy L Shepherd profile - square - small.png"
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
                    <span className="action-text">Watch my video introduction! </span>
                    <Arrow width={40} height={40} />
                </div>
            </div>
        );
    }
}
