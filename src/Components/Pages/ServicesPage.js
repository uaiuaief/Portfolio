import { Component } from 'react';
import { Banner } from '../Banner';
import { Header } from '../Header';

class ServicesPage extends Component {
  render() {
    return (
      <>
        <Header location={this.props.location}/>
        <section id="services-page">
          <Banner
            title='Meus Serviços'
            description='Tudo que eu ofereço com uma visão detalhada de cada um'
          />
        Services Page
      </section>
      </>
    );
  }
}

export { ServicesPage }
