import React from 'react';
import Bullet from './Bullet';
import Profile from './Profile';
import Video from './Video';

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
                    <div className="mobile-video">
                        <Video />
                    </div>
                    <p>{`My name is Jeremy and I am full-stack web & applications developer.`}</p>
                    <p>
                        {`I have been coding since 2014, I am currently attending University of Cincinnati's Bachelor program for Software Application Development. I have* an Associate degree in Software Development from Sinclair (*pending completion of internship).`}
                    </p>
                    <p>
                        {`I have a passion for building functional and beautiful corss-platform applications that enhance lives and frees people to focus their time and energy on following their passions.`}
                        <br />
                        <a
                            href="https://jeremylshepherd.github.io/assets/resume.pdf"
                            rel="noopener"
                            rel="noreferrer"
                            target="_blank"
                            id="resume">
                            <i className="fa fa-file-pdf-o" />
                            Résumé
                        </a>
                        <br />
                        <br />
                        <span>Specializations:</span>
                        <br /> <Bullet /> Building Cross Platform Applications
                        <br /> <Bullet /> C#, Java, Swift, Ruby, JavaScript
                        <br /> <Bullet /> .NET Core, .NET Standard, Xamarin
                        <br /> <Bullet /> React, React-Native, Angular, D3
                        <br /> <Bullet /> Node, Express, Ruby on Rails
                        <br /> <Bullet /> SQL, MongoDB, Firebase, MS SQL Server
                    </p>
                </div>
            </div>
        );
    }
}
