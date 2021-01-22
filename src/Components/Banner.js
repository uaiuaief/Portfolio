import { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <section id="banner">
        <h1 className="banner-title">{this.props.title}</h1>
        <h2 className="banner-description"> {this.props.description} </h2>
      </section>
    );
  }
}

export { Banner }
