import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTopSection from "../components/PageTopSection/PageTopSection";
import AllServices from "../components/AllServices/AllServices";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

class ServicesPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTopSection pageTopTitle="My Services" />
                <AllServices/>
                <ContactForm/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicesPage;