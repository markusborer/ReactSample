import React from 'react';
import {Row, Input} from 'react-materialize';

class PersonSearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <Row>
        <Input label="Name" s={4} onChange={this.onChange} />
      </Row>
    );
  }

}

export default PersonSearchForm;
