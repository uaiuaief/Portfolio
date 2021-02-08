import { Component } from 'react';
import { Link } from 'react-router-dom';
import { content } from './Content'

class Banner extends Component {
  render() {
    if (!this.props.home_page) {
      return (
        <section id="banner">
          <div className="banner-inner">
            {this.props.banner_header
              ?
              <h1 className="banner-header">{this.props.banner_header}</h1>
              :
              ''
            }
            <h1 className="banner-title">{this.props.title}</h1>
            <h2 className="banner-description"> {this.props.description} </h2>
          </div>
        </section>
      );
    }
    else {
      let text = content[window.language]['home-page']
      return (
        <section id="banner" className="home-page-banner">
          <div className="banner-inner flex">
            <div className="flex-item-1">
              <h1 className="banner-title">{text['banner-title']}</h1>
              <h2 className="banner-description">{text['banner-description']}</h2>
              <div className="btn-wrapper"> <Link to="/projects" className="primary-button">{text['banner-button']}</Link> </div>
            </div>
            {/* <div className="flex-item-2">
              <div className="img-wrapper">
                <img alt="selfie" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fqph.fs.quoracdn.net%2Fmain-qimg-7c90bd6680229987170ba9bd04777719&f=1&nofb=1" />
              </div>
            </div> */}
          </div>
        </section>
      )

    }
  }
}

export { Banner }
