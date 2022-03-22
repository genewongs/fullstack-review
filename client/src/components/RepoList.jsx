import React from 'react';
import RepoEntry from './RepoEntry.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <div>
    <table style={{width:"50%"}}>
      <tr>
        <th>Username</th>
        <th>Repo</th>
        <th>Stargazers</th>
      </tr>
      {props.repos.map((repo, index) => {
      return <RepoEntry key={index} repo={repo} />
    })}
    </table>
  </div>
  </div>
)

export default RepoList;