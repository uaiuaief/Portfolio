import { Component } from 'react';
import { Banner } from '../Banner';

class AboutPage extends Component {
  render() {
    return (
      <section id="about-page">
        <Banner
          title='Sobre Mim'
          description='Conheça um pouco sobre mim, quem eu sou, de onde eu venho e quais são os meus objetivos'
        />
        About Page
      </section>
    );
  }
}

export { AboutPage }
