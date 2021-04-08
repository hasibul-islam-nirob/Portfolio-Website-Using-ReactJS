import React, {Component, Fragment} from 'react';
import TopNavigation from "../TopNavigation/TopNavigation";
import PageTopSection from "../PageTopSection/PageTopSection";
import AboutPageInformation from "../AboutPageInformation/AboutPageInformation";
import Footer from "../Footer/Footer";

class AboutPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTopSection pageTopTitle="About Me" />
                <AboutPageInformation/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;