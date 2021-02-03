import { Component } from 'react';
import { Banner } from '../Banner';
import { Header } from '../Header';
import { CTA } from '../CallToAction';
import { content } from '../Content'


class Project extends Component {
  render() {
    let text = content[window.language]['projects-page']

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
            <a target="blank" href={this.props.live_demo_link} className="primary-button live-demo">{text["preview-button"]}</a>
            <a target="blank" href={this.props.github_link} className="primary-button github-code">{text["source-button"]}</a>
          </div>
        </div>
      </div>
    )
  }
}


class ProjectsPage extends Component {
  render() {
    document.title = "Meus Projetos | John B."
    let text = content[window.language]['projects-page']
    let project_list = content[window.language]['projects']
    return (
      <>
        <Header location={this.props.location} />
        <Banner
          title={text["banner-title"]}
          description={text["banner-description"]}
        />
        <section id="projects-page">
          {project_list.map(each => (
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

export { ProjectsPage, Project }
