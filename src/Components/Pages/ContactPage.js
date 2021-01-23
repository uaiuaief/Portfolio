import { Component } from 'react';
import { Banner } from '../Banner';
import { Header } from '../Header';

class ContactPage extends Component {
  render() {
    return (
      <>
        <Header location={this.props.location}/>
        <section id="contact-page">
          <Banner
            title='Fale Comigo'
            description='Se você gostaria de falar sobre um projeto, preencha o formulário abaixo e eu irei responder dentro de 1 ou 2 dias'
          />
        About Page
        </section>
      </>

    );
  }
}

export { ContactPage }
