import { Component } from 'react';
import { Banner } from '../Banner';
import { Header } from '../Header';
import { CTA } from '../CallToAction';

class AboutPage extends Component {
  render() {
    return (
      <>
        <Header location={this.props.location} />
        <Banner
          title='Sobre Mim'
          description='Conheça um pouco sobre mim, quem eu sou, de onde eu venho e quais são os meus objetivos'
        />
        <section id="about-page">
          <div className="content">
            <div className="text-block">
              <h1 className="title">Who I Am</h1>
              <p className="text">
                My name's Seb. I'm a web designer and developer based in Southampton, UK.
              </p>
              <p className="text">
                During the day I’m the lead developer at a local agency. During the evenings I spend my time working on freelance projects and building my own products.
              </p>
              <p className="text">
                My most recent project is called Calendi. It’s a simple yet powerful editorial calendar for WordPress.
              </p>
            </div>
            <div id="whyworkwithme" className="text-block">
              <h1 className="title">Why Work With Me</h1>
              <p className="text">
                There’s nothing I enjoy more than designing and developing good websites for nice people. It really is that simple.
              </p>
              <p className="text">
                I’ve spent many years trying to perfect what I do and while I’ll never be perfect, I do my best to come close.
              </p>
              <p className="text">
                If you’ve got a project you’d like to work on with me just get in touch and we can get to work!
              </p>
            </div>
            <button className="primary-button">Contact Me</button>
          </div>
        </section>
        <CTA />

      </>
    );
  }
}

export { AboutPage }
