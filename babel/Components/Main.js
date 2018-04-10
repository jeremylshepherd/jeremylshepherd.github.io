import React, { Component } from 'react';

const Main = props => {
    return (
        <div>
            <CollapseCont heading="About Me">
                <About />
                <Link to="/test"><i className="fa fa-code"/></Link>
            </CollapseCont>
            <CollapseCont heading="Projects">
                <Projects
                    data={props.data}
                    loading={props.isLoading}
                />
            </CollapseCont>
            <CollapseCont heading="Contact">
                <Contact />
            </CollapseCont>
        </div>
    );
};

export default Main;