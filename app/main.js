import 'fetch';
import React from 'react';
import ReactDOM from 'react-dom';

import {reposForUser} from './api';
import RepositoryList from './repository-list';


class HelloWorld extends React.Component {
	render() {
		return <div> 
			<RepositoryList /><p>Hello dog</p>
		</div>;
	}
}

ReactDOM.render(<HelloWorld />,document.getElementById('render'));

reposForUser('vianch').then(repos => console.log(repos));