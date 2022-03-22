import React from 'react';

const RepoEntry = (props) => (
      <tr id="repoInfo">
        <td>{props.repo.username}</td>
        <td><a href={props.repo.url} target="_blank">{props.repo.repoName}</a></td>
        <td>{props.repo.stargazers}</td>
      </tr>
)

export default RepoEntry;