import { Component } from 'react';
import { Header } from '../Header';
import { Banner } from '../Banner';
import { Project, project_list } from './ProjectsPage';
import { ServiceProvided } from './ServicesPage';
import { stripes_svg } from '../Svgs'
import { Link } from 'react-router-dom';


class Testimonial extends Component {
  render() {
    return (
      <section className="testimonial">
        <div className="testimonial-inner"
          style={{
            background: '#f6f6f6 url("/icons/stripes-svg.svg") center/600px no-repeat',
          }}>
          <div className="quote">
            <div className="quote-inner">
              <p className="quote-text">{this.props.quote.text}</p>
            </div>
            <div className="quote-author">
              <img alt="author" src={this.props.quote.picture} />
              <p className="author-name">{this.props.quote.author}</p>
              <p className="author-title">{this.props.quote.author_title}</p>
            </div>
          </div>
        </div>
      </section >
    )
  }
}

class HomePage extends Component {

  render() {
    let featured_project = project_list[0];

    const quotes = {
      'arnold': {
        'text': 'Hasta la vista, baby!',
        'author': 'Arnold Schwarzenegger',
        'author_title': 'The Terminator',
        'picture': `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.-8QKMIQGgt1C5ZJzquVMvQAAAA%26pid%3DApi&f=1`
      },
      'capitão': {
        'text': 'Já avisei que vai dar merda',
        'author': 'Capitão Nascimento',
        'author_title': 'Capitão do Bope',
        'picture': `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1167341457%2Fcapnascimento_400x400.png&f=1&nofb=1`
      }
    }

    const services = [
      {
        'icon': 'pen',
        'title': "Web Design",
        'description': [
          {
            'subtitle': 'User Focused',
            'description_text': `A website should be designed for the people who will use it, so that's exactly what I do. User focused design should be the primary goal of any website.`
          },
        ]
      },
      {
        'icon': 'monitor',
        'title': "Web Development",
        'description': [
          {
            'subtitle': 'Responsive and Fast',
            'description_text': `Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible. `
          },
        ]
      },
    ]

    return (
      <>
        <Header location={this.props.location} />
        <Banner home_page={true} />

        <section id="home-page">
          <section id="project-section">
            <div className="section-title">
              <h1>Featured Project</h1>
            </div>

            <Project
              title={featured_project.title}
              description={featured_project.description}
              image={featured_project.image}
              github_link={featured_project.github_link}
              live_demo_link={featured_project.live_demo_link}
              tech_used={featured_project.tech_used}
            />

          </section>
          <Testimonial
            quote={quotes['capitão']}
          />

          <section id="services-section">
            <div className="section-title">
              <h1>My Services</h1>
            </div>
            <div className="section-inner" >
              <div className="flex">
                <ServiceProvided service={services[0]} />
                <ServiceProvided service={services[1]} />
              </div>
              <div className="top-space">
                <Link className="primary-button" to="/services">Ver Todos os Serviços</Link>
              </div>

            </div>
          </section>

          <Testimonial
            quote={quotes['arnold']}
          />

        </section>
      </>
    );
  }
}

export { HomePage }
