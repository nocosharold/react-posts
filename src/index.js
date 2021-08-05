import React from "react";
import ReactDOM from "react-dom";
import PostDetail from './PostDetail';

const App = () => {
	return (
		<div className="ui container comments">
            <PostDetail name="Oliver" datePosted="Today at 1PM" postContent="Wow this is a great website!" />
            <PostDetail name="Myca" datePosted="Today at 2PM" postContent="Awesome website!" />
            <PostDetail name="Paul" datePosted="Today at 3PM" postContent="Best website ever!" />
        </div>
	);
};
ReactDOM.render(<App />, document.querySelector("#root"));
