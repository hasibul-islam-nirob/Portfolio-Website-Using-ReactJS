import React, {Component, Fragment} from 'react';
import TopNavigation from "../TopNavigation/TopNavigation";
import PageTopSection from "../PageTopSection/PageTopSection";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTopSection pageTopTitle="Contact With Me" />
                <ContactForm/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ContactPage;