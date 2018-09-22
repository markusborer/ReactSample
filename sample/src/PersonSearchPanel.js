import React from 'react';
import PersonSearchForm from './PersonSearchForm';
import PersonSearchResult from './PersonSearchResult';

class PersonSearchPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      persons : []
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(text) {
    this.setState({
      persons : [{name: text+"1"}, {name: text+"2"}, {name: text+"3"}]
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
