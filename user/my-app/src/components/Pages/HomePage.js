import React, {Component, Fragment} from 'react';
import TopNavigation from "../TopNavigation/TopNavigation";
import TopBanner from "../TopBanner/TopBanner";
import Services from "../Services/Services";
import Analysis from "../Analysis/Analysis";
import Summary from "../Summary/Summary";
import RecentProject from "../RecentProject/RecentProject";
import Courses from "../Courses/Courses";
import Video from "../Video/Video";
import ClientReview from "../ClientReview/ClientReview";
import Footer from "../Footer/Footer";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <TopBanner/>
                <Services/>
                <Analysis/>
                <Summary/>
                <RecentProject/>
                <Courses/>
                <Video/>
                <ClientReview/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;