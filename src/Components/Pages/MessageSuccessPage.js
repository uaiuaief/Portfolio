import { Component } from 'react';
import { Banner } from '../Banner';
import { Header } from '../Header';
import { content } from '../Content'
import { ServiceProvided } from './ServicesPage';
import { Link } from 'react-router-dom';
import { CTA } from '../CallToAction';

class MessageSuccessPage extends Component {

  componentDidMount() {
    document.querySelector('body').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  render() {
    document.title = "Sucesso | John B."
    let services = content[window.language]['services-provided']
    let text = content[window.language]['home-page']

    return (
      <>
        <Header location={this.props.location} />
        <Banner
          banner_header='Fale Comigo'
          title='Mensagem Enviada!'
          description='Obrigado pela sua mensagem. Eu sempre tento responder em no máximo 2 dias.'
        />
        <section id="contact-success-page">
          <section id="services-section">
            <div className="section-title">
              <h1>{text['section-2-title']}</h1>
            </div>
            <div className="section-inner" >
              <div className="flex">
                <ServiceProvided short={true} service={services[0]} />
                <ServiceProvided short={true} service={services[1]} />
              </div>
              <div className="top-space">
                <Link className="primary-button" to="/services">{text['section-2-button']}</Link>
              </div>

            </div>
          </section>
        </section>
        <CTA />
      </>

    );
  }
}

export { MessageSuccessPage }
