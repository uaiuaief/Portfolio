import { Component } from 'react';
import { Banner } from '../Banner';
import { Header } from '../Header';
import { content } from '../Content'

class ContactPage extends Component {
  render() {
    document.title = "Contato | John B."
    let text = content[window.language]['contact-page']
    return (
      <>
        <Header location={this.props.location} />
        <Banner
          title={text["banner-title"]}
          description={text["banner-description"]}
        />
        <section id="contact-page">
          <div className="status">
            <h2>Status</h2>
            <h1>{text['status-text-1']}</h1>
            <h3>{text['status-text-2']}</h3>
          </div>
          <form>
            <div className="form-inner">
              <div className="form-row-1">
                <div className="form-item">
                  <label htmlFor="name-field">{text['form-name-label']}</label>
                  <input id="name-field" required></input>
                </div>
                <div className="form-item half-2">
                  <label htmlFor="email-field">{text['form-email-label']}</label>
                  <input id="email-field" type="email" required></input>
                </div>
              </div>
              <div className="form-row-2">
                <div className="form-item">
                  <label htmlFor="text-field">{text['form-textarea-label']}</label>
                  <textarea id="text-field" required> </textarea>
                </div>
              </div>

              <button className="primary-button" type="submit">{text['form-submit-button']}</button>
            </div>
          </form>
        </section>
      </>

    );
  }
}

export { ContactPage }
