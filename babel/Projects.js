import React from 'react';
import Thumb from './Thumb';
import { queryCheck } from '../assets/helpers';

export default class PortfolioProjects extends React.Component {
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
        let filtered;
        if (this.state.query) {
            filtered = [];
            this.props.data.map(r => {
                if (queryCheck(r, this.state.query)) {
                    filtered.push(r);
                }
            });
        } else {
            filtered = this.props.data;
        }
        var ThumbNodes = filtered.map(function(project) {
            const technologies = project.technologies.join(', ');
            const title =
        project.title.length < 40
            ? project.title
            : `${project.title.slice(0, 37)}...`;
            return (
                <Thumb
                    key={project._id}
                    url={project.url}
                    title={title}
                    technologies={technologies}
                    type={project.type}
                    img={project.img}
                />
            );
        });
        let Loading = this.props.loading ? (
            <div className="text-center">
                <h1 className="text-center loading">
                    <i className="fa fa-spinner fa-pulse fa-inverse" aria-hidden="true" />
                    <span className="pulse">{'  loading...'}</span>
                </h1>
            </div>
        ) : null;
        return (
            <div id="portfolio" className="container-fluid portfolio">
                <div className="constrain row">
                    <form className="form-group col-xs-12">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.query}
                                placeholder="Search..."
                                onChange={this.handleQuery}
                            />
                            <div className="input-group-addon" onClick={this.clearQuery}>
                Clear
                            </div>
                        </div>
                    </form>
                    <div className="row">{ThumbNodes}</div>
                    <div className="row">{Loading}</div>
                </div>
            </div>
        );
    }
}
