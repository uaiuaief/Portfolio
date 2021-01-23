import { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            highlighted: props.location.pathname
        }
    }

    render() {
        return (
            <header>
                <div className="header-inner">
                    <div className="logo">
                        <Link to='/'>JOHN B.</Link>
                    </div>
                    <div className="menu">
                        <nav>
                            <Link
                                className={this.state.highlighted === '/projects' ? 'highlighted' : ''}
                                to='/projects'>
                                Projetos
                            </Link>
                            <Link
                                className={this.state.highlighted === '/services' ? 'highlighted' : ''}
                                to='/services'>Serviços</Link>
                            <Link
                                className={this.state.highlighted === '/about' ? 'highlighted' : ''}
                                to='/about'>Sobre Mim</Link>
                            <Link
                                className={this.state.highlighted === '/contact' ? 'highlighted' : ''}
                                to='/contact'>Contato</Link>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export { Header }
