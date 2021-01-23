import { Component } from 'react';
import { Banner } from '../Banner';
import { Header } from '../Header';

class AboutPage extends Component {
  render() {
    return (
      <>
        <Header location={this.props.location}/>
        <section id="about-page">
          <Banner
            title='Sobre Mim'
            description='Conheça um pouco sobre mim, quem eu sou, de onde eu venho e quais são os meus objetivos'
          />
        About Page
        </section>
      </>
    );
  }
}

export { AboutPage }
