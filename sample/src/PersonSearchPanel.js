import React from 'react';
import PersonSearchForm from './PersonSearchForm';
import PersonSearchResult from './PersonSearchResult';
import axios from 'axios';

class PersonSearchPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      persons : []
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(text) {
    axios.get('http://localhost:8080/person?name=' + text)
      .then(res => {
        this.setState({
          persons : res.data
        });
      });
  }

  render() {
    return (
      <div>
        <PersonSearchForm onChange={this.onChange} />
        <PersonSearchResult persons={this.state.persons} />
      </div>
    );
  }

}

export default PersonSearchPanel;
