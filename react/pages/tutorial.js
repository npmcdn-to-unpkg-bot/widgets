// tutorial1.js
var CommentBox = React.createClass({
	render: function(){
		return (
			<div className="commentbox">
				Hello, world! I am a CommentBox.
			</div>
			);
	}
});

ReactDOM.render(
	<CommentBox />
	document.getElementById('content');
);