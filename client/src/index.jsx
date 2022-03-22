import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

    this.getTop = this.getTop.bind(this);
  }

  componentDidMount() {
    this.getTop();
  }

  search (term) {
    // TODO
    axios.post('/repos', { username: term })
      .then(res => {
        if(res.status === 201) {
        this.getTop();
        }
      })
      .catch(err => console.log)
  }

  getTop() {
    axios.get('/repos')
      .then(results => {
        this.setState({ repos: results.data })
      });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));