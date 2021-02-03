import { Component } from 'react';
import { Link } from 'react-router-dom';
import { content } from './Content'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            highlighted: props.location.pathname,
            show_menu: false,
        }

    }

    onScroll = () => {
        if (this.state.show_menu && window.pageYOffset > 0) {
            this.toggleMenu()
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    toggleMenu = () => {
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
        let text = content[window.language]['navbar']
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
                                {text['projects']}
                            </Link>
                            <Link
                                className={this.state.highlighted === '/services' ? 'highlighted' : ''}
                                to='/services'>
                                {text['services']}
                            </Link>
                            <Link
                                className={this.state.highlighted === '/about' ? 'highlighted' : ''}
                                to='/about'>
                                {text['about']}
                            </Link>
                            <Link
                                className={this.state.highlighted === '/contact' ? 'highlighted' : ''}
                                to='/contact'>
                                {text['contact']}
                            </Link>
                        </nav>

                        <div className="toggle-menu">
                            <button className="icon-wrapper" onClick={() => this.toggleMenu()}>
                                {this.state.show_menu
                                    ?
                                    <img src="/icons/close.svg" alt='close-menu' />
                                    :
                                    <img src="/icons/menu-icon.svg" alt='menu' />
                                }
                            </button>

                            <nav id="mobile-nav">
                                <div className={this.state.highlighted === '/projects' ? "nav-item highlighted" : "nav-item"}>
                                    <Link to='/projects'>{text['projects']}</Link>
                                </div>
                                <div className={this.state.highlighted === '/services' ? "nav-item highlighted" : "nav-item"}>
                                    <Link to='/services'>{text['services']}</Link>
                                </div>
                                <div className={this.state.highlighted === '/about' ? "nav-item highlighted" : "nav-item"}>
                                    <Link to='/about'>{text['about']}</Link>
                                </div>
                                <div className={this.state.highlighted === '/contact' ? "nav-item highlighted" : "nav-item"}>
                                    <Link to='/contact'>{text['contact']}</Link>
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
