import { Component } from 'react';
import { Banner } from '../Banner';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { CTA } from '../CallToAction';

class Project extends Component {
  render() {
    return (
      <div className="project">
        <div className="project-preview-image">
          <img src={this.props.image} alt="Country Explorer"></img>
        </div>
        <div className="project-preview-content">
          <div className="project-summary">
            <h1 className="title">{this.props.title}</h1>
            <h2 className="description">{this.props.description}</h2>
          </div>
          <div className="tech-used">
            {this.props.tech_used.map(each => (
              <p className="tech-item">{each}</p>
            ))}
          </div>
          <div className="project-buttons">
            <a href={this.props.live_demo_link} className="primary-button live-demo">Prévia</a>
            <a target="blank" href={this.props.github_link} className="primary-button github-code">Ver Código Fonte</a>
          </div>
        </div>
      </div>
    )
  }
}



class ProjectsPage extends Component {
  render() {
    let chess = {
      title: 'Xadrez',
      description: "Um jogo de xadrez no navegador onde você pode jogar com outro jogador ou contra o computador.",
      image: 'http://images.chesscomfiles.com/uploads/images_users/tiny_mce/kiloNewton/phpFJ4rsl.png',
      live_demo_link: '/',
      github_link: 'https://github.com/uaiuaief/chess',
      tech_used: [
        'Javascript / CSS3 / HTML5',
        'Python',
        'Flask',
        'Sunfish API'
      ]
    }

    let country_explorer = {
      title: 'Explorador de Países',
      description: "Um site onde você pode aprender sobre novos países, sua língua, cultura e lugares para visitar.",
      image: "https://user-images.githubusercontent.com/22801048/100171954-0b105280-2ea6-11eb-8faa-6ce592a85f7e.jpg",
      live_demo_link: '/',
      github_link: 'https://github.com/uaiuaief/country-explorer',
      tech_used: [
        'Javascript / CSS3 / HTML5',
        'Google Search API',
        'Rest Countries API',
      ]
    }

    let ecommerce = {
      title: 'E-commerce',
      description: "Um e-commerce feito em React e Django, com sistema de pagamentos Stripe integrado.",
      image: "http://24dlmn2bqamt1e72kah59881-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/ezCater-website.png",
      live_demo_link: '/',
      github_link: 'https://github.com/uaiuaief/ecommerce-project',
      tech_used: [
        'Javascript / CSS3 / HTML5',
        'Python',
        'Django Rest Framework',
        'React js',
        'Stripe'
      ]
    }

    let projects = [ecommerce, country_explorer, chess]
    return (
      <>
        <Header location={this.props.location} />
        <Banner
          title='Meus Projetos'
          description='For over 10 years I’ve been designing and developing websites. Below are some of my favourites. '
        />
        <section id="projects-page">
          {projects.map(each => (
            <Project
              title={each.title}
              description={each.description}
              image={each.image}
              github_link={each.github_link}
              live_demo_link={each.live_demo_link}
              tech_used={each.tech_used}
            />
          ))}
        </section>

        <CTA />
      </>
    );
  }
}

export { ProjectsPage }
