import { Component } from 'react';
import { Banner } from '../Banner';
import { Header } from '../Header';
import { pen_svg, monitor_svg } from '../Svgs';
import { CTA } from '../CallToAction';


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
            {this.props.service.description.map(each => (
              <div className="description">
                <h2 className="service-subtitle">{each.subtitle}</h2>
                <p className="description-text">{each.description_text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}


class ServicesPage extends Component {
  render() {
    const services = [
      {
        'icon': 'pen',
        'title': "Web Design",
        'description': [
          {
            'subtitle': 'User Focused',
            'description_text': `A website should be designed for the people who will use it, so that's exactly what I do. User focused design should be the primary goal of any website.`
          },
          {
            'subtitle': 'eCommerce',
            'description_text': `Creating a good online store can be hard. Over the years I've learned the best ways to design stores that sell products and provide real value to customers.`
          },
          {
            'subtitle': 'Application UI',
            'description_text': `The user interface of an application, whether it's mobile or desktop, can make or break a business. Getting the interface right and most importantly of all, making it easy to navigate, are the keys to a successful app.`
          },
        ]
      },
      {
        'icon': 'monitor',
        'title': "Web Development",
        'description': [
          {
            'subtitle': 'HTML / CSS',
            'description_text': `Creating a strong foundation for a website means getting the HTML and CSS architecture right. If you've got a design I can create the front-end code for it. `
          },
          {
            'subtitle': 'WordPress',
            'description_text': `Almost all of the websites I make are done using WordPress and the reason is simple: It just works. You can easily update every piece of content, turn sections on or off and so much more. `
          },
          {
            'subtitle': 'Performance',
            'description_text': `Having a fast website is key to keeping people around which ultimately converts them into customers. There are a myriad of techniques involved in making a fast website, all of which I've spent years learning. I build these techniques into every site I code and can also offer this as a standalone service for existing websites. `
          },
        ]
      },

    ]

    return (
      <>
        <Header location={this.props.location} />
        <Banner
          title='Meus Serviços'
          description='Tudo que eu ofereço com uma visão detalhada de cada um'
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

export { ServicesPage }
