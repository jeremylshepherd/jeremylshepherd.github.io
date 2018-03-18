import React from 'react';
import contStyle from '../assets/contStyle';

export default class CollapseCont extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: true
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ show: !this.state.show });
    }

    render() {
        let s = this.state.show;
        let show = s ? 'xxx' : 'zzz';
        let icon = s ? 'fa-plus-square' : 'fa-minus-square';
        return (
            <div style={contStyle} className="colCont">
                <div className="container-fluid header-bar">
                    <h1 style={{ float: 'left' }}>{this.props.heading}</h1>
                    <i
                        className={`fa ${icon} fa-2x`}
                        onClick={this.toggle}
                        style={{ float: 'right', marginTop: 30 }}
                    />
                </div>
                <div className={show}>{this.props.children}</div>
            </div>
        );
    }
};
