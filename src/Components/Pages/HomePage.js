import { Component } from 'react';
import { Header } from '../Header';
import { Banner } from '../Banner';
import { CTA } from '../CallToAction';
import { Project } from './ProjectsPage';
import { ServiceProvided } from './ServicesPage';
import { stripes_svg } from '../Svgs'
import { Link } from 'react-router-dom';
import { content } from '../Content'


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
    document.title = "Início | John B."

    let text = content[window.language]['home-page']
    let services = content[window.language]['services-provided']
    let project_list = content[window.language]['projects']
    let featured_project = project_list[2];

    const quotes = {
      'arnold': {
        'text': 'Hasta la vista, baby!',
        'author': 'Arnold Schwarzenegger',
        'author_title': 'The Terminator',
        'picture': `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.-8QKMIQGgt1C5ZJzquVMvQAAAA%26pid%3DApi&f=1`
      },
      'capitão': {
        'text': `Seb is an excellent web designer and faultless technician. He’s a pleasure to work with, great value for money and will always go the extra mile when necessary.`,
        'author': 'Capitão Nascimento',
        'author_title': 'Capitão do Bope',
        'picture': `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1167341457%2Fcapnascimento_400x400.png&f=1&nofb=1`
      }
    }

    return (
      <>
        <Header location={this.props.location} />
        <Banner home_page={true} />

        <section id="home-page">
          <section id="project-section">
            <div className="section-title">
              <h1>{text['section-1-title']}</h1>
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
          {/* <Testimonial quote={quotes['capitão']} /> */}

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

          {/* <Testimonial quote={quotes['arnold']} /> */}
        </section>
        <CTA />
      </>
    );
  }
}

export { HomePage }
