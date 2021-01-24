import { Component } from 'react';
import { Banner } from '../Banner';
import { Header } from '../Header';

class ContactPage extends Component {
  render() {
    return (
      <>
        <Header location={this.props.location} />
        <Banner
          title='Fale Comigo'
          description='Se você gostaria de falar sobre um projeto, preencha o formulário abaixo e eu irei responder dentro de 1 ou 2 dias'
        />
        <section id="contact-page">
          <div className="status">
              <h2>Status</h2>
              <h1>Disponível</h1>
              <h3>Estou aceitando novos projetos!</h3>
          </div>
          <form>
            <div className="form-inner">
              <div className="form-row-1">
                <div className="form-item">
                  <label htmlFor="name-field">Nome</label>
                  <input id="name-field" required></input>
                </div>
                <div className="form-item half-2">
                  <label htmlFor="email-field">E-mail</label>
                  <input id="email-field" type="email" required></input>
                </div>
              </div>
              <div className="form-row-2">
                <div className="form-item">
                  <label htmlFor="text-field">Como eu posso ajudar?</label>
                  <textarea id="text-field" required> </textarea>
                </div>
              </div>

              <button className="primary-button" type="submit">Send Message</button>
            </div>
          </form>
        </section>
      </>

    );
  }
}

export { ContactPage }
