import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../src/images/bashblood.svg'



class Navbar extends Component {
    render(){
        return(
            <nav className="nav-wrapper red darken-2">
                <div className="container">
            <a href="#"><img src={Logo} alt="logo" className="brand-logo"></img></a>
            <a href="#side-menu" className="sidenav-trigger">
            <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
                {/* <li><Link to="/">Home</Link></li> 
                <li><Link to="/about">About</Link></li> 
                <li><Link to="/centres">Centres</Link></li> 
                <li><Link to="/signin">Sign In</Link></li>     */}
                <li><Link to="/home">Home</Link></li>
                <li><a href="#">About</a></li>
                <li><Link to="/centres">Centres</Link></li>
                <li><a href="#">Sign In</a></li>
            </ul>
            <ul className="sidenav blue lighten-3" id="side-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Centres</a></li>
                <li><a href="#">Sign In</a></li>
            </ul>
            </div>
            </nav>
        )
    }
}
export default Navbar