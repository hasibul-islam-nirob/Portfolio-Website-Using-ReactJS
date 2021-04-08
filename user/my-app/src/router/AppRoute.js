import React, {Component, Fragment} from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ServicesPage from "../Pages/ServicesPage";
import CoursesPage from "../Pages/CoursesPage";
import PortfolioPage from "../Pages/PortfolioPage";
import ContactPage from "../Pages/ContactPage";
import AboutPage from "../Pages/AboutPage";
import NotFoundPage from "../Pages/NotFoundPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>

                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/service" component={ServicesPage} />
                    <Route exact path="/course" component={CoursesPage} />
                    <Route exact path="/portfolio" component={PortfolioPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route  component={NotFoundPage} />
                </Switch>

            </Fragment>
        );
    }
}

export default AppRoute;