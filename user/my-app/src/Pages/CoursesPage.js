import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTopSection from "../components/PageTopSection/PageTopSection";
import AllCourses from "../components/AllCourses/AllCourses";
import Footer from "../components/Footer/Footer";


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