import React, {Fragment} from 'react'
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import TopBanner from "./components/TopBanner/TopBanner";
import PageTopSection from "./components/PageTopSection/PageTopSection";
import AllServices from "./components/AllServices/AllServices";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
        <TopNavigation/>
        <PageTopSection pageTopTitle="My Services" />
        <AllServices/>
        <ContactForm/>
        <Footer/>

    </div>
  );
}

export default App;
