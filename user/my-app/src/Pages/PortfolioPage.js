import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTopSection from "../components/PageTopSection/PageTopSection";
import AllProjects from "../components/AllProjects/AllProjects";
import Footer from "../components/Footer/Footer";


class PortfolioPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Portfolio" />
                <PageTopSection pageTopTitle="My All Projects" />
                <AllProjects/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PortfolioPage;