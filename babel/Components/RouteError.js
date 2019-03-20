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
            <img src="../../assets/RouterError.jpeg" style={styles.img} />
            <h1 className="header-bar">Oops! I seemed to have misplaced that route.</h1>
            <Link className="btn btn-primary" to="/">
                Take me home!
            </Link>
        </div>
    );
};

export default RouteError;
