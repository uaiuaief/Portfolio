import { Component } from 'react';
import { Banner } from '../Banner';
import { Header } from '../Header';
import { CTA } from '../CallToAction';
import { Link } from 'react-router-dom';
import { content } from '../Content'

class AboutPage extends Component {
  render() {
    document.title = "Sobre Mim | John B."
    let text = content[window.language]['about-page']
    return (
      <>
        <Header location={this.props.location} />
        <Banner
          title={text["banner-title"]}
          description={text["banner-description"]}
        />
        <section id="about-page">
          <div className="content">
            <div className="text-block">
              <h1 className="title">{text['textblock-1-title']}</h1>
              <p className="text">{text['textblock-1-paragraph1']}</p>
              <p className="text">{text['textblock-1-paragraph2']}</p>
              <p className="text">{text['textblock-1-paragraph3']}</p>
            </div>
            <div id="whyworkwithme" className="text-block">
              <h1 className="title">{text['textblock-2-title']}</h1>
              <p className="text">{text['textblock-2-paragraph1']}</p>
              <p className="text">{text['textblock-2-paragraph2']}</p>
              <p className="text">{text['textblock-2-paragraph3']}</p>
            </div>
            <Link className="primary-button" to='/contact'>{text['contact-button']}</Link>
          </div>
        </section>
        <CTA />

      </>
    );
  }
}

export { AboutPage }
