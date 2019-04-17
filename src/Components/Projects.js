import React from 'react';
import Thumb from './Thumb';
import Dummy from './Dummy';
import { queryCheck } from '../utils';
import AsyncComponent from './AsyncComponent';

export default class Projects extends React.Component {
    constructor() {
        super();
        this.state = { query: '', featured: true };

        this.toggleFeatured = this.toggleFeatured.bind(this);
        this.handleQuery = this.handleQuery.bind(this);
        this.clearQuery = this.clearQuery.bind(this);
    }

    toggleFeatured(e) {
        this.setState({ featured: !this.state.featured });
    }

    handleQuery(e) {
        this.setState({ query: e.target.value });
    }

    clearQuery() {
        this.setState({ query: '' });
    }

    render() {
        const { query, featured } = this.state;
        const { data, loading } = this.props;
        const Spinner = React.lazy(() => import('./Spinner'));
        let projects = featured ? data.filter(r => r.type.toLowerCase() === 'full-stack') : data;
        let filtered = query ? projects.filter(r => queryCheck(r, query)) : projects;
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
        let msg = data.length > 0 ? 'Updating...' : ' Loading...';
        let Loading = loading ? (
            <AsyncComponent>
                <Spinner msg={msg} />
            </AsyncComponent>
        ) : null;
        return (
            <div id="portfolio" className="portfolio">
                <div className="form-box">
                    <form className="form">
                        <input
                            aria-label="search input"
                            type="text"
                            className="form-input"
                            value={query}
                            placeholder="Search..."
                            onChange={this.handleQuery}
                        />
                        <div className="form-btn" onClick={this.clearQuery}>
                            Clear
                        </div>
                    </form>
                    <div className="check-box">
                        <span style={{ color: !featured ? '#222' : '#3498db' }}>Featured</span>
                        <input
                            id="iOS"
                            type="checkbox"
                            data-style="ios"
                            className="check iOS"
                            onChange={this.toggleFeatured}
                        />
                        <label htmlFor="iOS" className="check-label">
                            <span />
                        </label>
                        <span style={{ color: featured ? '#222' : '#3498db' }}>All</span>
                    </div>
                </div>
                <div>{Loading}</div>
                <div className="project-grid">
                    {loading && data.length === 0
                        ? [...Array(12)].map((a, i) => <Dummy key={`${i}-dummy`} />)
                        : ThumbNodes}
                </div>
            </div>
        );
    }
}
