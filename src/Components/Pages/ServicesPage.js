import { Component } from 'react';
import { Banner } from '../Banner';
import { Header } from '../Header';
import { pen_svg, monitor_svg } from '../Svgs';
import { CTA } from '../CallToAction';
import { content } from '../Content'


class ServiceProvided extends Component {
  render() {
    const icons = {
      'pen': pen_svg,
      'monitor': monitor_svg
    }

    return (
      <div className="service">
        <div className="service-inner">
          <div className="icon-half">
            <span className="icon-wrapper">
              {icons[this.props.service.icon]}
            </span>
          </div>
          <div className="text-half">
            <h1 className="service-title">{this.props.service.title}</h1>
            {this.props.short
              ?
              this.props.service.summary.map(each => (
                <div className="description">
                  <h2 className="service-subtitle">{each.subtitle}</h2>
                  <p className="description-text">{each.description_text}</p>
                </div>
              ))
              :
              this.props.service.description.map(each => (
                <div className="description">
                  <h2 className="service-subtitle">{each.subtitle}</h2>
                  <p className="description-text">{each.description_text}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}


class ServicesPage extends Component {
  render() {
    document.title = "Serviços | John B."

    let text = content['pt']['services-page']
    let services = content['pt']['services-provided']
    return (
      <>
        <Header location={this.props.location} />
        <Banner
          title={text["banner-title"]}
          description={text["banner-description"]}

        />
        <section id="services-page">
          {services.map(each => (
            <ServiceProvided service={each} />
          ))}
        </section>
        <CTA />
      </>
    );
  }
}

export { ServicesPage, ServiceProvided }
