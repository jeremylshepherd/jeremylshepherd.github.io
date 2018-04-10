import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    container: {
        display: 'flex', 
        flex: 1, 
        flexDirection: 'column', 
        height: '800px', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    img: {
        width: '450px', 
        height: '450px', 
        borderRadius: '100%', 
        opacity: '0.85'
    }
};

const RouteError = () => {
    return (
        <div style={styles.container}>
            <img src="https://gravatar.com/avatar/28acf74786d34d55ddbba649aab086c5.jpg?s=360&r=pg" style={styles.img} />
            <h1 className="header-bar">Oops! I seemed to have misplaced that route.</h1>
            <Link className="btn btn-primary" to="/">Take me home!</Link>
        </div>
    );
}

export default RouteError;