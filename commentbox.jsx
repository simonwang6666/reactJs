import React from 'react';
import CommentList from './commpent/commentlist.jsx';
import CommentForm from './commpent/commentform.jsx';
class CommentBox extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
      	  data:[]
    	}
	}

	componentDidMount() {

		$.getJSON('1.json',function(result){    
			this.setState({data: result});
		}.bind(this));

	}
	render() {
		return (
			<div className="commentBox">
			<h1>Comments</h1>
			<CommentList data={this.state.data} />
			<CommentForm />
			</div>
			);
	}
}

React.render(<CommentBox/>,document.getElementById('content'))