import React from 'react';
import contStyle from '../../assets/contStyle';

export default class CollapseCont extends React.Component {
    state = {
        show: true
    };

    toggle = () => {
        this.setState({ show: !this.state.show });
    };

    render() {
        let s = this.state.show;
        let show = s ? 'show' : 'hide';
        let icon = s ? 'fa-plus-square' : 'fa-minus-square';
        return (
            <div className="colCont" id={this.props.id ? this.props.id : null}>
                <div className="content">
                    <div className="header-bar">
                        <h1>{this.props.heading}</h1>
                        <i className={`fa ${icon} fa-2x`} onClick={this.toggle} />
                    </div>
                    <div className={`child ${show}`}>{this.props.children}</div>
                </div>
            </div>
        );
    }
}
