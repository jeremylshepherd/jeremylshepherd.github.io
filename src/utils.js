const socialData = [
    {
        name: 'Github',
        link: 'https://github.com/jeremylshepherd',
        icon: 'fa fa-github'
    },
    {
        name: 'Twitter',
        link: 'https://twitter.com/jeremylshepherd',
        icon: 'fa fa-twitter-square'
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/jeremylshepherd',
        icon: 'fa fa-linkedin-square'
    },
    {
        name: 'FreeCodeCamp',
        link: 'https://www.freecodecamp.org/jeremylshepherd',
        icon: 'fa fa-free-code-camp'
    },
    {
        name: 'Codepen',
        link: 'https://codepen.io/jeremylshepherd',
        icon: 'fa fa-codepen'
    }
];
const navData = ['Home', 'About', 'Portfolio', 'Contact'];

const now = new Date(Date.now()).getFullYear();

const tileClass = 'project-tile';

const date = () => {
    let start = new Date(1998, 2, 30).getFullYear();
    return now - start;
};

const queryCheck = (r, q) => {
    q = q.toLowerCase();
    let tech = r.technologies.join(', ');
    if (
        r.title.toLowerCase().indexOf(q) !== -1 ||
        tech.toLowerCase().indexOf(q) !== -1 ||
        r.type.toLowerCase().indexOf(q) !== -1
    ) {
        return true;
    } else {
        return false;
    }
};

const videoSrc = 'https://www.youtube.com/embed/ICgRHhz6xYE';

export { socialData, navData, now, tileClass, date, queryCheck, videoSrc };
