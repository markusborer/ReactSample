import React from 'react';
import PersonSearchForm from './PersonSearchForm';
import PersonSearchResult from './PersonSearchResult';
import ErrorBoundary from './ErrorBoundary';
import axios from 'axios';
import { fromEvent, of } from 'rxjs';
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
        .pipe(debounceTime(200))
        .pipe(
          switchMap(s => axios.get('http://localhost:8080/person?name=' + s.detail)
            .catch(error => {
              console.log(error);
              this.setState({
                error: 'Fehler bei der Serveranfrage'
              })
              return of(undefined);
            })
          )
        )
        .subscribe(
          res => {
            if (res.data !== undefined) {
              console.log(res.data);
              this.setState({
                  persons : res.data,
                  error: undefined
              });
            }
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
      <ErrorBoundary>
        <div>
          <PersonSearchForm onChange={this.onChange} />
          {this.state.error === undefined &&
            <PersonSearchResult persons={this.state.persons} />
          }
          {this.state.error !== undefined &&
            <div>{this.state.error}</div>
          }
        </div>
      </ErrorBoundary>
    );
  }

}

export default PersonSearchPanel;
