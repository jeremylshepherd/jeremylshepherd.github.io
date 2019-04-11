import React from 'react';
import { socialData } from '../utils';

const Contact = () => {
    return (
        <div id="contact" className="contact">
            <a
                className="danger-btn radiate"
                href="mailto:jeremylshepherd@gmail.com?Subject=Inquiry"
                target="_top">
                <i className="fa fa-envelope" aria-hidden="true" />
                jeremylshepherd@gmail.com
            </a>
            <div className="contact-buttons">
                {socialData.map(s => (
                    <button key={`${s.name}-button`} id={s.name.replace(/\s/g, '').toLowerCase()}>
                        <a href={s.link} rel="noopener" rel="noreferrer">
                            <i className={s.icon} />
                        </a>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Contact;
