import { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-inner">
                    <div className="logo">
                        <Link to='/'>JOHN B.</Link>
                    </div>
                    <div className="menu">
                        <nav>
                            <Link to='/projects'>Projetos</Link>
                            <Link to='/services'>Serviços</Link>
                            <Link to='/about'>Sobre Mim</Link>
                            <Link to='/contact'>Contato</Link>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export { Header }
