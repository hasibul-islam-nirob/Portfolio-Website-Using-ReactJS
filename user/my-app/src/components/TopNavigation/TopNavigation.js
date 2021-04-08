import React, {Component, Fragment} from 'react';
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";
import {Nav,Navbar,NavDropdown} from "react-bootstrap";
import myLogo from "../../asset/images/myLogo.png"
import redLogo from "../../asset/images/redLogo.png"
import blueLogo from "../../asset/images/blueLogo.png"

class TopNavigation extends Component {

    constructor() {
        super();
        this.state={
            navBarTitle:"navTitle",
            myBrandLogo:[redLogo],
            navBgColor:"navBarBagraound",
            navItems:"navItem",
            navVariant:"dark"
        }
    }

    onScrollChangeNavbar=()=>{
        if(window.scrollY > 100){
            this.setState({navVariant:"light", navBarTitle:"navTitleScroll", myBrandLogo:[blueLogo], navBgColor:"navBarBgScroll", navItems:"navItemScroll"});
        }else if (window.scrollY < 100){
            this.setState({navVariant:"dark", navBarTitle:"navTitle", myBrandLogo:[redLogo], navBgColor:"navBarBagraound", navItems:"navItem"});
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScrollChangeNavbar);
    }


    render() {
        return (
            <Fragment>
                <Navbar variant={this.state.navVariant} className={this.state.navBgColor} fixed="top" collapseOnSelect expand="lg" >
                    <Navbar.Brand className={this.state.navBarTitle}> <img src={this.state.myBrandLogo} /> Nirob</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav  >
                            <Nav.Link className={this.state.navItems} href="#deets">Home</Nav.Link>
                            <Nav.Link className={this.state.navItems} href="#deets">Services</Nav.Link>
                            <Nav.Link className={this.state.navItems} href="#deets">Courses</Nav.Link>
                            <Nav.Link className={this.state.navItems} href="#deets">Portfolio</Nav.Link>
                            <Nav.Link className={this.state.navItems} href="#deets">Contact</Nav.Link>
                            <Nav.Link className={this.state.navItems} href="#deets">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;