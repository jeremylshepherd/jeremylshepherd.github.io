import React, { Component } from 'react';

export default class Profile extends Component {
    constructor() {
        super();

        this.state = {
            video: false
        };
    }

    render() {
        const { video } = this.state;
        const Image = video ? (
            <video
                preload="auto"
                className="video"
				src="../../assets/Jeremy Shepherd intro_1_1.mp4"
				poster="https://gravatar.com/avatar/28acf74786d34d55ddbba649aab086c5.jpg?s=360&r=pg"
                controls
                controlsList="nodownload"
            />
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
            <div id="profile" className="col-sm-6 hidden-xs">
                <div className="polaroid">
                    {Image}
                    <span className="gutter">Jeremy {new Date(Date.now()).getFullYear()}</span>
                    <div
                        className="profile-toggle"
                        onClick={() => this.setState({ video: !video })}
                    >
                        <i className={flag} />
                    </div>
                </div>
            </div>
        );
    }
}
