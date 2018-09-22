import React from 'react';

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
      <input onChange={this.onChange} />
    );
  }

}

export default PersonSearchForm;
