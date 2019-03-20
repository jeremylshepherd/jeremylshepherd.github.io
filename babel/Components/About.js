import React from 'react';
import Bullet from './Bullet';
import Profile from './Profile';
import { date } from '../utils';

export default class About extends React.Component {
    defaultSRC = e => {
        e.target.src =
            'https://raw.githubusercontent.com/jeremylshepherd/jeremylshepherd.github.io/master/assets/Image_not_available.gif';
    };

    render() {
        return (
            <div id="about">
                <Profile />
                <div>
                    <p>{`My name is Jeremy and I am full-stack web & mobile developer.`}</p>
                    <p>
                        {`In 2014, I wanted to build a website to showcase my photography and maybe pick up some side work. I scoured tutorials, built a decent site, and found that I really enjoyed coding.`}
                    </p>
                    <p>
                        {`I have a passion for building functional and beautiful web/mobile applications that enhance lives and frees people to focus their time and energy on following their passions.`}
                        <br />
                        <a
                            href="https://jeremylshepherd.github.io/assets/resume.pdf"
                            target="_blank"
                            id="resume">
                            <i className="fa fa-file-pdf-o" />
                            Résumé
                        </a>
                        <br />
                        <br />
                        <span>Specializations:</span>
                        <br /> <Bullet /> Building Cross Platform Applications
                        <br /> <Bullet /> React, React-Native, Angular, D3
                        <br /> <Bullet /> Node, Express, Ruby on Rails
                        <br /> <Bullet /> SQL, MongoDB
                    </p>
                </div>
            </div>
        );
    }
}
