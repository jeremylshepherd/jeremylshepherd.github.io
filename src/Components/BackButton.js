import React, { Component } from 'react';
import { withRouter } from 'react-router';

class BackButton extends Component {
    constructor(props) {
        super(props);
        
        this.goBack = this.goBack.bind(this);
    }
    
    goBack() {
        this.props.history.goBack();
    }
    
    render() {
        return (
            <div id="backButton">
                <span className="text-left backButton" onClick={ this.goBack }>
                <i className="fa fa-chevron-left"/>  BACK</span>
            </div>
        );
    }
}

const BackButtonRouter = withRouter(BackButton);

export default BackButtonRouter;