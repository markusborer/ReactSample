import React from 'react';

class PersonSearchResult extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const rows = [];
    this.props.persons.forEach(person => {
      rows.push(<PersonRow person={person} />)
    });
    return (
      <table>
        <thead>
          <PersonHeader />
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }

}

class PersonHeader extends React.Component {
  render() {
    return (
      <tr>
        <th>Name</th>
      </tr>
    )
  }
}

class PersonRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.person.name}</td>
      </tr>
    )
  }
}

export default PersonSearchResult;
