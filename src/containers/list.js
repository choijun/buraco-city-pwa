import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {listPosts} from '../actions/posts';

class List extends Component{
    constructor(props) {
        super(props);
        this.state = {};

        console.log(this.props)
    }

    componentWillMount() {
        this.props.listPosts();
    }

    render() {
        return (
            <div className='list-of-posts'>
                <h1>List of posts</h1>
                {this.mapItems()}
            </div>
            
        );
    };

    mapItems() {
        return this.props.posts.list.map((item, index) => {
            return (<li key={index}>{item.author} ({item.message})</li>);
        })
    }
};

function mapStateToProps({posts}) {
    return {posts};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({listPosts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);