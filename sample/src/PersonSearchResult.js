import React from 'react';
import {Table, Row, Col} from 'react-materialize';

class PersonSearchResult extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const rows = [];
    this.props.persons.forEach(person => {
      rows.push(<PersonRow key={person.name + '___' + person.vorname} person={person} />)
    });
    return (
      <Table hoverable="true" className="table">
        <thead>
          <PersonHeader />
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    );
  }

}

class PersonHeader extends React.Component {
  render() {
    return (
      <Row node="tr">
        <Col node="th" s={4} m={4}>Name</Col>
        <Col node="th" s={8} m={8}>Vorname</Col>
      </Row>
    )
  }
}

class PersonRow extends React.Component {
  render() {
    if (this.props.person.name === 'XXX1') {
      // Simulate a JS error
      throw new Error('I crashed!');
    }
    return (
      <Row node="tr">
        <Col node="td" s={4} m={4}>{this.props.person.name}</Col>
        <Col node="td" s={8} m={8}>{this.props.person.vorname}</Col>
      </Row>
    )
  }
}

export default PersonSearchResult;
