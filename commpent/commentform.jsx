import React from 'react'
export default class CommentForm extends React.Component{
	constructor(props) {
		super(props);
		this.state = ({author: '', text: ''});
	}

	componentDidMount() {
	}
	handleAuthorChange(e) {
		this.setState({author: e.target.value});
		 // alert(e.target.value);
	}
	handleTextChange(e) {
		this.setState({text: e.target.value});
		 // alert(e.target.value);
	}
	handleSubmit(e) {
		e.preventDefault();
		var author = this.state.author.trim();
		var text = this.state.text.trim();
		if (!text || !author) {
			return;
		}
		alert('submit')
    // TODO: send request to the server
    this.setState({author: '', text: ''});
}
render(){
	return (
		<form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
		<h2>{this.state.author}</h2>
		<input
		type="text"
		placeholder="Your name"
		value={this.state.author}
		ref = 'author'
		onChange={this.handleAuthorChange.bind(this)}/>
		<input
		type="text"
		placeholder="Say something..."
		value={this.state.text}
		ref = 'text'
		onChange={this.handleTextChange.bind(this)}/>
		<input type="submit" value="Post" />
		</form>
		);
}
};