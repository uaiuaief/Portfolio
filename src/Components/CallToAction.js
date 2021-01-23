import { Component } from 'react';
import { email_svg, github_svg, phone_svg } from './Svgs'


class CTA extends Component {
    render() {

        return (
            <section id="cta">
                <div className="cta-inner">
                    <div className="cta-call">
                        <div className="cta-call-text">
                            <h1>Vamos Trabalhar Juntos</h1>
                            <h2>Tem um projeto que gostaria de discutir?</h2>
                        </div>
                        <button className="cta-button primary-button">Entre em Contato</button>
                    </div>
                    <div className="cta-contact-info">
                        <div>
                            {email_svg}
                            <a href="mailto:email@gmail.com">Email@gmail.com</a>
                        </div>
                        <div>
                            {github_svg}
                            <a target='blank' href='https://github.com/uaiuaief'>github</a>
                        </div>
                        <div>
                            {phone_svg}
                            <a href="#">41 99999-9999</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export { CTA }

