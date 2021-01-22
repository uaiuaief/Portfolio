import { Component } from 'react';

class CTA extends Component {
    render() {
        return (
            <section id="cta">
                <div className="cta-inner">
                    <div className="cta-call">
                       <h1>Vamos Trabalhar Juntos</h1> 
                       <h2>Tem um projeto que gostaria de discutir?</h2> 
                       <button className="cta-button primary-button">Entre em Contato</button>
                    </div>
                    <div className="cta-contact-info">
                       <a>Email@gmail.com</a> 
                       <a>github link</a> 
                       <a>41 99999-9999</a> 
                       <a>JOHNB_IG</a> 
                    </div>
                </div>
            </section>
        );
    }
}

export { CTA }

