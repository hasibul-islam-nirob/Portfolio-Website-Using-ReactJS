import React, {Component, Fragment} from 'react';
import TopNavigation from "../TopNavigation/TopNavigation";
import PageTopSection from "../PageTopSection/PageTopSection";
import AllCourses from "../AllCourses/AllCourses";
import Footer from "../Footer/Footer";

class CoursesPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTopSection pageTopTitle="All Courses" />
                <AllCourses/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CoursesPage;