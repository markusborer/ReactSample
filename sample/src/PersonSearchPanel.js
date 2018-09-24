import React from 'react';
import PersonSearchForm from './PersonSearchForm';
import PersonSearchResult from './PersonSearchResult';
import axios from 'axios';
import { fromEvent } from 'rxjs';
import { switchMap, debounceTime } from 'rxjs/operators';

class PersonSearchPanel extends React.Component {

  eventTarget = new EventTarget();

  constructor(props) {
    super(props);
    this.state = {
      persons : []
    }
    this.onChange = this.onChange.bind(this);
  }

    componentDidMount() {
      fromEvent(this.eventTarget, "OnChange")
        .pipe(debounceTime(200), switchMap(s => axios.get('http://localhost:8080/person?name=' + s.detail)))
        .subscribe(
            res => {
                console.log(res.data);
                this.setState({
                    persons : res.data
                });
            }
        );
    }

    onChange(text) {
      this.eventTarget.dispatchEvent(new CustomEvent('OnChange', { detail: text }));
        /*
        axios.get('http://localhost:8080/person?name=' + text)
          .then(res => {
            this.setState({
              persons : res.data
            });
          });
        */
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
