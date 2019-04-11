import React from 'react';
import Thumb from './Thumb';
import Dummy from './Dummy';
import Spinner from './Spinner';
import { queryCheck } from '../utils';

export default class Projects extends React.Component {
    constructor() {
        super();
        this.state = { query: '' };

        this.handleQuery = this.handleQuery.bind(this);
        this.clearQuery = this.clearQuery.bind(this);
    }

    handleQuery(e) {
        this.setState({ query: e.target.value });
    }

    clearQuery() {
        this.setState({ query: '' });
    }

    render() {
        let filtered = this.state.query
            ? this.props.data.filter(r => queryCheck(r, this.state.query))
            : this.props.data;
        const ThumbNodes = filtered.map(({ _id, url, title, technologies, type, img }) => {
            return (
                <Thumb
                    _id={_id}
                    key={_id}
                    url={url}
                    title={`${title.slice(0, 37)}${title.length > 40 ? '...' : ''}`}
                    technologies={technologies.join(', ')}
                    type={type}
                    img={img}
                />
            );
        });
        let msg = this.props.data.length > 0 ? 'Updating...' : ' Loading...';
        let Loading = this.props.loading ? <Spinner msg={msg} /> : null;
        return (
            <div id="portfolio" className="portfolio">
                <form className="form">
                    <input
                        type="text"
                        className="form-input"
                        value={this.state.query}
                        placeholder="Search..."
                        onChange={this.handleQuery}
                    />
                    <div className="form-btn" onClick={this.clearQuery}>
                        Clear
                    </div>
                </form>
                <div>{Loading}</div>
                <div className="project-grid">
                    {this.props.loading
                        ? [...Array(12)].map((a, i) => <Dummy key={`${i}-dummy`} />)
                        : ThumbNodes}
                </div>
            </div>
        );
    }
}
