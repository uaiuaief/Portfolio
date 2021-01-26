import { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            highlighted: props.location.pathname,
            show_menu: false,
        }
    }

    toggleMenu(e) {
        const nav = document.getElementById('mobile-nav')
        const logo = document.querySelector('.logo a')

        this.setState({
            show_menu: !this.state.show_menu
        }, () => {
            nav.style.visibility = this.state.show_menu ? 'visible' : 'hidden'
            nav.style.height = this.state.show_menu ? '100%' : '0%'
            nav.style.padding = this.state.show_menu ? '126px 4% 4% 4%' : '0% 4% 0% 4%'
            nav.style.opacity = this.state.show_menu ? '1' : '0'
            logo.style.color = this.state.show_menu ? '#191a1d' : '#fff'
        })
    }

    render() {
        return (
            <header>
                <div className="header-inner">
                    <div className="logo">
                        <Link to='/'>JOHN B.</Link>
                    </div>
                    <div className="menu">
                        <nav id="desktop-nav">
                            <Link
                                className={this.state.highlighted === '/projects' ? 'highlighted' : ''}
                                to='/projects'>
                                Projetos
                            </Link>
                            <Link
                                className={this.state.highlighted === '/services' ? 'highlighted' : ''}
                                to='/services'>
                                Serviços
                            </Link>
                            <Link
                                className={this.state.highlighted === '/about' ? 'highlighted' : ''}
                                to='/about'>
                                Sobre Mim
                            </Link>
                            <Link
                                className={this.state.highlighted === '/contact' ? 'highlighted' : ''}
                                to='/contact'>
                                Contato
                            </Link>
                        </nav>

                        <div className="toggle-menu">
                            <button className="icon-wrapper" onClick={e => this.toggleMenu(e)}>
                                {this.state.show_menu
                                    ?
                                    <img src="/icons/close.svg" />
                                    :
                                    <img src="/icons/menu-icon.svg" />
                                }
                            </button>

                            <nav id="mobile-nav">
                                <div className={this.state.highlighted === '/projects' ? "nav-item highlighted": "nav-item"}>
                                    <Link to='/projects'> Projetos </Link>
                                </div>
                                <div className={this.state.highlighted === '/services' ? "nav-item highlighted": "nav-item"}>
                                    <Link to='/services'> Serviços </Link>
                                </div>
                                <div className={this.state.highlighted === '/about' ? "nav-item highlighted": "nav-item"}>
                                    <Link to='/about'> Sobre Mim </Link>
                                </div>
                                <div className={this.state.highlighted === '/contact' ? "nav-item highlighted": "nav-item"}>
                                    <Link to='/contact'> Contato </Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export { Header }
