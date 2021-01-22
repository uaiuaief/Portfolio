import { Component } from 'react';
import { Banner } from '../Banner';

class ContactPage extends Component {
  render() {
    return (
      <section id="contact-page">
        <Banner
          title='Fale Comigo'
          description='Se você gostaria de falar sobre um projeto, por favor preencha o formulário abaixo e eu irei responder dentro de 1 ou 2 dias'
        />
        About Page
      </section>
 
    );
  }
}

export { ContactPage }
