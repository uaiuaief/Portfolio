import { Component } from 'react';
import { Header } from '../Header';

class HomePage extends Component {
  render() {
    return (
      <>
        <Header location={this.props.location}/>
        <div className="App">
          Home Page
        </div>
      </>
    );
  }
}

export { HomePage }
