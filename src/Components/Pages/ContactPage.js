import { Component } from 'react';
import { Banner } from '../Banner';
import { Header } from '../Header';
import { content } from '../Content'
import { Redirect } from 'react-router-dom';

class ContactPage extends Component {
  state = {
    name: '',
    email: '',
    body: '',
    redirect: false
  }

  onSubmit = async (e) => {
    e.preventDefault();

    // let form_data = new FormData();
    // form_data.append('name', this.state.name);
    // form_data.append('email', this.state.email);
    // form_data.append('message', this.state.body);

    let form_data = {
      "name": this.state.name,
      "email": this.state.email,
      "message": this.state.body,
    }

    let url = "https://ofvuubwl67.execute-api.sa-east-1.amazonaws.com/Beta/send_email";
    let res = await fetch(url, {
      method: "POST",
      mode: 'no-cors',
      // headers: {
      // },
      body: JSON.stringify(form_data)
    })

    this.setState({
      redirect: true
    })
  }

  componentDidMount() {
    document.querySelector('body').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  render() {
    document.title = "Contato | John B."
    let text = content[window.language]['contact-page']

    if (this.state.redirect){
      return (
        <Redirect to="/contact/success/"></Redirect>
      )
    }
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
          <form onSubmit={e => this.onSubmit(e)}>
            <div className="form-inner">
              <div className="form-row-1">
                <div className="form-item">
                  <label htmlFor="name-field">{text['form-name-label']}</label>
                  <input id="name-field" required onChange={e => this.setState({name: e.target.value})}></input>
                </div>
                <div className="form-item half-2">
                  <label htmlFor="email-field">{text['form-email-label']}</label>
                  <input id="email-field" type="email" required onChange={e => this.setState({email: e.target.value})}></input>
                </div>
              </div>
              <div className="form-row-2">
                <div className="form-item">
                  <label htmlFor="text-field">{text['form-textarea-label']}</label>
                  <textarea id="text-field" required onChange={e => this.setState({body: e.target.value})}></textarea>
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
