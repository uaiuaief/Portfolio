import { Component } from 'react';
import { Link } from 'react-router-dom';
import { email_svg, github_svg, phone_svg } from './Svgs'
import { content } from './Content'


class CTA extends Component {
    render() {
        let text = content[window.language]['CTA']
        return (
            <section id="cta">
                <div className="cta-inner">
                    <div className="cta-call">
                        <div className="cta-call-text">
                            <h1>{text["title"]}</h1>
                            <h2>{text["description"]}</h2>
                        </div>
                        <Link to="/contact" className="cta-button primary-button">{text["button"]}</Link>
                    </div>
                    <div className="cta-contact-info">
                        <div>
                            <span style={{width: "24px"}}>
                            {email_svg}
                            </span>
                            <a href="mailto:email@gmail.com">jhonatasbn14@gmail.com</a>
                        </div>
                        <div>
                            {phone_svg}
                            <a href="#">{text["phone"]}</a>
                        </div>
                        <div>
                            {github_svg}
                            <a target='blank' href='https://github.com/uaiuaief'>github</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export { CTA }

