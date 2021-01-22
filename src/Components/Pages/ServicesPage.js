import { Component } from 'react';
import { Banner } from '../Banner';

class ServicesPage extends Component {
  render() {
    return (
      <section id="services-page">
        <Banner
          title='Meus Serviços'
          description='Tudo que eu ofereço com uma visão detalhada de cada um'
        />
        Services Page
      </section>
    );
  }
}

export { ServicesPage }
