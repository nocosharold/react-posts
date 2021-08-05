import React from 'react';
import faker from 'faker';
const PostDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={faker.image.avatar()} alt="avatar" />
            </a>
            <div className="content">
                <a href="/" classname="author">{props.name}</a>
                <div className="metadata">
                    <span className="date">{props.datePosted}</span>
                </div>
                <div className="text">{props.postContent}</div>
            </div>
        </div>
    );
};

export default PostDetail;