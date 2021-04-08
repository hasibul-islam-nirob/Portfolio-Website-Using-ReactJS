import React, {Component, Fragment} from 'react';
import TopNavigation from "../TopNavigation/TopNavigation";
import PageTopSection from "../PageTopSection/PageTopSection";
import AllProjects from "../AllProjects/AllProjects";
import Footer from "../Footer/Footer";

class PortfolioPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTopSection pageTopTitle="My All Projects" />
                <AllProjects/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PortfolioPage;