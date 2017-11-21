import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/mediacloud';

function mapStateToProps(state) {
    return {
        data: state.data,
        loaded: state.data.loaded,
        isFetching: state.data.isFetching,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
class Analytics extends React.Component { // eslint-disable-line react/prefer-stateless-function
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const { fetchMediaCloudStats } = this.props;
        fetchMediaCloudStats();
    }

    render() {
        const { data, isFetching } = this.props;
        let content;
        if (isFetching) {
            content = (<i>Loading...</i>);
        } else if (data.data) {
            content = (
                <ul>
                    <li>Total Stories: {data.data.total_stories}</li>
                    <li>Active Media Sources: {data.data.active_crawled_media}</li>
                </ul>
            );
        } else {
            content = (<i>No Data</i>);
        }
        return (
            <div className="col-md-8">
                <h1>Analytics</h1>
                <hr />
                {content}
            </div>
        );
    }
}

Analytics.propTypes = {
    fetchMediaCloudStats: React.PropTypes.func,
    data: React.PropTypes.object,
    isFetching: React.PropTypes.bool,
};

export default Analytics;
