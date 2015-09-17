import React from 'react';
import {reposForUser} from './api'; 

export default class RepositoryList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {repos:[] };
	}

	componentDidMount() {

		reposForUser('jackfranklin').then((repos) => { 
			this.setState({
				repos: ["Repository called"]
			});
		});
	}

	render() {
		return <p>{this.state.repos[0]}</p>;
	}
}