import React, { Component } from 'react';
import './post.css'
import PostDetail from './postdetail'


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            loader: false
        };
        // this.dataFetch();
    }

    componentDidMount() {
        this.setState({ loader: true });
        this.dataFetch();
        this.setState({ loader: false });
    }


    dataFetch() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json =>
                this.setState({
                    post: json
                })
            );
    }


    render() {
        const { loader, post } = this.state
        return (
            <div>
                {loader ? (
                    <p>'...loading'</p>
                ) : (
                            <div className="feed-page">
                                {post.map(item => (
                                    <PostDetail title={item.title} body={item.body} />
                                ))}
                            </div>
                    )}
            </div>
        );
    }
}

export default Post;
