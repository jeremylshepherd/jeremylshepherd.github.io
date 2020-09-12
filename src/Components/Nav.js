import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { navData } from '../utils';

class Nav extends React.Component {
    state = {
        checked: false,
    };

    toggleChecked = () => {
        this.setState({ checked: !this.state.checked });
    };

    render() {
        return (
            <nav id="navbar" className="nav_bar">
                <div className="content">
                    <span className="brand">Jeremy L. Shepherd</span>
                    <input
                        type="checkbox"
                        id="toggle"
                        className="toggle"
                        checked={this.state.checked}
                    />
                    <label
                        id="toggle-btn"
                        className="toggle-btn"
                        htmlFor="toggle"
                        onClick={this.toggleChecked}>
                        <span className="icon-bar ib-top" />
                        <span className="icon-bar ib-mid" />
                        <span className="icon-bar ib-bot" />
                    </label>
                    <ul className="right-nav">
                        {navData.map(n => (
                            <li key={`${n}-nav`}>
                                <NavLink smooth to={`/#${n.toLowerCase()}`}>
                                    {n}
                                </NavLink>
                            </li>
                        ))}
                        <li>
                            <a href={`/assets/resume.pdf`}>Résumé</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;
