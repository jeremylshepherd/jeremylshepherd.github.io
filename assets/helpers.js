export const date = () => {
    let start = new Date(1998, 2, 30).getFullYear();
    let now = new Date(Date.now()).getFullYear();
    return now - start;
};

export const queryCheck = (r, q) => {
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